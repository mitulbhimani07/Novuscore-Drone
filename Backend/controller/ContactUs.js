const ContactUsModel = require('../models/ContactUs');
module.exports.saveContact = async (req, res) => {
    try {
        console.log('Received contact form data:', req.body);
        let ContactUs = await ContactUsModel.create(req.body);
        res.status(201).json({
            message: 'Contact form submitted successfully',
            data: ContactUs
        });
        
    } catch (error) {
        console.error('Error saving contact:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
module.exports.ViewContact = async (req, res) => {
    try {
        const contacts = await ContactUsModel.find();
        res.status(200).json({
            message: 'Contact form data retrieved successfully',
            data: contacts
        });
    } catch (error) {
        console.error('Error retrieving contact:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}