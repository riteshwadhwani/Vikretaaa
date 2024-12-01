const statusColors = {
    active: 'bg-green-100 text-green-800',
    outbid: 'bg-red-100 text-red-800',
    won: 'bg-blue-100 text-blue-800'
  };
  
  export default function BidTable({ bids }) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bid Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bids.map(bid => (
              <tr key={bid.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bid.product}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rs {bid.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bid.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[bid.status]}`}>
                    {bid.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }