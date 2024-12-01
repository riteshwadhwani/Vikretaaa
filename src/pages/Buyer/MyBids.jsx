import BidTable from "../../Components/Core/BidTable";

export default function MyBids() {
  const bids = [
    { id: 1, product: 'Vintage Watch', amount: 450, date: '2024-03-20', status: 'active' },
    { id: 2, product: 'Antique Vase', amount: 320, date: '2024-03-19', status: 'outbid' },
    { id: 3, product: 'Classic Camera', amount: 280, date: '2024-03-18', status: 'won' }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">My Bids</h1>
      <BidTable bids={bids} />
    </div>
  );
}