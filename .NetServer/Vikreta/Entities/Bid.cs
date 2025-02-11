using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vikreta.Entities
{
    public class Bid : BaseEntity
    {
        public long ProductId { get; set; }
        public long BuyerId { get; set; }
        [Range(0.01, 999999999999999999.99, ErrorMessage = "Bid amount must be between 0.01 and 999999.99.")]
        public decimal BidAmount { get; set; }


        [Required]
        [ForeignKey("ProductId")]
        public Product Product { get; set; }

        [Required]
        [ForeignKey("BuyerId")]
        public User Buyer { get; set; }
    }
}
