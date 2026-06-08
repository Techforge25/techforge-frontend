import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteFooter from "@/components/layout/site-footer";
import CustomCursor from "@/components/ui/custom-cursor";
import QuoteModalProvider from "@/components/ui/quote-modal-provider";
import SmoothScrollProvider from "@/components/ui/smooth-scroll-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Techforge Innovations",
  description: "Techforge Innovations website",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/icon.png?v=2", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/icon.png?v=2",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <CustomCursor />
        <SmoothScrollProvider />
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
