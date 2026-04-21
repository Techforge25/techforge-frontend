import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteFooter from "@/components/layout/site-footer";
import QuoteModalProvider from "@/components/ui/quote-modal-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Techforge Innovations",
  description: "Techforge Innovations website",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <QuoteModalProvider>
          <div className="flex min-h-full flex-col">
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </QuoteModalProvider>
      </body>
    </html>
  );
}
