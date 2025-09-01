import { NextResponse } from 'next/server';
import { api } from '../../../../convex/_generated/api';
import { ConvexHttpClient } from 'convex/browser';

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL || "https://fearless-emu-885.convex.cloud");

export async function POST(request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { error: "Token is required" },
        { status: 400 }
      );
    }

    // Validate token in Convex
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

      return NextResponse.json(
        { message: "Token is valid" },
        { status: 200 }
      );

    } catch (error) {
      console.error("Error validating token:", error);
      return NextResponse.json(
        { error: "Failed to validate token" },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error("Validate token error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

