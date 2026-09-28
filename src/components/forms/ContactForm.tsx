"use client";

import { useState, type FormEvent } from "react";
import { quoteServices } from "@/lib/site";

type FormStatus = "idle" | "sending" | "ok" | "error";

export default function ContactForm({
  compact = false,
  lead = false,
  defaultService = "Web Design",
}: {
  compact?: boolean;
  lead?: boolean;
  defaultService?: string;
}) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");
  const stacked = compact || lead;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/send-email.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fname: String(data.get("fname") || "").trim(),
          email: String(data.get("email") || "").trim(),
          phone: String(data.get("phone") || "").trim(),
          subject: String(data.get("subject") || "").trim() || "Website enquiry",
          service: String(data.get("service") || "").trim(),
          message: String(data.get("message") || "").trim(),
        }),
      });
      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (result.success) {
        form.reset();
        setStatus("ok");
        setFeedback(result.message || "Thank you. Our team will get back to you shortly.");
        return;
      }

      setStatus("error");
      setFeedback(result.message || "Could not send your message. Please try again.");
    } catch {
      setStatus("error");
      setFeedback("Could not send your message. Please try again.");
    }
  }

  return (
    <form
      className={lead ? "grid gap-3" : "grid gap-4 sm:grid-cols-2"}
      onSubmit={handleSubmit}
    >
      <input
        required
        name="fname"
        placeholder="Your Name *"
        className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-[#2f6fd6] focus:ring-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Your E-mail *"
        required
        className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-[#2f6fd6] focus:ring-2"
      />
      <select
        name="service"
        className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-[#2f6fd6] focus:ring-2"
        defaultValue={defaultService}
      >
        {quoteServices.map((service) => (
          <option key={service}>{service}</option>
        ))}
      </select>
      <input
        name="phone"
        placeholder="Phone Number *"
        required
        className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-[#2f6fd6] focus:ring-2"
      />
      {lead ? null : (
        <input
          name="subject"
          placeholder="Subject"
          className={`${stacked ? "sm:col-span-2" : ""} rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-[#2f6fd6] focus:ring-2`}
        />
      )}
      <textarea
        name="message"
        rows={lead ? 4 : 5}
        required
        placeholder={lead ? "Project requirements" : "Write A Question"}
        className={`rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-[#2f6fd6] focus:ring-2 ${lead ? "" : "sm:col-span-2"}`}
      />
      <div className={lead ? "" : "sm:col-span-2"}>
        <button
          type="submit"
          disabled={status === "sending"}
          className={`rounded-full bg-[#2f6fd6] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#2563c7] disabled:cursor-not-allowed disabled:opacity-70 ${
            lead ? "w-full" : "w-full sm:w-auto"
          }`}
        >
          {status === "sending"
            ? "Sending..."
            : lead
              ? "Get a Free Consultation"
              : "Send Now"}
        </button>
        {feedback ? (
          <p
            className={`mt-3 text-sm ${
              status === "ok" ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
