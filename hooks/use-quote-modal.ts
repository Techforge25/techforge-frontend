"use client";

import { useContext } from "react";
import { QuoteModalContext } from "@/components/ui/quote-modal-provider";

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);

  if (!context) {
    throw new Error("useQuoteModal must be used within QuoteModalProvider");
  }

  return context;
}

