import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import Dashboard from './admin/Dashboard';
import BlogPostList from '@/components/admin/BlogPostList';
import BlogPostEditor from '@/components/admin/BlogPostEditor';
import Categories from './admin/Categories';
import Tags from './admin/Tags';
import Media from './admin/Media';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  featured_image?: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

const AdminPanel = () => {
  const { isAdmin, loading, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/');
    }
  }, [loading, user, isAdmin, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
          <p className="text-gray-600 mt-2">Admin privileges required to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <AdminLayout>
      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/posts" element={<BlogPostList onEdit={() => {}} onNew={() => {}} />} />
        <Route path="/admin/posts/new" element={<BlogPostEditor onSave={() => navigate('/admin/posts')} onCancel={() => navigate('/admin/posts')} />} />
        <Route path="/admin/posts/:id" element={<BlogPostEditor onSave={() => navigate('/admin/posts')} onCancel={() => navigate('/admin/posts')} />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/tags" element={<Tags />} />
        <Route path="/admin/media" element={<Media />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminPanel;
