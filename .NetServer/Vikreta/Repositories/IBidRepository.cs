using Vikreta.Entities;

namespace Vikreta.Repositories
{
    public interface IBidRepository
    {
        bool AddBid(Bid bid);
        List<Bid> GetBidsByProductId(long productId);
        List<Bid> GetBidsByUserId(long userId);
    }
}
