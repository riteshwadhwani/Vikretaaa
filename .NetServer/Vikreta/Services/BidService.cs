using Vikreta.Data;
using Vikreta.Entities;
using Vikreta.Repositories;
using Vikreta.DTO;

namespace Vikreta.Services
{
    public class BidService : IBidService
    {
        private readonly IBidRepository _bidRepository;

        public BidService(IBidRepository bidRepository)
        {
            _bidRepository = bidRepository;
        }

        public bool PlaceBid(BidDTO bidDTO)
        {
            var bid = new Bid
            {
                BuyerId = bidDTO.BuyerId,
                ProductId = bidDTO.ProductId,
                 BidAmount = bidDTO.BidAmount,
                CreatedOn = DateTime.Now
            };

            return _bidRepository.AddBid(bid);
        }

        public List<BidDTO> GetBidsByProductId(long productId)
        {
            return _bidRepository.GetBidsByProductId(productId)
                                  .Select(b => new BidDTO
                                  {
                                      BuyerId = b.BuyerId,
                                      ProductId = b.ProductId,
                                      BidAmount = b.BidAmount,
                                     
                                  }).ToList();
        }

        public List<BidDTO> GetBidsByUserId(long userId)
        {
            return _bidRepository.GetBidsByUserId(userId)
                                  .Select(b => new BidDTO
                                  {
                                      BuyerId = b.BuyerId,
                                      ProductId = b.ProductId,
                                      BidAmount = b.BidAmount,
                                  }).ToList();
        }
    }
}