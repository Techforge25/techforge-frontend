"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function SmoothScrollProvider() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.92,
      touchMultiplier: 1,
    });
    lenisRef.current = lenis;

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      // Recalculate dimensions to fit the new route's layout/height boundaries
      lenisRef.current.resize();
      // Instantly scroll to top on page transition
      lenisRef.current.scrollTo(0, { immediate: true });
      
      // Delay ScrollTrigger refresh slightly to ensure Next.js has finished rendering elements
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}

