"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

type QuoteContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used within QuoteProvider");
  }
  return context;
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <QuoteContext.Provider value={{ open, setOpen }}>
      {children}
      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close quote form"
              className="fixed inset-0 z-[60] bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
            >
              <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4">
                <h2 className="text-lg font-semibold text-zinc-900">Get a Quote</h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-zinc-200 p-2"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <ContactForm compact />
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </QuoteContext.Provider>
  );
}
