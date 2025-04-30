import React from 'react';
import MediaManager from '@/components/admin/MediaManager';

const Media: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Media Library</h2>
      <MediaManager />
    </div>
  );
};

export default Media;
