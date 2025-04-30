import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Configure dotenv
dotenv.config({ path: './client/.env' });

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get Supabase credentials from environment variables
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables. Please check your .env file.');
  process.exit(1);
}

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: false
  }
});

// Function to run a migration file
async function runMigration(filePath) {
  try {
    console.log(`Running migration: ${filePath}`);
    
    // Read the SQL file
    const sql = fs.readFileSync(filePath, 'utf8');
    
    // Split the SQL into individual statements
    const statements = sql
      .split(';')
      .map(statement => statement.trim())
      .filter(statement => statement.length > 0);
    
    // Execute each statement
    for (const statement of statements) {
      console.log(`Executing statement: ${statement.substring(0, 50)}...`);
      
      const { error } = await supabase.rpc('exec_sql', { sql: statement });
      
      if (error) {
        console.error(`Error executing statement: ${error.message}`);
        console.error(`Statement: ${statement}`);
      }
    }
    
    console.log(`Migration completed: ${filePath}`);
  } catch (error) {
    console.error(`Error running migration: ${error.message}`);
    process.exit(1);
  }
}

// Main function
async function main() {
  try {
    // Get the migration file path from command line arguments
    const migrationFile = process.argv[2];
    
    if (!migrationFile) {
      console.error('Please provide a migration file path.');
      process.exit(1);
    }
    
    const filePath = path.resolve(migrationFile);
    
    if (!fs.existsSync(filePath)) {
      console.error(`Migration file not found: ${filePath}`);
      process.exit(1);
    }
    
    await runMigration(filePath);
    
    console.log('Migration process completed successfully.');
  } catch (error) {
    console.error(`Error in migration process: ${error.message}`);
    process.exit(1);
  }
}

// Run the main function
main();
