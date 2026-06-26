"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface BriefModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const BriefModalContext = createContext<BriefModalContextValue | null>(null);

export function BriefModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BriefModalContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </BriefModalContext.Provider>
  );
}

export function useBriefModal() {
  const ctx = useContext(BriefModalContext);
  if (!ctx) {
    throw new Error("useBriefModal must be used within BriefModalProvider");
  }
  return ctx;
}
