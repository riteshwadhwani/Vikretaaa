using Vikreta.Entities;
using Vikreta.DTO;

namespace Vikreta.Services
{
    public interface IProductService
    {
        Product GetProductById(int productId);
        Product AddProduct(ProductDTO productDTO);
        List<ProductResponseDTO> GetAllProducts();
        List<ProductResponseDTO> GetProductsByUser(int userId);
        bool DeleteProductById(int productId);
    }
}
