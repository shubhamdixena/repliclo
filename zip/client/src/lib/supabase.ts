import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vwmneqlybravacfoaqyw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3bW5lcWx5YnJhdmFjZm9hcXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5MzIwNjgsImV4cCI6MjA2MTUwODA2OH0.MyvcWfsBI-8c0hAqFjlUNJVkfQAUpnVfF5Adc0eT9h4';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    storageKey: 'charity-water-auth',
    detectSessionInUrl: true,
  },
});

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    // After successful sign-in, update user metadata with admin status
    if (data.user) {
      const { error: updateError } = await supabase.auth.updateUser({
        data: { is_admin: true }
      });

      if (updateError) {
        console.error('Error updating user metadata:', updateError);
      }
    }

    return { data, error: null };
  } catch (err: any) {
    console.error('Sign in error:', err);
    return { data: null, error: err };
  }
};

export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          is_admin: true // Set admin status during signup
        }
      }
    });

    if (error) throw error;
    return { data, error: null };
  } catch (err: any) {
    console.error('Sign up error:', err);
    return { data: null, error: err };
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (err: any) {
    console.error('Sign out error:', err);
    return { error: err };
  }
};

export const getCurrentUser = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return { user, error: null };
  } catch (err: any) {
    console.error('Get current user error:', err);
    return { user: null, error: err };
  }
};

export const checkIsAdmin = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      console.log('No user found');
      return false;
    }

    // Check admin status from user metadata
    return user.user_metadata?.is_admin === true;
  } catch (err) {
    console.error('Error checking admin status:', err);
    return false;
  }
};
