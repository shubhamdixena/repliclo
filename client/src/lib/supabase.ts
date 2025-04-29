import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Missing Supabase environment variables. Please check your .env file.'
  );
}

// Initialize Supabase with retry logic
const initializeSupabase = (): SupabaseClient => {
  try {
    return createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        storageKey: 'charity-water-auth',
        detectSessionInUrl: true,
        flowType: 'pkce'
      },
      global: {
        headers: {
          'X-Client-Info': 'charity-water-clone'
        }
      }
    });
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
    throw error;
  }
};

export const supabase = initializeSupabase();

// Verify connection to Supabase
const verifyConnection = async () => {
  try {
    // Simple health check query
    const { error } = await supabase.from('_health_check').select('*').limit(1);
    
    if (error) {
      console.warn('Supabase connection check failed:', error.message);
      return false;
    }
    
    console.log('Supabase connection verified successfully');
    return true;
  } catch (err) {
    console.error('Failed to verify Supabase connection:', err);
    return false;
  }
};

// Run connection verification
verifyConnection().catch(err => {
  console.error('Error during Supabase connection verification:', err);
});

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Sign in error:', error);
      throw error;
    }

    return { data, error: null };
  } catch (err: any) {
    const errorMessage = err.message || 'Failed to sign in. Please try again.';
    console.error('Sign in error:', err);
    return { data: null, error: { message: errorMessage } };
  }
};

export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: {
          email_confirmed: true
        }
      }
    });

    if (error) {
      console.error('Sign up error:', error);
      throw error;
    }

    if (data?.user) {
      // Fetch the session immediately after signup
      const { data: sessionData } = await supabase.auth.getSession();
      return { data: { ...data, session: sessionData.session }, error: null };
    }

    return { data, error: null };
  } catch (err: any) {
    const errorMessage = err.message || 'Failed to sign up. Please try again.';
    console.error('Sign up error:', err);
    return { data: null, error: { message: errorMessage } };
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (err: any) {
    const errorMessage = err.message || 'Failed to sign out. Please try again.';
    console.error('Sign out error:', err);
    return { error: { message: errorMessage } };
  }
};

export const getCurrentUser = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return { user, error: null };
  } catch (err: any) {
    const errorMessage = err.message || 'Failed to get current user.';
    console.error('Get current user error:', err);
    return { user: null, error: { message: errorMessage } };
  }
};

export const onAuthStateChange = (callback: (event: any, session: any) => void) => {
  try {
    return supabase.auth.onAuthStateChange(callback);
  } catch (err) {
    console.error('Auth state change error:', err);
    throw err;
  }
};

// Reset password
export const resetPassword = async (email: string) => {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    
    if (error) throw error;
    return { error: null };
  } catch (err: any) {
    const errorMessage = err.message || 'Failed to send password reset email.';
    console.error('Password reset error:', err);
    return { error: { message: errorMessage } };
  }
};

// Update user password
export const updatePassword = async (password: string) => {
  try {
    const { error } = await supabase.auth.updateUser({
      password,
    });
    
    if (error) throw error;
    return { error: null };
  } catch (err: any) {
    const errorMessage = err.message || 'Failed to update password.';
    console.error('Update password error:', err);
    return { error: { message: errorMessage } };
  }
};
