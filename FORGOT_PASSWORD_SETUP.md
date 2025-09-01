# Forgot Password Feature Setup

This document explains how to set up the forgot password feature with email and SMS capabilities.

## Features

- ✅ Email-based password reset
- ✅ SMS-based password reset
- ✅ Secure token generation
- ✅ Token expiration (15 minutes)
- ✅ User-friendly interface
- ✅ Backend integration with Convex

## Pages Created

1. **Forgot Password Page** (`/forgot-password`)
   - Toggle between email and SMS recovery
   - Form validation
   - Success/error messaging

2. **Reset Password Page** (`/reset-password`)
   - Token validation
   - Password strength requirements
   - Confirmation matching

## API Endpoints

1. **POST** `/api/auth/forgot-password`
   - Accepts email or phone number
   - Generates reset token
   - Sends reset link/code

2. **POST** `/api/auth/validate-reset-token`
   - Validates reset token
   - Checks expiration

3. **POST** `/api/auth/reset-password`
   - Updates user password
   - Deletes used token

## Database Schema

### Users Table (Updated)
```typescript
users: defineTable({
  clerkUserId: v.string(),
  email: v.string(),
  firstName: v.optional(v.string()),
  lastName: v.optional(v.string()),
  phone: v.optional(v.string()),
  password: v.optional(v.string()), // Added for password reset
  // ... other fields
})
```

### Password Resets Table (New)
```typescript
passwordResets: defineTable({
  userId: v.id("users"),
  token: v.string(),
  expiresAt: v.number(),
  method: v.string(), // "email" or "sms"
  createdAt: v.number(),
}).index("by_token", ["token"])
```

## Email Service Setup

### Option 1: SendGrid
1. Sign up at [SendGrid](https://sendgrid.com/)
2. Get API key
3. Add to `.env.local`:
```env
SENDGRID_API_KEY=your_sendgrid_api_key
```

### Option 2: AWS SES
1. Set up AWS SES
2. Add to `.env.local`:
```env
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
```

### Option 3: Resend
1. Sign up at [Resend](https://resend.com/)
2. Get API key
3. Add to `.env.local`:
```env
RESEND_API_KEY=your_resend_api_key
```

## SMS Service Setup

### Option 1: Twilio
1. Sign up at [Twilio](https://twilio.com/)
2. Get credentials
3. Add to `.env.local`:
```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number
```

### Option 2: AWS SNS
1. Set up AWS SNS
2. Add to `.env.local`:
```env
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
```

### Option 3: Africa's Talking (Recommended for Kenya)
1. Sign up at [Africa's Talking](https://africastalking.com/)
2. Get credentials
3. Add to `.env.local`:
```env
AFRICAS_TALKING_USERNAME=your_username
AFRICAS_TALKING_API_KEY=your_api_key
AFRICAS_TALKING_FROM=ShoePlanet
```

## Production Setup

1. **Update Email Service**: Edit `app/utils/emailService.js`
   - Uncomment your preferred email service
   - Comment out the demo logging

2. **Update SMS Service**: Edit `app/utils/smsService.js`
   - Uncomment your preferred SMS service
   - Comment out the demo logging

3. **Environment Variables**: Add all required API keys to your production environment

4. **Domain Setup**: Update `NEXT_PUBLIC_APP_URL` in your environment

## Testing

1. **Email Reset**:
   - Go to `/forgot-password`
   - Select "Email"
   - Enter your email
   - Check console for reset link
   - Click link to reset password

2. **SMS Reset**:
   - Go to `/forgot-password`
   - Select "SMS"
   - Enter your phone number
   - Check console for reset code
   - Use code to reset password

## Security Features

- ✅ Tokens expire after 15 minutes
- ✅ Tokens are single-use
- ✅ Secure token generation
- ✅ Input validation
- ✅ Rate limiting (implement in production)
- ✅ No user enumeration (same response for existing/non-existing users)

## Customization

### Email Template
Edit the HTML template in `sendResetEmail()` function in `/api/auth/forgot-password/route.js`

### SMS Message
Edit the message template in `sendResetSMS()` function in `/api/auth/forgot-password/route.js`

### Token Expiration
Change the expiration time in the forgot password API (currently 15 minutes)

## Troubleshooting

1. **Convex Functions Not Found**: Run `npx convex dev --once`
2. **Email Not Sending**: Check API keys and service configuration
3. **SMS Not Sending**: Check API keys and phone number format
4. **Token Validation Fails**: Check if token exists in database

## Next Steps

1. Implement rate limiting
2. Add password strength requirements
3. Add email/SMS verification for new accounts
4. Implement account lockout after failed attempts
5. Add audit logging for security events

