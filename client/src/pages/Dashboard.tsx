import React, { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useToast } from '@/hooks/use-toast';

const DashboardPage = () => {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    // Redirect to home page since dashboard is no longer available
    toast({
      title: "Dashboard Unavailable",
      description: "The dashboard is currently unavailable. Redirecting to home page.",
    });
    
    // Short delay before redirect to allow toast to be seen
    const timer = setTimeout(() => {
      setLocation('/');
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [setLocation, toast]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Redirecting...</h1>
        <p className="text-muted-foreground">Please wait while we redirect you to the home page.</p>
      </div>
    </div>
  );
};

export default DashboardPage;
