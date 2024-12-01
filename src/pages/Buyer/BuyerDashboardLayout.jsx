import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaHome, FaBox, FaGavel, FaUser, FaBars } from 'react-icons/fa';

const sidebarLinks = [
  { path: '/dashboard', label: 'Dashboard', icon: FaHome },
  { path: '/dashboard/products', label: 'Products', icon: FaBox },
  { path: '/dashboard/my-bids', label: 'My Bids', icon: FaGavel },
  { path: '/dashboard/profile', label: 'Profile', icon: FaUser }
];

export default function BuyerDashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen ">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-[#0e0f14] shadow-lg transition-transform duration-200 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex h-16 items-center justify-between px-4 bg-[#285380] text-white">
          <h1 className="text-xl  font-bold">Vikreta</h1>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
            <FaBars />
          </button>
        </div>
        <nav className="mt-5 px-4">
          {sidebarLinks.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
                location.pathname === path
                  ? 'bg-indigo-50 text-[#285380]'
                  : 'text-white hover:text-[#285380] hover:bg-white '
              }`}
            >
              <Icon className="mr-3" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-200 ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
        <header className="h-16 bg-[#0e0f14] shadow-sm flex items-center px-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className={`text-white lg:hidden ${isSidebarOpen ? 'hidden' : ''}`}
          >
            <FaBars />
          </button>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}