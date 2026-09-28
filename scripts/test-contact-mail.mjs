import nodemailer from "nodemailer";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

function loadEnv(fileName) {
  const file = path.join(root, fileName);
  try {
    const text = readFileSync(file, "utf8");
    for (const line of text.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim();
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // optional
  }
}

loadEnv(".env.local");
loadEnv(".env");

const user = process.env.SMTP_USER || "";
const pass = process.env.SMTP_PASS || "";
const host = process.env.SMTP_HOST || "smtp.gmail.com";
const port = Number(process.env.SMTP_PORT || "587");
const to = process.env.MAIL_TO || "hr@webastral.com";
const from = process.env.MAIL_FROM || user;

if (!user || !pass) {
  console.error("Missing SMTP_USER or SMTP_PASS in .env.local");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465,
  auth: { user, pass },
});

console.log(`Verifying SMTP ${host}:${port} as ${user}...`);
await transporter.verify();
console.log("SMTP login OK");

const info = await transporter.sendMail({
  from: `"WebAstral Contact" <${from}>`,
  to,
  subject: "[TEST] Next.js contact mailer",
  text: "This is a local stack test from the WebAstral Next.js contact mailer. You can ignore it.",
  html: "<p>This is a local stack test from the WebAstral Next.js contact mailer. You can ignore it.</p>",
});

console.log("Test email sent");
console.log("messageId:", info.messageId);
console.log("accepted:", info.accepted.join(", ") || "(none)");
console.log("response:", info.response);
