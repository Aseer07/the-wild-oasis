import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bqtbcnvcakqscfpuveow.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxdGJjbnZjYWtxc2NmcHV2ZW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNTg0OTIsImV4cCI6MjA1MTgzNDQ5Mn0.no-bIUci0oKA-_3mDGS18roGyQExWXqbmdwEoCly8vU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
