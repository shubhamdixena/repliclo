import React from 'react';
import { Link, Outlet } from 'react-router-dom';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Admin Panel</h1>
        </div>
        <nav className="p-4">
          <ul>
            <li className="mb-2">
              <Link to="/admin" className="block hover:bg-gray-700 p-2 rounded">
                Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/posts" className="block hover:bg-gray-700 p-2 rounded">
                Posts
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/categories" className="block hover:bg-gray-700 p-2 rounded">
                Categories
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/tags" className="block hover:bg-gray-700 p-2 rounded">
                Tags
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/media" className="block hover:bg-gray-700 p-2 rounded">
                Media
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
