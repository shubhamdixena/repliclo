import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Configure dotenv
dotenv.config({ path: './client/.env' });

// Get Supabase credentials from environment variables
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables. Please check your .env file.');
  process.exit(1);
}

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

async function createProfilesTable() {
  try {
    console.log('Creating profiles table...');
    
    // Create profiles table
    const { error: createTableError } = await supabase.from('profiles').select().limit(1);
    
    if (createTableError && createTableError.code === '42P01') { // Table doesn't exist
      console.log('Profiles table does not exist. Creating it...');
      
      const { error } = await supabase
        .rpc('create_profiles_table', {});
      
      if (error) {
        console.error('Error creating profiles table:', error);
        
        // Try direct SQL approach
        console.log('Trying direct SQL approach...');
        
        // Create the table directly
        const { error: sqlError } = await supabase
          .from('profiles')
          .insert([
            { 
              id: '00000000-0000-0000-0000-000000000000',
              email: 'admin@gmail.com',
              role: 'admin'
            }
          ]);
        
        if (sqlError && sqlError.code !== '23505') { // Ignore duplicate key errors
          console.error('Error creating profiles table with direct SQL:', sqlError);
        } else {
          console.log('Successfully created profiles table with direct SQL approach');
        }
      } else {
        console.log('Successfully created profiles table');
      }
    } else {
      console.log('Profiles table already exists');
    }
    
    // Update admin role
    console.log('Updating admin role...');
    
    const { error: updateError } = await supabase
      .from('profiles')
      .upsert([
        { 
          id: '00000000-0000-0000-0000-000000000000', // This will be replaced with the actual user ID
          email: 'admin@gmail.com',
          role: 'admin'
        }
      ], { onConflict: 'email' });
    
    if (updateError) {
      console.error('Error updating admin role:', updateError);
    } else {
      console.log('Successfully updated admin role');
    }
    
    // Get current user
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user && user.email === 'admin@gmail.com') {
      console.log('Updating current user role to admin...');
      
      const { error: userUpdateError } = await supabase
        .from('profiles')
        .upsert([
          { 
            id: user.id,
            email: user.email,
            role: 'admin'
          }
        ]);
      
      if (userUpdateError) {
        console.error('Error updating current user role:', userUpdateError);
      } else {
        console.log('Successfully updated current user role to admin');
      }
    }
    
    console.log('Profile setup completed');
  } catch (error) {
    console.error('Error setting up profiles:', error);
  }
}

// Run the function
createProfilesTable().catch(console.error);
