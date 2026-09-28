// Configuration Supabase - ClientFlow
const SUPABASE_URL = "https://sfhiivwkunlaqkzeqfho.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmaGlpdndrdW5sYXFremVxZmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA0MjI0MjQsImV4cCI6MjEwNTk5ODQyNH0.JPVPXjV4MHJkdmDiYOu2R4dtMRTLc8vM8S_Gniflo60";

// Création du client Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
