import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  console.log('[AuthProvider] Component mounted');
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check initial session
    const initializeAuth = async () => {
      let timeoutId: NodeJS.Timeout | null = null;
      try {
        console.log('[AuthProvider] Checking initial session');
        // Timeout fallback
        timeoutId = setTimeout(() => {
          console.error('[AuthProvider] getSession() is taking too long. Forcing loading to false.');
          setLoading(false);
          console.log('[AuthProvider] Timeout triggered. loading:', loading, 'user:', user, 'isAdmin:', isAdmin);
        }, 5000);
        const { data: { session } } = await supabase.auth.getSession();
        console.log('[AuthProvider] Initial session:', session);
        setUser(session?.user || null);
        setIsAdmin(session?.user?.user_metadata?.is_admin || false);
        console.log('[AuthProvider] Session data:', session);
        console.log('[AuthProvider] After session fetch. loading:', loading, 'user:', user, 'isAdmin:', isAdmin);
      } catch (error) {
        console.error('[AuthProvider] Error initializing auth:', error);
        console.log('[AuthProvider] Error details:', error);
      } finally {
        if (timeoutId) clearTimeout(timeoutId);
        console.log('[AuthProvider] Initial auth check complete');
        setLoading(false);
        console.log('[AuthProvider] Finally block. loading:', loading, 'user:', user, 'isAdmin:', isAdmin);
      }
    };

    initializeAuth();

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event);
      setUser(session?.user || null);
      setIsAdmin(session?.user?.user_metadata?.is_admin || false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Update user metadata with admin status
      if (data.user) {
        await supabase.auth.updateUser({
          data: { is_admin: true }
        });
      }

      return { error: null };
    } catch (error: any) {
      console.error('Sign in error:', error);
      return { error };
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            is_admin: true
          }
        }
      });

      if (error) throw error;
      return { error: null };
    } catch (error: any) {
      console.error('Sign up error:', error);
      return { error };
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setIsAdmin(false);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAdmin,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
