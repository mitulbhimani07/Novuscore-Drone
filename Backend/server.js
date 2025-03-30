const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
// const db = require('./config/db')//off line connect mongodb compass
// Test PostgreSQL connection

const pool = require('./config/pgAdmin')
pool.connect()
.then(() => console.log('Connected to PostgreSQL'))
.catch((err) => console.error('Error connecting to PostgreSQL:', err));
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', require('./routes/contactUs.Routes'));
app.get('/', (req, res) => {
    res.send('API is running...');
}
);
// Define the schema for the partner form

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));