using System.ComponentModel.DataAnnotations;

namespace Vikreta.Entities
{
    public class User : BaseEntity
    {
        [Required(ErrorMessage = "Name is required.")]
        public string Name { get; set; }

        [EmailAddress(ErrorMessage = "Please enter a valid email address.")]
        public string Email { get; set; }

        [Required]
        [Range(3, 20, ErrorMessage = "Password must be between 3 and 20 characters long.")]
        public string Password { get; set; }

        public string Role { get; set; }

        [Range(0, double.MaxValue, ErrorMessage = "Wallet amount cannot be negative.")]
        public double WalletAmount { get; set; } = 0; // Default wallet balance is 0
    }
}
