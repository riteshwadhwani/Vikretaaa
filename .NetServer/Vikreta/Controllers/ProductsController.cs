using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Vikreta.DTO;
using Vikreta.Entities;
using Vikreta.Services;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    [AllowAnonymous]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet("{productId}")]
        public IActionResult GetProductById(int productId)
        {
            var product = _productService.GetProductById(productId);
            if (product == null)
            {
                return NotFound($"Product with ID {productId} not found.");
            }

            return Ok(product);
        }

        [HttpPost("addProduct")]
        public IActionResult AddProduct([FromBody] ProductDTO productDTO)
        {
            var createdProduct = _productService.AddProduct(productDTO);
            if (createdProduct == null)
            {
                return BadRequest("Failed to add product.");
            }

            return Ok(createdProduct);
        }

        [HttpGet("allProducts")]
        public IActionResult GetAllProducts()
        {
            var products = _productService.GetAllProducts();
            return Ok(products);
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetAllProductsByUserId(int userId)
        {
            var products = _productService.GetProductsByUser(userId);
            return Ok(products);
        }

        [HttpDelete("delete/{productId}")]
        public IActionResult DeleteProductById(int productId)
        {
            var result = _productService.DeleteProductById(productId);
            if (!result)
            {
                return BadRequest($"Failed to delete product with ID {productId}.");
            }

            return Ok($"Product with ID {productId} deleted successfully.");
        }
    }
}
