# Vercel Environment Variables Setup Guide

This guide will help you set up all the necessary environment variables for your Shoe Planet Kenya project on Vercel.

## Required Environment Variables

### 1. **Core Application Variables** (Required)

```env
NEXT_PUBLIC_APP_URL=https://your-app-name.vercel.app
NEXT_PUBLIC_CONVEX_URL=https://fearless-emu-885.convex.cloud
```

### 2. **Email Service** (Choose ONE option)

#### Option A: Resend (Recommended - Easy Setup)
```env
RESEND_API_KEY=your_resend_api_key
```

**Setup Steps:**
1. Go to [resend.com](https://resend.com)
2. Sign up for free account
3. Get your API key from dashboard
4. Add to Vercel environment variables

#### Option B: Gmail SMTP
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password
```

**Setup Steps:**
1. Enable 2-factor authentication on Gmail
2. Generate App Password: Google Account → Security → App passwords
3. Use the generated password (not your regular password)

### 3. **SMS Service** (Choose ONE option - Recommended for Kenya)

#### Option A: Africa's Talking (Recommended for Kenya)
```env
AFRICAS_TALKING_USERNAME=your_username
AFRICAS_TALKING_API_KEY=your_api_key
AFRICAS_TALKING_FROM=ShoePlanet
```

**Setup Steps:**
1. Go to [africastalking.com](https://africastalking.com)
2. Sign up for account
3. Get username and API key from dashboard
4. Add to Vercel environment variables

#### Option B: Twilio
```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number
```

## How to Add Environment Variables in Vercel

### Step 1: Go to Vercel Dashboard
1. Visit [vercel.com](https://vercel.com)
2. Sign in and select your project

### Step 2: Navigate to Settings
1. Click on your project
2. Go to **Settings** tab
3. Click **Environment Variables** in the left sidebar

### Step 3: Add Variables
1. Click **Add New**
2. Enter the **Name** (exactly as shown above)
3. Enter the **Value** (your actual API key/credentials)
4. Select **Environment**: Production, Preview, Development (or all)
5. Click **Save**

### Step 4: Redeploy
After adding environment variables, you need to redeploy:
1. Go to **Deployments** tab
2. Click the **3 dots** on the latest deployment
3. Click **Redeploy**

## Environment Variables Checklist

### ✅ Core Variables (Required)
- [ ] `NEXT_PUBLIC_APP_URL` - Your Vercel app URL
- [ ] `NEXT_PUBLIC_CONVEX_URL` - Already set to your Convex URL

### ✅ Email Service (Choose One)
- [ ] `RESEND_API_KEY` - If using Resend
- [ ] `GMAIL_USER` + `GMAIL_APP_PASSWORD` - If using Gmail

### ✅ SMS Service (Choose One)
- [ ] `AFRICAS_TALKING_USERNAME` + `AFRICAS_TALKING_API_KEY` + `AFRICAS_TALKING_FROM` - If using Africa's Talking
- [ ] `TWILIO_ACCOUNT_SID` + `TWILIO_AUTH_TOKEN` + `TWILIO_PHONE_NUMBER` - If using Twilio

## Testing Your Setup

After deployment, test these features:

1. **Visit your app**: `https://your-app-name.vercel.app`
2. **Test forgot password**: Go to `/forgot-password`
3. **Check configuration**: Visit `/api/auth/config-status` to see which services are configured
4. **Test email/SMS**: Try the forgot password feature

## Security Notes

- ✅ Never commit environment variables to GitHub
- ✅ Use different API keys for development and production
- ✅ Regularly rotate your API keys
- ✅ Monitor your API usage to avoid unexpected charges

## Troubleshooting

### Common Issues:
1. **"Missing" status in config**: Environment variable not set correctly
2. **Email/SMS not working**: Check API keys and service setup
3. **Build errors**: Ensure all required variables are set

### Debug Steps:
1. Check Vercel deployment logs
2. Visit `/api/auth/config-status` to see configuration status
3. Test locally with `.env.local` file first

## Next Steps

1. Set up your preferred email service (Resend recommended)
2. Set up your preferred SMS service (Africa's Talking recommended for Kenya)
3. Add all environment variables to Vercel
4. Redeploy your application
5. Test all features

Your app will be fully functional once these environment variables are properly configured!
