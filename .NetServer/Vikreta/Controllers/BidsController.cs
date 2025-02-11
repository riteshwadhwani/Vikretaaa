using Microsoft.AspNetCore.Mvc;
using Vikreta.DTO;
using Vikreta.Entities;
using Vikreta.Services;

namespace Vikreta.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    public class BidsController : ControllerBase
    {
        private readonly IBidService _bidService;

        public BidsController(IBidService bidService)
        {
            _bidService = bidService;
        }

        [HttpPost("placeBid")]
        public IActionResult PlaceBid([FromBody] BidDTO bidDTO)
        {
            var result = _bidService.PlaceBid(bidDTO);
            if (!result)
            {
                return BadRequest(new { message = "Failed to place bid." });
            }

            return Ok(new { success = true, message = "Bid placed successfully." });
        }

        [HttpGet("{productId}")]
        public IActionResult GetAllBidsByProductId(int productId)
        {
            var bids = _bidService.GetBidsByProductId(productId);
            if (bids == null || !bids.Any())
            {
                return NotFound($"No bids found for product ID {productId}.");
            }

            return Ok(bids);
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetBidsByUserId(long userId)
        {
            var bids = _bidService.GetBidsByUserId(userId);
            if (bids == null || !bids.Any())
            {
                return NotFound($"No bids found for user ID {userId}.");
            }

            return Ok(bids);
        }
    }
}
