import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { to, subject, html } = await request.json();

    // Create Gmail SMTP transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'your-email@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || 'your-app-password',
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER || 'your-email@gmail.com',
      to: to,
      subject: subject,
      html: html,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    
    return NextResponse.json({ 
      success: true, 
      messageId: info.messageId,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ 
      error: 'Failed to send email',
      details: error.message 
    }, { status: 500 });
  }
}

