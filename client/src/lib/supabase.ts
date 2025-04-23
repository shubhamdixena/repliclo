import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yukdqqhiyjueauuikwut.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1a2RxcWhpeWp1ZWF1dWlrd3V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTA0NTEsImV4cCI6MjA2MDk4NjQ1MX0.b-CRzAe9vXtNjSWnfiiYfzCmbeI2vtj6Mwd_InwcRds';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth helper functions
export const signInWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signUpWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();
  return { user, error };
};

// Auth state change listener
export const onAuthStateChange = (callback: (event: any, session: any) => void) => {
  return supabase.auth.onAuthStateChange(callback);
}; 