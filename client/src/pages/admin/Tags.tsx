import React from 'react';
import TagManager from '@/components/admin/TagManager';

const Tags: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Tags</h2>
      <TagManager />
    </div>
  );
};

export default Tags;
