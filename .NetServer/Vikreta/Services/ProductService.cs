using Vikreta.Entities;
using Vikreta.Services;
using Vikreta.DTO;
using Vikreta.Entities;
using Vikreta.Repositories;

namespace YourNamespace.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public Product GetProductById(int productId)
        {
            return _productRepository.GetProductById(productId);
        }

        public Product AddProduct(ProductDTO productDTO)
        {
            var product = new Product
            {
                Name = productDTO.Name,
                Description = productDTO.Description,
                Price = productDTO.Price,
                SellerId = productDTO.SellerId
            };

            return _productRepository.AddProduct(product);
        }

        public List<ProductResponseDTO> GetAllProducts()
        {
            return _productRepository.GetAllProducts()
                                      .Select(p => new ProductResponseDTO
                                      {
                                          ProductId = p.Id,
                                          Name = p.Name,
                                          Description = p.Description,
                                          Price = p.Price
                                      }).ToList();
        }

        public List<ProductResponseDTO> GetProductsByUser(int userId)
        {
            return _productRepository.GetProductsByUser(userId)
                                      .Select(p => new ProductResponseDTO
                                      {
                                          ProductId = p.Id,
                                          Name = p.Name,
                                          Description = p.Description,
                                          Price = p.Price
                                      }).ToList();
        }

        public bool DeleteProductById(int productId)
        {
            return _productRepository.DeleteProductById(productId);
        }
    }
}
