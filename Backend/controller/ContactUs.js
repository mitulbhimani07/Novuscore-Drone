require('dotenv').config();
const supabase = require('../config/supabaseClient'); // Import Supabase client
const nodemailer = require('nodemailer');

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'mitulbhimani281@gmail.com',
    pass: process.env.SMTP_PASS || 'qbvhmsobzletiapn',
  },
});

// POST: Save contact form data
module.exports.saveContact = async (req, res) => {
    // Input validation
    const { name, email, message, phone } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
  
    try {
      const { data, error } = await supabase
        .from('ContactUs')
        .insert([{
          name: String(name),
          email: String(email),
          phone: phone ? String(phone) : null,
          message: String(message)
        }])
        .select(); // Return inserted record
  
      if (error) throw error;
  
      // Send email
      await sendContactEmail({ name, email, phone, message });
  
      return res.status(201).json({
        message: 'Contact submitted successfully',
        data: data[0]
      });
      
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ 
        error: 'Failed to save contact',
        details: process.env.NODE_ENV === 'development' ? error.message : null
      });
    }
  };

// GET: Fetch all contact form data
module.exports.viewContacts = async (req, res) => {
  try {
    // Fetch data from Supabase
    const { data, error } = await supabase.from('ContactUs').select('*');

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (err) {
    console.error('Error fetching contact form data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Helper function to send email
async function sendContactEmail({ name, email, phone, message }) {
  try {
    const mailOptions = {
      from: `"NovusCore Contact" <${process.env.SMTP_FROM || 'mitulbhimani281@gmail.com'}>`,
      to: email,
      subject: `We've received your message, ${name.split(' ')[0]}`,
      html: `
        <p>Hi ${name.split(' ')[0]},</p>
        <p>Thank you for contacting NovusCore. We've received your message and our team will get back to you soon.</p>
        <p><strong>Your message details:</strong></p>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phone}</li>
          <li>Message: ${message}</li>
        </ul>
        <p>If you need immediate assistance, please reply to this email.</p>
        <p>Best regards,<br>NovusCore Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Contact confirmation email sent successfully');
  } catch (error) {
    console.error('Error sending contact email:', error);
  }
}