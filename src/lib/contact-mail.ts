import nodemailer from "nodemailer";

export type ContactPayload = {
  fname: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  message: string;
};

export type ContactResult = {
  success: boolean;
  message: string;
};

function env(name: string) {
  return (process.env[name] || "").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function parseContactPayload(input: unknown): { payload?: ContactPayload; errors: string[] } {
  const data = (input ?? {}) as Record<string, unknown>;
  const payload: ContactPayload = {
    fname: String(data.fname ?? "").trim(),
    email: String(data.email ?? "").trim(),
    phone: String(data.phone ?? "").trim(),
    subject: String(data.subject ?? "").trim() || "Website enquiry",
    service: String(data.service ?? "").trim(),
    message: String(data.message ?? "").trim(),
  };

  const errors: string[] = [];
  if (!payload.fname) errors.push("Name is required.");
  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.push("Valid email is required.");
  }
  if (!payload.phone) errors.push("Phone is required.");
  if (!payload.subject) errors.push("Subject is required.");
  if (!payload.message) errors.push("Message is required.");

  return { payload: errors.length ? undefined : payload, errors };
}

function createTransport() {
  const host = env("SMTP_HOST") || "smtp.gmail.com";
  const port = Number(env("SMTP_PORT") || "587");
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");

  if (!user || !pass) {
    throw new Error("SMTP_USER and SMTP_PASS must be set in .env.local");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendContactMail(payload: ContactPayload): Promise<ContactResult> {
  const to = env("MAIL_TO") || "hr@webastral.com";
  const from = env("MAIL_FROM") || env("SMTP_USER");
  const transporter = createTransport();

  const html = `
    <div style="font-family:Arial,sans-serif;background:#f4f6f9;padding:20px;">
      <div style="max-width:600px;margin:auto;background:#fff;padding:30px;border-radius:10px;">
        <h2 style="color:#1a56d4;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.fname)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>
        <p><strong>Service:</strong> ${escapeHtml(payload.service)}</p>
        <p><strong>Message:</strong><br>${escapeHtml(payload.message).replaceAll("\n", "<br>")}</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: from ? `"WebAstral Contact" <${from}>` : undefined,
    to,
    replyTo: `${payload.fname} <${payload.email}>`,
    subject: `Contact Form: ${payload.subject}`,
    text: [
      "WebAstral Contact Form Submission",
      `Name: ${payload.fname}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Subject: ${payload.subject}`,
      `Service: ${payload.service}`,
      "",
      "Message:",
      payload.message,
    ].join("\n"),
    html,
  });

  return {
    success: true,
    message: "Your message has been sent successfully!",
  };
}

export async function verifySmtp() {
  const transporter = createTransport();
  await transporter.verify();
}
