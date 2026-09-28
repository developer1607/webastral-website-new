"use client";

import type { ReactNode } from "react";
import { useQuote } from "@/components/forms/QuoteProvider";

export default function QuoteButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { setOpen } = useQuote();

  return (
    <button type="button" onClick={() => setOpen(true)} className={className}>
      {children}
    </button>
  );
}
