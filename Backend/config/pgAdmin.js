const { Pool } = require('pg');

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'postgres', // Replace with your PostgreSQL username
  host: 'localhost', // Replace with your PostgreSQL host (e.g., localhost)
  database: 'Novuscore', // Replace with your PostgreSQL database name
  password: '1212', // Replace with your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

// Test the connection
pool.connect()
  .then(() => console.log('Connected to PostgreSQL successfully!'))
  .catch((err) => console.error('Error connecting to PostgreSQL:', err));

module.exports = pool;