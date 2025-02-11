using Vikreta.Entities;

namespace Vikreta.Repositories
{
    public interface IProductRepository
    {
        Product GetProductById(long productId);
        Product AddProduct(Product product);
        List<Product> GetAllProducts();
        List<Product> GetProductsByUser(long userId);
        bool DeleteProductById(long productId);
    }
}
