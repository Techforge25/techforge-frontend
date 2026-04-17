"use client";

import { useState } from "react";
import { navigationItems } from "@/data/header";
import headerGlowLineA from "@/assets/images/header-glow-line-a.svg";
import logo from "@/assets/images/logo-clean.png";
import HeaderQuoteButton from "@/components/ui/header-quote-button";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkBase =
    "inline-flex items-center whitespace-nowrap text-base font-medium capitalize leading-none text-[#999999] transition-[color,text-shadow,filter] duration-200";
  const navLinkActive =
    "text-white [text-shadow:0_0_7px_rgba(55,118,255,0.75),0_0_14px_rgba(55,118,255,0.6)] [filter:drop-shadow(0_0_5px_rgba(55,118,255,0.5))]";
  const navLinkHoverFocus =
    "hover:text-white hover:[text-shadow:0_0_7px_rgba(55,118,255,0.75),0_0_14px_rgba(55,118,255,0.6)] hover:[filter:drop-shadow(0_0_5px_rgba(55,118,255,0.5))] focus-visible:text-white focus-visible:[text-shadow:0_0_7px_rgba(55,118,255,0.75),0_0_14px_rgba(55,118,255,0.6)] focus-visible:[filter:drop-shadow(0_0_5px_rgba(55,118,255,0.5))] focus-visible:outline-none";
  const mobileMenuPanelClass = `absolute right-4 top-[calc(100%+10px)] z-30 w-[min(92vw,340px)] rounded-2xl border border-[#248aff] bg-[#111327] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-all duration-200 xl:hidden ${
    mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
  }`;

  return (
    <header className="relative h-[72px] w-full overflow-visible bg-[#131324] sm:h-[80px] xl:h-[89px]">
      <div className="relative mx-auto flex h-full w-full max-w-[1200px] items-center px-4 sm:px-6 xl:px-0">
        <a href="#" aria-label="Techforge Innovations" className="shrink-0">
          <img
            src={logo.src}
            alt="Techforge Innovations"
            className="block h-[42px] w-[190px] bg-transparent object-contain object-left sm:h-[52px] sm:w-[250px] md:h-[58px] md:w-[290px] lg:h-[64px] lg:w-[330px] xl:h-[89px] xl:w-[500px]"
          />
        </a>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 xl:flex"
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`${navLinkBase} ${item.active ? navLinkActive : ""} ${navLinkHoverFocus}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <HeaderQuoteButton className="ml-auto hidden xl:inline-flex" label="get a Quotes" />

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#248aff] text-white xl:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu panel is hidden on desktop and toggled by the hamburger button. */}
      <div className={mobileMenuPanelClass}>
        <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <a
              key={`mobile-${item.label}`}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`${navLinkBase} ${item.active ? navLinkActive : "hover:text-white"} w-full rounded-md px-2 py-1`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <HeaderQuoteButton className="mt-4 h-[44px] w-full" label="get a Quotes" />
      </div>

      {/* Layered glow line at the header bottom to match the design highlight. */}
      <img
        src={headerGlowLineA.src}
        alt=""
        className="pointer-events-none absolute bottom-[-2px] left-1/2 z-10 h-[6px] w-[72vw] max-w-[752px] min-w-[260px] -translate-x-1/2 opacity-100 [filter:brightness(1.2)] [mix-blend-mode:screen]"
      />
      <div className="pointer-events-none absolute bottom-[-1px] left-1/2 z-20 h-[3px] w-[72vw] max-w-[752px] min-w-[260px] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(55,118,255,0)_0%,rgba(55,118,255,1)_50%,rgba(55,118,255,0)_100%)]" />
    </header>
  );
}

