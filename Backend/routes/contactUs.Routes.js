// routes/contactUs.Routes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controller/ContactUs');

router.post('/contact', contactController.saveContact);
router.get('/ViewContact', contactController.ViewContact);

module.exports = router;