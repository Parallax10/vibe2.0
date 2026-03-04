import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hulpxdzffljlomaulczi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1bHB4ZHpmZmxqbG9tYXVsY3ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzNzAzNzEsImV4cCI6MjA4NTk0NjM3MX0.mnhiRbNylVODrLPPdtA52A6jeL2gftTqcs_6R8IbVZE';

export const supabase = createClient(supabaseUrl, supabaseKey);