require('dotenv').config()
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL ||'https://eyjtzwrhqwkcqnlvrkst.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5anR6d3JocXdrY3FubHZya3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzODU5MDcsImV4cCI6MjA1ODk2MTkwN30.vQkpbuCoZHaLs4X77hcn_29WgP_QAZGoUWRuyeyKNGU'
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports= supabase;