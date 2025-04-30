import React from 'react';
import CategoryManager from '@/components/admin/CategoryManager';

const Categories: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <CategoryManager />
    </div>
  );
};

export default Categories;
