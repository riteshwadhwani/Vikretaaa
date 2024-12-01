import { FaGavel, FaTrophy, FaClock } from 'react-icons/fa';
import StatCard from '../../Components/Core/StatCard';


export default function Dashboard() {
  const stats = [
    { title: 'Active Bids', value: '12', icon: FaGavel },
    { title: 'Won Auctions', value: '8', icon: FaTrophy },
    { title: 'Ending Soon', value: '4', icon: FaClock }
  ];

  return (
    <div className="space-y-6 bg-[#0e0f14]">
      <h1 className="text-2xl font-bold text-white">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

    </div>
  );
}