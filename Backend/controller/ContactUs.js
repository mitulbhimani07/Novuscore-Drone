require('dotenv').config();
const pool = require('../config/pgAdmin');
const nodemailer = require('nodemailer');

// Configure email transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER || 'mitulbhimani281@gmail.com',
        pass: process.env.SMTP_PASS || 'qbvhmsobzletiapn'
    }
});

module.exports.saveContact = async (req, res) => {
    try {
        console.log('Received contact form data:', req.body);
        const { name, email, phone, message } = req.body;

        // Validate all required fields
        if (!name || !email || !phone || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Validate email format
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ message: 'Please provide a valid email address' });
        }

        // Save to database
        const result = await pool.query(
            `INSERT INTO ContactUs (name, email, phone, message) 
             VALUES ($1, $2, $3, $4) RETURNING *`,
            [name, email, phone, message]
        );

        // Send email notification
        await sendContactEmail({ name, email, phone, message });

        res.status(201).json({
            message: 'Contact form submitted successfully',
            data: result.rows[0]
        });

    } catch (error) {
        console.error('Error saving contact:', error);
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
}

module.exports.ViewContact = async (req, res) => {
    try {
        const contacts = await pool.query('SELECT * FROM ContactUs ORDER BY created_at DESC;');
        res.status(200).json({
            message: 'Contact form data retrieved successfully',
            data: contacts.rows
        });
    } catch (error) {
        console.error('Error retrieving contact:', error);
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
}

// Helper function to send email
async function sendContactEmail({ name, email, phone, message }) {
    try {
        const mailOptions = {
            from: `"NovusCore Contact" <${process.env.SMTP_FROM || 'mitulbhimani281@gmail.com'}>`,
            to: email,
            subject: `We've received your message, ${name.split(' ')[0]}`,
            html: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                        line-height: 1.5;
                        color: #222;
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                    }
                    .header {
                        padding-bottom: 20px;
                        border-bottom: 1px solid #eaeaea;
                        margin-bottom: 24px;
                    }
                    .logo {
                        text-align: left;
                        margin-bottom: 24px;
                    }
                    .logo img {
                        width: 200px;
                    }
                    .content {
                        margin-bottom: 32px;
                    }
                    .details {
                        background-color: #f9f9f9;
                        padding: 16px;
                        border-radius: 8px;
                        margin-bottom: 24px;
                    }
                    .button {
                        display: inline-block;
                        padding: 10px 20px;
                        background-color: #16A34A;
                        color: white !important;
                        text-decoration: none;
                        border-radius: 5px;
                        font-weight: 500;
                        margin-top: 16px;
                    }
                    .footer {
                        margin-top: 40px;
                        padding-top: 20px;
                        border-top: 1px solid #eaeaea;
                        font-size: 12px;
                        color: #666;
                    }
                    .highlight {
                        font-weight: 600;
                        color: #16A34A;
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <div class="logo">
                        <img src="https://s.tmimgcdn.com/scr/1200x627/304500/agriculture-drone-logo-design_304507-2-original.jpg" alt="NovusCore Logo" />
                    </div>
                </div>
                
                <div class="content">
                    <p>Hi <span class="highlight">${name.split(' ')[0]}</span>,</p>
                    
                    <p>Thank you for contacting NovusCore. We've received your message and our team will get back to you soon.</p>
                    
                    <div class="details">
                        <p><strong>Your message details:</strong></p>
                        <p>Name: ${name}</p>
                        <p>Email: <a href="mailto:${email}" style="color: #16A34A; text-decoration: none;">${email}</a></p>
                        ${phone ? `<p>Phone: ${phone}</p>` : ''}
                        <p>Message: ${message.replace(/\n/g, '<br>')}</p>
                    </div>
                    
                    <p>If you need immediate assistance, please reply to this email.</p>
                    
                    <a href="http://localhost:5173/" class="button">Visit Our Website</a>
                </div>
                
                <div class="footer">
                    <p>This message was sent regarding your inquiry to NovusCore.</p>
                    <p>© ${new Date().getFullYear()} <span class="highlight">NovusCore</span>. All rights reserved.</p>
                    <p><a href="https://novuscore.co.in/preferences" style="color: #666; text-decoration: underline;">Manage your notification settings</a></p>
                </div>
            </body>
            </html>
            `,
            text: `
            Hi ${name.split(' ')[0]},

            Thank you for contacting NovusCore. We've received your message and our team will get back to you soon.

            Your message details:
            Name: ${name}
            Email: ${email}
            ${phone ? `Phone: ${phone}` : ''}
            Message: ${message}

            If you need immediate assistance, please reply to this email.

            Visit Our Website: https://novuscore.co.in/contact

            ---
            This message was sent regarding your inquiry to NovusCore.
            © ${new Date().getFullYear()} NovusCore. All rights reserved.

            Manage your notification settings: https://novuscore.co.in/preferences
                        `
        };

        await transporter.sendMail(mailOptions);
        console.log('Contact confirmation email sent successfully');
    } catch (error) {
        console.error('Error sending contact email:', error);
    }
}