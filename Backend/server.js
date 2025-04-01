const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv')
const supabase = require('./config/supabaseClient'); // Import Supabase client
require('dotenv').config()


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', require('./routes/contactUs.Routes'));

// Test Supabase connection
(async () => {
  const { data, error } = await supabase.from('ContactUs').select('*');
  if (error) {
    console.error('Error connecting to Supabase:', error);
  } else {
    console.log('Connected to Supabase successfully!');
  }
})();

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));