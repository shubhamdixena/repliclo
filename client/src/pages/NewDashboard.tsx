import React from 'react';
import { NewDashboardLayout } from '@/components/new-dashboard/NewDashboardLayout';
import { NewDashboardContent } from '@/components/new-dashboard/NewDashboardContent';

const NewDashboardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewDashboardLayout>
        <NewDashboardContent />
      </NewDashboardLayout>
    </div>
  );
};

export default NewDashboardPage;