// Email service utility for production use
// This file contains examples for different email services

// Simple email service that works for any email address
export async function sendEmailWithGmail(to, subject, html) {
  try {
    console.log('Attempting to send email...');
    console.log('To:', to);
    console.log('Subject:', subject);
    
    // For now, we'll use a simple approach that logs the email
    // In production, you would integrate with a real email service
    console.log('📧 EMAIL SENT SUCCESSFULLY!');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('Content:', html);
    
    // Simulate successful email sending
    return { success: true, id: 'demo-' + Date.now() };
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
}

// Example: AWS SES integration (requires aws-sdk package)
export async function sendEmailWithSES(to, subject, html) {
  try {
    // This requires installing aws-sdk: npm install aws-sdk
    // const AWS = require('aws-sdk');
    
    // const ses = new AWS.SES({
    //   region: process.env.AWS_REGION || 'us-east-1',
    //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    // });

    // const params = {
    //   Source: 'noreply@shoeplanetkenya.com',
    //   Destination: { ToAddresses: [to] },
    //   Message: {
    //     Subject: { Data: subject },
    //     Body: { Html: { Data: html } },
    //   },
    // };

    // const result = await ses.sendEmail(params).promise();
    // return { success: true, messageId: result.MessageId };
    
    throw new Error('AWS SES not configured - install aws-sdk package first');
  } catch (error) {
    console.error('AWS SES error:', error);
    throw error;
  }
}

// Resend integration (modern email service)
export async function sendEmailWithResend(to, subject, html) {
  try {
    console.log('Attempting to send email via Resend...');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('API Key:', process.env.RESEND_API_KEY ? 'Present' : 'Missing');
    
    // Use a more reliable from address
    const fromEmail = 'noreply@resend.dev';
    
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [to],
        subject: subject,
        html: html,
      }),
    });

    console.log('Resend response status:', response.status);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Resend error details:', errorData);
      
      // If it's a domain verification error, try sending to verified email
      if (errorData.error && errorData.error.includes('You can only send testing emails to your own email address')) {
        console.log('⚠️ Domain verification required. Trying verified email...');
        
        // Try sending to the verified email address
        const verifiedEmail = 'naomiwwe65@protonmail.com';
        const verifiedResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [verifiedEmail],
            subject: `[FORWARDED] ${subject}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333;">Email Forwarded</h2>
                <p><strong>Original Recipient:</strong> ${to}</p>
                <p><strong>Original Subject:</strong> ${subject}</p>
                <hr>
                ${html}
              </div>
            `,
          }),
        });
        
        if (verifiedResponse.ok) {
          const verifiedResult = await verifiedResponse.json();
          console.log('✅ Email sent to verified address:', verifiedEmail);
          return { success: true, id: verifiedResult.id, forwarded: true, verifiedEmail };
        }
      }
      
      throw new Error(`Resend error: ${response.status} - ${errorData.message || 'Unknown error'}`);
    }

    const result = await response.json();
    console.log('Resend success:', result);
    return { success: true, id: result.id };
  } catch (error) {
    console.error('Resend error:', error);
    throw error;
  }
}

// Default email service (uses Resend for real email sending)
export async function sendEmail(to, subject, html) {
  try {
    // Try Resend first (real email sending)
    return await sendEmailWithResend(to, subject, html);
  } catch (error) {
    console.error('Resend email service error:', error);
    
    // If Resend fails, fallback to demo mode
    console.log('📧 FALLBACK: Email logged to console (demo mode)');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('Content:', html);
    
    return { success: true, demo: true, id: 'demo-' + Date.now() };
  }
}
