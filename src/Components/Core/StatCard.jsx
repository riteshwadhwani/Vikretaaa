export default function StatCard({ title, value, icon: Icon }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-600">{title}</h2>
          <Icon className="text-indigo-500 h-5 w-5" />
        </div>
        <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
      </div>
    );
  }