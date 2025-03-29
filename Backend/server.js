const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// const db = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mitulbhimani281:mF6u0wongMtNZE3l@cluster0.t7dse.mongodb.net/NovuscoreDrones").then((res) => {
    console.log('DB is Conected');
})
.catch((err) => {
        console.log('Error connecting to the database:', err);
   });

// Middleware
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', require('./routes/contactUs.Routes'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));