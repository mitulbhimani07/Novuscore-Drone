const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const supabase = require('./config/supabaseClient'); // Your Supabase client
require('dotenv').config();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', require('./routes/contactUs.Routes'));

// Check if ContactUs table exists
async function checkTableExists() {
  try {
    const { data, error } = await supabase
      .from('"ContactUs"') // case-sensitive name
      .select('*')
      .limit(1);

    if (error && error.code === '42P01') {
      console.log('❌ Table "ContactUs" does not exist!');
      console.log('📝 Please create it with this SQL:');
      console.log(`
        CREATE TABLE public."ContactUs" (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT,
          message TEXT NOT NULL,
          suggestions TEXT,
          created_at TIMESTAMPTZ DEFAULT NOW()
        );

        ALTER TABLE public."ContactUs" ENABLE ROW LEVEL SECURITY;

        CREATE POLICY "Allow public inserts" ON public."ContactUs"
        FOR INSERT TO public
        WITH CHECK (true);

        CREATE POLICY "Allow authenticated reads" ON public."ContactUs"
        FOR SELECT TO authenticated
        USING (true);
      `);
      return false;
    } else if (error) {
      console.error('❌ Error checking table:', error);
      return false;
    } else {
      console.log('✅ Table "ContactUs" exists. Rows:', data.length);
      return true;
    }
  } catch (err) {
    console.error('❌ Unexpected error:', err);
    return false;
  }
}

// Health check route
app.get('/health', async (req, res) => {
  try {
    const { error } = await supabase
      .from('"ContactUs"') // match PascalCase
      .select('*', { count: 'exact', head: true });

    if (error) {
      return res.status(500).json({
        status: 'error',
        message: 'Database check failed',
        error: error.message
      });
    }

    res.json({
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Unexpected server error',
      error: err.message
    });
  }
});

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'API is running...',
    status: 'active',
    timestamp: new Date().toISOString()
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('💥 Error:', err.stack);
  res.status(500).json({
    error: 'Something broke!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Startup
(async () => {
  console.log('🔄 Checking Supabase table...');
  await checkTableExists();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`🧪 Health: http://localhost:${PORT}/health`);
  });
})();
