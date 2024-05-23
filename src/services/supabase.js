import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sgxxpkjjlyokebjjshhc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNneHhwa2pqbHlva2ViampzaGhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0NTYwNTcsImV4cCI6MjAzMjAzMjA1N30.NYqGML4LT_o5n9d8uIicwRl4fHGuaR1wJ3jJMPf6BY4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
