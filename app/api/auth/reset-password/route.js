import { NextResponse } from 'next/server';
import { api } from '../../../../convex/_generated/api';
import { ConvexHttpClient } from 'convex/browser';

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL || "https://fearless-emu-885.convex.cloud");

export async function POST(request) {
  try {
    const { token, password } = await request.json();

    if (!token || !password) {
      return NextResponse.json(
        { error: "Token and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    // Validate token and get reset record
    try {
      const resetRecord = await convex.query(api.users.getPasswordReset, { token: token });
      
      if (!resetRecord) {
        return NextResponse.json(
          { error: "Invalid or expired reset token" },
          { status: 400 }
        );
      }

      // Check if token has expired
      if (Date.now() > resetRecord.expiresAt) {
        return NextResponse.json(
          { error: "Reset token has expired" },
          { status: 400 }
        );
      }

      // Update user password in Convex
      await convex.mutation(api.users.updatePassword, {
        userId: resetRecord.userId,
        password: password
      });

      // Delete the reset token
      await convex.mutation(api.users.deletePasswordReset, {
        token: token
      });

      return NextResponse.json(
        { message: "Password reset successfully" },
        { status: 200 }
      );

    } catch (error) {
      console.error("Error resetting password:", error);
      return NextResponse.json(
        { error: "Failed to reset password" },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

