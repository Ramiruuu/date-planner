const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config(); // Add dotenv configuration

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Email transporter configuration using environment variables
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER, // From .env file
        pass: process.env.GMAIL_PASS  // From .env file
    }
});

app.post('/send-email', (req, res) => {
    const { sender, recipient, subject, html } = req.body;

    const mailOptions = {
        from: `"${sender}" <${process.env.GMAIL_USER}>`, // Display as e.g., "user@gmail.com" <your-email@gmail.com>
        to: recipient,
        subject: subject,
        html: html
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: error.toString() });
        }
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent: ' + info.response });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});