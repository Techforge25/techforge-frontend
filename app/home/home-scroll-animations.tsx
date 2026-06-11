"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function animateSectionIntro(section: HTMLElement) {
  const headingLines = Array.from(section.querySelectorAll<HTMLElement>("h2 > span"));
  const bodyCopy = Array.from(section.querySelectorAll<HTMLElement>("p")).slice(0, 3);
  const visuals = Array.from(section.querySelectorAll<HTMLElement>("img, [data-parallax-item], [data-faq-item]")).filter(
    (node) => !node.closest("[data-home-hero]"),
  );
  const cards = Array.from(
    section.querySelectorAll<HTMLElement>("[data-service-card], [data-portfolio-card], [data-testimonial-card], [data-process-step]"),
  )
    .filter((node) => node.offsetParent !== null);

  const introTargets = [...headingLines, ...bodyCopy, ...visuals.slice(0, 2), ...cards.slice(0, 4)];
  if (!introTargets.length) return;

  gsap.from(introTargets, {
    autoAlpha: 0,
    y: 42,
    scale: 0.98,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.08,
    clearProps: "opacity,visibility,transform",
    immediateRender: false,
    scrollTrigger: {
      trigger: section,
      start: "top 78%",
      once: true,
    },
  });
}

function setupMagneticTargets() {
  const magneticTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic='true']"));
  const cleanups = magneticTargets.map((target) => {
    const onMove = (event: MouseEvent) => {
      const bounds = target.getBoundingClientRect();
      const offsetX = event.clientX - (bounds.left + bounds.width / 2);
      const offsetY = event.clientY - (bounds.top + bounds.height / 2);

      gsap.to(target, {
        x: offsetX * 0.12,
        y: offsetY * 0.12,
        duration: 0.32,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const onLeave = () => {
      gsap.to(target, {
        x: 0,
        y: 0,
        duration: 0.42,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    target.addEventListener("mousemove", onMove);
    target.addEventListener("mouseleave", onLeave);

    return () => {
      target.removeEventListener("mousemove", onMove);
      target.removeEventListener("mouseleave", onLeave);
    };
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}

export default function HomeScrollAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const cleanupMagnetic = setupMagneticTargets();
    const media = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>("[data-gsap-section]");
      sections
        .filter((section) => section.dataset.sectionName !== "about")
        .forEach(animateSectionIntro);

      const aboutSection = document.querySelector<HTMLElement>("[data-home-about]");
      const aboutVisual = aboutSection?.querySelector<HTMLElement>("[data-parallax-item='about-visual']");
      const aboutImage = aboutSection?.querySelector<HTMLElement>("[data-about-image]");
      const aboutBadge = aboutSection?.querySelector<HTMLElement>("[data-about-badge]");
      const aboutHeading = aboutSection?.querySelector<HTMLElement>("[data-about-heading]");
      const aboutLead = aboutSection?.querySelector<HTMLElement>("[data-about-lead]");
      const aboutCta = aboutSection?.querySelector<HTMLElement>("[data-about-cta]");

      if (aboutSection && aboutImage) {
        gsap.fromTo(
          aboutImage,
          { scale: 1.03, yPercent: 2 },
          {
            scale: 1.08,
            yPercent: -4,
            force3D: true,
            transformOrigin: "center center",
            ease: "none",
            scrollTrigger: {
              trigger: aboutVisual ?? aboutSection,
              start: "top 84%",
              end: "bottom top",
              scrub: 0.75,
            },
          },
        );
      }

      if (aboutSection && aboutVisual) {
        gsap.from(aboutVisual, {
          autoAlpha: 0,
          y: 42,
          scale: 0.98,
          duration: 0.85,
          ease: "power3.out",
          clearProps: "opacity,visibility,transform",
          immediateRender: false,
          scrollTrigger: {
            trigger: aboutVisual,
            start: "top 82%",
            once: true,
          },
        });
      }

      if (aboutSection) {
        const aboutRevealTargets = [aboutBadge, aboutHeading, aboutLead, aboutCta].filter(Boolean);

        gsap.from(aboutRevealTargets, {
          autoAlpha: 0,
          y: 28,
          scale: 0.985,
          duration: 0.72,
          ease: "power3.out",
          stagger: 0.08,
          clearProps: "opacity,visibility,transform",
          immediateRender: false,
          scrollTrigger: {
            trigger: aboutSection,
            start: "top 78%",
            once: true,
          },
        });
      }

      const whySection = document.querySelector<HTMLElement>("[data-home-why]");
      const whyVisual = whySection?.querySelector<HTMLElement>("[data-parallax-item='why-visual']");
      const whyCopy = whySection?.querySelector<HTMLElement>("[data-why-copy]");
      const whyBadge = whySection?.querySelector<HTMLElement>("[data-why-badge]");
      const whyHeading = whySection?.querySelector<HTMLElement>("[data-why-heading]");
      const whyDescription = whySection?.querySelector<HTMLElement>("[data-why-description]");
      const whySuccess = whySection?.querySelector<HTMLElement>("[data-why-success]");
      const whyProgressFill = whySection?.querySelector<HTMLElement>("[data-why-progress-fill]");
      const whyProgressDot = whySection?.querySelector<HTMLElement>("[data-why-progress-dot]");
      const whyProgressGlow = whySection?.querySelector<HTMLElement>("[data-why-progress-glow]");
      const whyShell = whySection?.querySelector<HTMLElement>("[data-why-shell]");

      if (whySection && whyVisual && whyCopy) {
        gsap.set([whyCopy, whyVisual], { transformOrigin: "center center" });

        if (whyBadge || whyHeading || whyDescription || whySuccess) {
          gsap.set([whyBadge, whyHeading, whyDescription, whySuccess].filter(Boolean), { autoAlpha: 1 });
        }

        gsap.set(whyCopy, { y: 36, autoAlpha: 0.72, scale: 0.985 });
        gsap.set(whyVisual, { x: 56, y: 20, scale: 0.95, autoAlpha: 0.72, rotate: 1.5 });
        gsap.set(whyShell, { y: 0 });
        gsap.set(whyProgressFill, { scaleY: 0, transformOrigin: "top center" });
        gsap.set(whyProgressDot, { y: 0 });
        gsap.set(whyProgressGlow, { autoAlpha: 0 });

        const whyTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: whySection,
            start: "top 76%",
            end: "bottom 38%",
            scrub: 0.85,
            invalidateOnRefresh: true,
          },
        });

        whyTimeline
          .to(
            whyCopy,
            {
              y: -8,
              autoAlpha: 1,
              scale: 1,
              ease: "none",
              duration: 1,
            },
            0,
          )
          .to(
            whyVisual,
            {
              x: 0,
              y: -8,
              scale: 1.02,
              autoAlpha: 1,
              rotate: -0.8,
              ease: "none",
              duration: 1,
            },
            0,
          )
          .to(
            whyShell,
            {
              y: -4,
              ease: "none",
              duration: 1,
            },
            0,
          );

        ScrollTrigger.create({
          trigger: whySection,
          start: "top 76%",
          end: "bottom 38%",
          scrub: 0.85,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;

            if (whyProgressFill) {
              gsap.set(whyProgressFill, { scaleY: progress });
            }

            if (whyProgressDot) {
              gsap.set(whyProgressDot, { y: 248 * progress });
            }

            if (whyProgressGlow) {
              gsap.set(whyProgressGlow, { autoAlpha: 0.18 + progress * 0.72 });
            }
          },
        });
      }

      const processSection = document.querySelector<HTMLElement>("[data-home-process]");
      const processBg = processSection?.querySelector<HTMLElement>("[data-parallax-bg='process']");
      const processSteps = Array.from(document.querySelectorAll<HTMLElement>("[data-process-step]"));

      if (processSection && processBg) {
        gsap.to(processBg, {
          scale: 1.05,
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: processSection,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (processSection && processSteps.length) {
        gsap.from(processSteps, {
          autoAlpha: 0.25,
          y: 28,
          scale: 0.94,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.12,
          clearProps: "opacity,visibility,transform",
          immediateRender: false,
          scrollTrigger: {
            trigger: processSection,
            start: "top 72%",
            once: true,
          },
        });
      }



      const faqItems = Array.from(document.querySelectorAll<HTMLElement>("[data-faq-item]"));
      if (faqItems.length) {
        gsap.from(faqItems, {
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.06,
          clearProps: "opacity,visibility,transform",
          immediateRender: false,
          scrollTrigger: {
            trigger: document.querySelector("[data-home-faq]"),
            start: "top 74%",
            once: true,
          },
        });
      }

      media.add("(min-width: 1024px)", () => {
        const servicesSection = document.querySelector<HTMLElement>("[data-home-services]");
        const serviceGroups = Array.from(servicesSection?.querySelectorAll<HTMLElement>("[data-services-group]") ?? []);
        const servicesGrid = document.querySelector<HTMLElement>("[data-services-cards]");

        if (!servicesSection) return;

        if (serviceGroups.length > 1) {
          serviceGroups.forEach((group, index) => {
            gsap.set(group, {
              autoAlpha: index === 0 ? 1 : 0,
              y: index === 0 ? 0 : 52,
              scale: index === 0 ? 1 : 0.985,
              pointerEvents: index === 0 ? "auto" : "none",
              zIndex: serviceGroups.length - index,
            });
          });

          const servicesTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: servicesSection,
              start: "top top+=82",
              end: `+=${serviceGroups.length * 520}`,
              pin: true,
              scrub: 1.05,
              anticipatePin: 1,
              fastScrollEnd: false,
              invalidateOnRefresh: true,
              snap: {
                snapTo: 1 / (serviceGroups.length - 1),
                duration: { min: 0.18, max: 0.42 },
                ease: "power1.inOut",
              },
            },
          });

          serviceGroups.forEach((group, index) => {
            if (index === 0) return;

            const previousGroup = serviceGroups[index - 1];
            const currentCards = Array.from(group.querySelectorAll<HTMLElement>("[data-service-card]"));
            const previousCards = Array.from(previousGroup.querySelectorAll<HTMLElement>("[data-service-card]"));
            const stepStart = index - 1;

            servicesTimeline
              .to(
                previousGroup,
                {
                  autoAlpha: 0,
                  y: -42,
                  scale: 0.985,
                  duration: 0.42,
                  ease: "power2.out",
                  onStart: () => {
                    previousGroup.style.pointerEvents = "none";
                    group.style.pointerEvents = "auto";
                  },
                },
                stepStart,
              )
              .fromTo(
                previousCards,
                { autoAlpha: 1, y: 0, scale: 1 },
                {
                  autoAlpha: 0,
                  y: -34,
                  scale: 0.965,
                  duration: 0.34,
                  stagger: 0.06,
                  ease: "power2.out",
                },
                stepStart,
              )
              .fromTo(
                group,
                { autoAlpha: 0, y: 52, scale: 0.985 },
                {
                  autoAlpha: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.46,
                  ease: "power3.out",
                },
                stepStart + 0.18,
              )
              .fromTo(
                currentCards,
                { autoAlpha: 0, y: 42, scale: 0.965 },
                {
                  autoAlpha: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.38,
                  stagger: 0.09,
                  ease: "power3.out",
                },
                stepStart + 0.24,
              );
          });

          return;
        }

        const servicesCards = Array.from(document.querySelectorAll<HTMLElement>("[data-service-card]")).filter(
          (node) => node.offsetParent !== null,
        );

        if (!servicesGrid || !servicesCards.length) return;

        gsap.to(servicesGrid, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: servicesSection,
            start: "top 78%",
            end: "bottom top",
            scrub: 0.75,
          },
        });

        servicesCards.forEach((card, index) => {
          gsap.to(card, {
            y: index % 2 === 0 ? -12 : 12,
            rotate: index % 2 === 0 ? -0.8 : 0.8,
            ease: "none",
            scrollTrigger: {
              trigger: servicesSection,
              start: "top 80%",
              end: "bottom top",
              scrub: 0.9,
            },
          });
        });
      });
    });

    return () => {
      cleanupMagnetic();
      media.revert();
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
