require('dotenv').config()
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL ||'https://sxfrbwxkwhuaaldrwujk.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4ZnJid3hrd2h1YWFsZHJ3dWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NTkyNTYsImV4cCI6MjA2OTQzNTI1Nn0.1SzgNqpP4tt_YHARG6Z6oRW0b-hE7VGdIPKZjbCjBXg'
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports= supabase;