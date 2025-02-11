using System.Data;
using Vikreta.Data;
using Vikreta.Entities;
using Vikreta.Repositories;

namespace YourNamespace.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly AppDbContext _context;

        public ProductRepository(AppDbContext context)
        {
            _context = context;
        }

        public Product GetProductById(long productId)
        {
            try
            {
                return _context.Products.Find(productId);

            }
            catch(Exception e)
            {
                throw e;
            }
        }

        public Product AddProduct(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
            return product;
        }

        public List<Product> GetAllProducts()
        {
            return _context.Products.ToList();
        }

        public List<Product> GetProductsByUser(long userId)
        {
            return _context.Products.Where(p => p.SellerId == userId).ToList();
        }

        public bool DeleteProductById(long productId)
        {
            var product = _context.Products.Find(productId);
            if (product == null) return false;

            _context.Products.Remove(product);
            _context.SaveChanges();
            return true;
        }

       
    }
}
