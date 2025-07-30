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
        .from('contactus')
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
    const { data, error } = await supabase.from('contactus').select('*');

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
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>NovusCore Contact Confirmation</title>
          <style type="text/css">
            @media only screen and (max-width: 600px) {
              .container {
                width: 100% !important;
              }
              .content-block {
                padding: 20px !important;
              }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #4a4a4a;">
          <!-- Main Container -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f7f9fc">
            <tr>
              <td align="center" valign="top">
                <!-- Email Card (600px) -->
                <table class="container" width="600" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); margin: 20px 0;">
                  <!-- Header with Brand Color -->
                  <tr>
                    <td bgcolor="#5e72e4" style="padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 500;">NovusCore</h1>
                    </td>
                  </tr>
                  
                  <!-- Greeting Section -->
                  <tr>
                    <td class="content-block" style="padding: 30px 40px 20px 40px;">
                      <h2 style="color: #2d3748; margin-top: 0; font-size: 20px; font-weight: 500;">Hi ${name.split(' ')[0]},</h2>
                      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px; color: #4a5568;">Thank you for contacting NovusCore. We've received your message and our team will review it shortly.</p>
                      
                      <!-- Message Details Card -->
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0; margin-bottom: 25px;">
                        <tr>
                          <td style="padding: 20px 25px;">
                            <h3 style="color: #4a5568; margin-top: 0; margin-bottom: 15px; font-size: 18px; font-weight: 500;">Your inquiry details</h3>
                            
                            <!-- Details Table -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td width="25%" style="padding: 8px 0; border-bottom: 1px solid #edf2f7; font-weight: 500; color: #4a5568;">Name</td>
                                <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7;">${name}</td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7; font-weight: 500; color: #4a5568;">Email</td>
                                <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7;">${email}</td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7; font-weight: 500; color: #4a5568;">Phone</td>
                                <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7;">${phone}</td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0; font-weight: 500; color: #4a5568;">Message</td>
                                <td style="padding: 8px 0;">${message}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #4a5568;">We typically respond within 24 hours. If you need immediate assistance, please reply to this email.</p>
                      
                      <!-- Call to Action Button -->
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="center" style="padding-top: 10px; padding-bottom: 20px;">
                            <table border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td align="center" bgcolor="#5e72e4" style="border-radius: 4px;">
                                  <a href="mailto:support@novuscore.com" target="_blank" style="font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 4px; padding: 12px 25px; display: inline-block; font-weight: 500;">Contact Support</a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td bgcolor="#f7fafc" style="padding: 20px 40px; border-top: 1px solid #e2e8f0; border-radius: 0 0 8px 8px; text-align: center;">
                      <p style="margin: 0 0 15px 0; font-size: 14px; color: #718096;">© ${new Date().getFullYear()} NovusCore. All rights reserved.</p>
                      <p style="margin: 0; font-size: 14px; color: #718096;">
                        <a href="https://novuscore.com" style="color: #5e72e4; text-decoration: none; margin: 0 10px;">Website</a>
                        <a href="#" style="color: #5e72e4; text-decoration: none; margin: 0 10px;">Support</a>
                        <a href="#" style="color: #5e72e4; text-decoration: none; margin: 0 10px;">Contact</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
        `,
      };
  
      await transporter.sendMail(mailOptions);
      console.log('Contact confirmation email sent successfully');
    } catch (error) {
      console.error('Error sending contact email:', error);
    }
  }