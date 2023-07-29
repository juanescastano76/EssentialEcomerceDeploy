import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_SECOND_URL;
const supabaseKey = process.env.SUPABASE_PUBLIC_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
