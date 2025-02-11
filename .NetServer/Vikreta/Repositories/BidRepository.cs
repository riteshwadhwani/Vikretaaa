using Vikreta.Data;
using Vikreta.Entities;

namespace Vikreta.Repositories
{
    public class BidRepository : IBidRepository
    {
        private readonly AppDbContext _context;

        public BidRepository(AppDbContext context)
        {
            _context = context;
        }

        public bool AddBid(Bid bid)
        {
            try
            {
                _context.Bids.Add(bid);
                return _context.SaveChanges() > 0;
            }
            catch(Exception e)
            {
                throw e;
            }
        }

        public List<Bid> GetBidsByProductId(long productId)
        {
            return _context.Bids.Where(b => b.ProductId == productId).ToList();
        }

        public List<Bid> GetBidsByUserId(long userId)
        {
            return _context.Bids.Where(b => b.BuyerId == userId).ToList();
        }
    }
}
