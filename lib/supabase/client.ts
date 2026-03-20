import { createBrowserClient } from '@supabase/ssr'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://acoelgxcnuznpfshdlnl.supabase.co'
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjb2VsZ3hjbnV6bnBmc2hkbG5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMjQ1MjEsImV4cCI6MjA4OTYwMDUyMX0.Osstsc_c4sGG1D1fE6wnP3l3AQCYbLyxD1Ah_booc54'

export function createClient() {
  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY)
}
