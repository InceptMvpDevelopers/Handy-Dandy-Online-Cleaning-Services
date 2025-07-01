import { createClient, SupabaseClient } from '@supabase/supabase-js';


const supabaseURL = "https://kyyluqrbtvawwqubauma.supabase.co";
const supabasePublishableKey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5eWx1cXJidHZhd3dxdWJhdW1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwMjA2NzUsImV4cCI6MjA2NjU5NjY3NX0.9hnvl_vPO6kYFxN8iQszTDW4KsaweQoQxEdYltiqEtA";

export const supabase = createClient(supabaseURL, supabasePublishableKey);