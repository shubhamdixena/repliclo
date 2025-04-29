import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { getCurrentUser, onAuthStateChange, supabase } from '@/lib/supabase';
import { useLocation } from 'wouter';
import { useToast } from '@/hooks/use-toast';

type AuthContextType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  // Handle navigation based on user type
  const handleNavigation = (user: User | null) => {
    if (!user) {
      setLocation('/');
      return;
    }

    if (user.email === 'admin@gmail.com') {
      setLocation('/admin');
    } else {
      setLocation('/');
    }
  };

  useEffect(() => {
    let mounted = true;

    // Initialize auth state
    const initializeAuth = async () => {
      try {
        // Check for existing session
        const { data: { session: initialSession } } = await supabase.auth.getSession();
        if (mounted) {
          if (initialSession) {
            setSession(initialSession);
            setUser(initialSession.user);
            handleNavigation(initialSession.user);
          }

          // Check for current user
          const { user: currentUser, error } = await getCurrentUser();
          if (error) {
            console.error('Error getting current user:', error);
            toast({
              title: "Authentication Error",
              description: "There was a problem with your authentication. Please try logging in again.",
              variant: "destructive",
            });
          } else if (currentUser && mounted) {
            setUser(currentUser);
            handleNavigation(currentUser);
          }
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        toast({
          title: "Authentication Error",
          description: "Failed to initialize authentication. Please refresh the page.",
          variant: "destructive",
        });
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    initializeAuth();

    // Listen for auth changes
    const { data: { subscription } } = onAuthStateChange((event, session) => {
      if (!mounted) return;

      setUser(session?.user ?? null);
      setSession(session);
      
      // Handle auth state changes
      if (event === 'SIGNED_IN' && session?.user) {
        handleNavigation(session.user);
        toast({
          title: "Signed In",
          description: "You have successfully signed in.",
        });
      } else if (event === 'SIGNED_OUT') {
        handleNavigation(null);
        toast({
          title: "Signed Out",
          description: "You have been signed out.",
        });
      }
    });

    return () => {
      mounted = false;
      subscription?.unsubscribe();
    };
  }, [setLocation, toast]);

  return (
    <AuthContext.Provider value={{ user, session, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
