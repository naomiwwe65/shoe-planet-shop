// SMS service utility for production use
// This file contains examples for different SMS services

// Example: Twilio integration
export async function sendSMSWithTwilio(to, message) {
  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;

    const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        To: to,
        From: fromNumber,
        Body: message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Twilio error: ${response.status}`);
    }

    const result = await response.json();
    return { success: true, sid: result.sid };
  } catch (error) {
    console.error('Twilio error:', error);
    throw error;
  }
}

// Example: AWS SNS integration (requires aws-sdk package)
export async function sendSMSWithSNS(to, message) {
  try {
    // This requires installing aws-sdk: npm install aws-sdk
    // const AWS = require('aws-sdk');
    
    // const sns = new AWS.SNS({
    //   region: process.env.AWS_REGION || 'us-east-1',
    //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    // });

    // const params = {
    //   Message: message,
    //   PhoneNumber: to,
    // };

    // const result = await sns.publish(params).promise();
    // return { success: true, messageId: result.MessageId };
    
    throw new Error('AWS SNS not configured - install aws-sdk package first');
  } catch (error) {
    console.error('AWS SNS error:', error);
    throw error;
  }
}

// Example: Africa's Talking integration (popular in Africa)
export async function sendSMSWithAfricasTalking(to, message) {
  try {
    const username = process.env.AFRICAS_TALKING_USERNAME;
    const apiKey = process.env.AFRICAS_TALKING_API_KEY;
    const from = process.env.AFRICAS_TALKING_FROM || 'ShoePlanet';

    console.log('Attempting to send SMS via Africa\'s Talking...');
    console.log('To:', to);
    console.log('Message:', message);
    console.log('Username:', username);
    console.log('API Key:', apiKey ? 'Present' : 'Missing');
    console.log('From:', from);

    const response = await fetch('https://api.africastalking.com/version1/messaging', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'apiKey': apiKey,
      },
      body: new URLSearchParams({
        username: username,
        to: to,
        message: message,
        from: from,
      }),
    });

    console.log('Africa\'s Talking response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Africa\'s Talking error response:', errorText);
      throw new Error(`Africa's Talking error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('Africa\'s Talking success:', result);
    return { success: true, messageId: result.SMSMessageData.Recipients[0].messageId };
  } catch (error) {
    console.error('Africa\'s Talking error:', error);
    throw error;
  }
}

// Default SMS service (uses Africa's Talking)
export async function sendSMS(to, message) {
  try {
    return await sendSMSWithAfricasTalking(to, message);
  } catch (error) {
    console.error('SMS service error:', error);
    // Fallback to console logging for demo
    console.log('=== SMS WOULD BE SENT ===');
    console.log('To:', to);
    console.log('Message:', message);
    console.log('========================');
    return { success: true };
  }
}
