const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://mitulbhimani281:mF6u0wongMtNZE3l@cluster0.t7dse.mongodb.net/NovuscoreDrones'; // Replace with your MongoDB URI
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('DB is Connected');
    })
    .catch((err) => {
        console.log('Error connecting to the database:', err);
    });

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'https://novuscore-drones.vercel.app'],
}));

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