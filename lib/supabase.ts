import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nvlpvpxbbinwavqarweq.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52bHB2cHhiYmlud2F2cWFyd2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MTgzMTYsImV4cCI6MjA5NTI5NDMxNn0.LLMugBuSv5_boWzs-2McjYGp1yBlKF47NiWkqzd6tPA";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);