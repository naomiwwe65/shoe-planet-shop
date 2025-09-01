import { NextResponse } from 'next/server';
import { api } from '../../../../convex/_generated/api';
import { ConvexHttpClient } from 'convex/browser';
import { sendEmail } from '../../../utils/emailService';
import { sendSMS } from '../../../utils/smsService';

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL || "https://fearless-emu-885.convex.cloud");

export async function POST(request) {
  try {
    const { method, identifier } = await request.json();

    if (!method || !identifier) {
      return NextResponse.json(
        { error: "Method and identifier are required" },
        { status: 400 }
      );
    }

    // Validate identifier format
    if (method === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(identifier)) {
        return NextResponse.json(
          { error: "Please enter a valid email address" },
          { status: 400 }
        );
      }
    } else if (method === "sms") {
      const phoneRegex = /^\+?[1-9]\d{1,14}$/;
      if (!phoneRegex.test(identifier.replace(/\s/g, ''))) {
        return NextResponse.json(
          { error: "Please enter a valid phone number" },
          { status: 400 }
        );
      }
    }

    // Check if user exists in Convex
    let user = null;
    try {
      if (method === "email") {
        user = await convex.query(api.users.getUserByEmail, { email: identifier });
      } else {
        user = await convex.query(api.users.getUserByPhone, { phone: identifier });
      }
    } catch (error) {
      console.error("Error querying user:", error);
    }

    if (!user) {
      // For security reasons, don't reveal if user exists or not
      return NextResponse.json(
        { message: "If an account with this " + (method === "email" ? "email" : "phone number") + " exists, you will receive a reset link." },
        { status: 200 }
      );
    }

    // Generate reset token
    const resetToken = generateResetToken();
    const expiresAt = Date.now() + (15 * 60 * 1000); // 15 minutes

    // Store reset token in Convex
    try {
      await convex.mutation(api.users.createPasswordReset, {
        userId: user._id,
        token: resetToken,
        expiresAt: expiresAt,
        method: method
      });
    } catch (error) {
      console.error("Error creating password reset:", error);
      return NextResponse.json(
        { error: "Failed to create reset token" },
        { status: 500 }
      );
    }

    // Send reset link/code
    if (method === "email") {
      await sendResetEmail(identifier, resetToken, user.firstName || user.name);
    } else {
      await sendResetSMS(identifier, resetToken);
    }

    return NextResponse.json(
      { message: "Reset link sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function generateResetToken() {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

async function sendResetEmail(email, token, userName) {
  try {
    const resetLink = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3002'}/reset-password?token=${token}`;
    
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Password Reset Request</h2>
        <p>Hello ${userName || 'there'},</p>
        <p>You requested a password reset for your Shoe Planet Kenya account.</p>
        <p>Click the link below to reset your password:</p>
        <a href="${resetLink}" style="display: inline-block; background-color: #D4AF37; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 20px 0;">
          Reset Password
        </a>
        <p>This link will expire in 15 minutes.</p>
        <p>If you didn't request this reset, please ignore this email.</p>
        <p>Best regards,<br>Shoe Planet Kenya Team</p>
      </div>
    `;

    await sendEmail(email, "Password Reset - Shoe Planet Kenya", emailContent);

  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}

async function sendResetSMS(phone, token) {
  try {
    const message = `Your Shoe Planet Kenya password reset code is: ${token}. This code expires in 15 minutes.`;
    
    await sendSMS(phone, message);

  } catch (error) {
    console.error("Error sending SMS:", error);
    throw new Error("Failed to send SMS");
  }
}
