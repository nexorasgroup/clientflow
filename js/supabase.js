// Configuration Supabase - ClientFlow
const SUPABASE_URL = "https://sfhiivwkunlaqkzeqfho.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_8efoe_KAJIrwzeSeW_RdpQ_JjDk-c0S";

// Création du client Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
