using Vikreta.DTO;

namespace Vikreta.Services
{
    public interface IBidService
    {
        bool PlaceBid(BidDTO bidDTO);
        List<BidDTO> GetBidsByProductId(long productId);
        List<BidDTO> GetBidsByUserId(long userId);
    }
}