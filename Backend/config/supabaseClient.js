require('dotenv').config()
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL ||'https://cqjwapqcxtvnojotolbu.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxandhcHFjeHR2bm9qb3RvbGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NTkwNzAsImV4cCI6MjA2OTQzNTA3MH0.bEByzb3MU1IljpXeOBH-DNYTSMMT6OuwoJGlop6aCTc'
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports= supabase;