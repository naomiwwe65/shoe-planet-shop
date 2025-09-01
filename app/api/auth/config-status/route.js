import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const config = {
      email: {
        service: 'Resend',
        apiKey: process.env.RESEND_API_KEY ? 'Present' : 'Missing',
        domain: 'noreply@resend.dev',
        username: process.env.AFRICAS_TALKING_USERNAME || 'Not Set'
      },
      sms: {
        service: "Africa's Talking",
        apiKey: process.env.AFRICAS_TALKING_API_KEY ? 'Present' : 'Missing',
        username: process.env.AFRICAS_TALKING_USERNAME || 'Not Set',
        from: process.env.AFRICAS_TALKING_FROM || 'Not Set'
      },
      app: {
        url: process.env.NEXT_PUBLIC_APP_URL || 'Not Set',
        convexUrl: process.env.NEXT_PUBLIC_CONVEX_URL ? 'Present' : 'Missing'
      }
    };

    return NextResponse.json(config);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to get configuration status' }, { status: 500 });
  }
}
