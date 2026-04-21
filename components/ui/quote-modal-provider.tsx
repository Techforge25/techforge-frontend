"use client";

import { createContext, useCallback, useMemo, useState, type ReactNode } from "react";
import QuoteModal from "@/components/ui/quote-modal";

type QuoteModalContextValue = {
  isOpen: boolean;
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
};

export const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export default function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openQuoteModal = useCallback(() => setIsOpen(true), []);
  const closeQuoteModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({
      isOpen,
      openQuoteModal,
      closeQuoteModal,
    }),
    [closeQuoteModal, isOpen, openQuoteModal],
  );

  return (
    <QuoteModalContext.Provider value={value}>
      {children}
      <QuoteModal open={isOpen} onClose={closeQuoteModal} />
    </QuoteModalContext.Provider>
  );
}

