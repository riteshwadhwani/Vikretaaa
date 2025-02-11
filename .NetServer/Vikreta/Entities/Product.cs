using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vikreta.Entities
{
    public class Product : BaseEntity
    {
        [Required(ErrorMessage = "Product name is required.")]
        public string Name { get; set; }

        [StringLength(500, ErrorMessage = "Description cannot exceed 500 characters.")]
        public string Description { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Required]
        public long SellerId { get; set; }

        [ForeignKey("SellerId")]
        public User Seller { get; set; }

        
    }
}
