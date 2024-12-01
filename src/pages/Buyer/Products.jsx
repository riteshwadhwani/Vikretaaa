import ProductCard from '../../Components/Core/ProductCard';

const products = [
  {
    id: 1,
    title: 'Vintage Watch',
    description: 'A beautiful vintage timepiece in excellent condition',
    currentBid: 450,
    endTime: '2h 15m',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314',
  },
  {
    id: 2,
    title: 'Antique Vase',
    description: 'Hand-painted ceramic vase from the 19th century',
    currentBid: 320,
    endTime: '4h 30m',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d',
  },
  {
    id: 3,
    title: 'Classic Camera',
    description: 'Vintage film camera in working condition',
    currentBid: 280,
    endTime: '1h 45m',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
  },
];

export default function Products() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Available Products</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}