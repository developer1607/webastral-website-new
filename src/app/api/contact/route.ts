import { NextResponse } from "next/server";
import { parseContactPayload, sendContactMail } from "@/lib/contact-mail";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { payload, errors } = parseContactPayload(body);

    if (!payload) {
      return NextResponse.json(
        { success: false, message: errors.join(" ") },
        { status: 400 },
      );
    }

    const result = await sendContactMail(payload);
    return NextResponse.json(result);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Could not send your message.";
    console.error("contact mail failed:", message);
    return NextResponse.json(
      { success: false, message: "Could not send your message. Please try again." },
      { status: 500 },
    );
  }
}

export function GET() {
  return NextResponse.json(
    { success: false, message: "Only POST requests are accepted." },
    { status: 405 },
  );
}
