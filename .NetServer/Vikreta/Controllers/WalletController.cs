using Microsoft.AspNetCore.Mvc;
using Vikreta.Entities;
using Vikreta.Data; // Assuming this is your DbContext namespace
using System.Linq;
using Vikreta.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;

namespace Vikreta.Controllers
{
    [EnableCors("AllowAll")]
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    [AllowAnonymous]
   
    public class WalletController : ControllerBase
    {
        private readonly AppDbContext _context; 

        public WalletController(AppDbContext context)
        {
            _context = context;
        }

       
        [HttpGet("{userId}")]
        public IActionResult GetWalletAmount(long userId)
        {
            var user = _context.Users.Find(userId);
            if (user == null)
                return NotFound(new { message = "User not found" });

            return Ok(new ApiResponse(user.WalletAmount.ToString(), true));
        }

       
        [HttpPut("update/{userId}")]
        public IActionResult UpdateWalletAmount(long userId, [FromBody] double amount)
        {
            Console.WriteLine(amount);
            var user = _context.Users.Find(userId);
            if (user == null)
                return NotFound(new { message = "User not found" });
           
            if (amount < 0 && user.WalletAmount + amount < 0)
                return BadRequest(new { message = "Insufficient wallet balance" });

            user.WalletAmount += amount;
            Console.WriteLine(user.WalletAmount);
            _context.SaveChanges();

            return Ok(new ApiResponse("Updated Successfully", true));
        }

        
        [HttpDelete("delete/{userId}")]
        public IActionResult ResetWalletAmount(int userId)
        {
            var user = _context.Users.Find(userId);
            if (user == null)
                return NotFound(new { message = "User not found" });

            user.WalletAmount = 0;
            _context.SaveChanges();

            return Ok(new { message = "Wallet balance reset to 0", WalletAmount = user.WalletAmount });
        }
    }
}
