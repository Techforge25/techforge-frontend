"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "text" | "interactive" | "hidden";

const textHoverSelector =
  "h1,h2,h3,h4,h5,h6,p,span,strong,em,blockquote,li,[data-cursor='text']";
const interactiveSelector =
  "a,button,[role='button'],[data-cursor='interactive'],.cursor-pointer";
const nativeInputSelector = "input,textarea,select,[contenteditable='true']";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(true);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const targetXRef = useRef(0);
  const targetYRef = useRef(0);
  const currentXRef = useRef(0);
  const currentYRef = useRef(0);

  useEffect(() => {
    const coarsePointerQuery = window.matchMedia("(hover: none) and (pointer: coarse)");
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let hasShownCursor = false;

    const syncPointerMode = () => {
      if (coarsePointerQuery.matches) {
        setEnabled(false);
        setVisible(false);
        document.body.classList.remove("has-custom-cursor");
        document.body.classList.remove("has-custom-cursor-ready");
        return;
      }

      setEnabled(true);
      document.body.classList.add("has-custom-cursor");
    };

    const getModeForTarget = (target: EventTarget | null): CursorMode => {
      const element = target as Element | null;
      if (!element) return "default";
      if (element.closest(nativeInputSelector)) return "hidden";
      if (element.closest(interactiveSelector)) return "interactive";
      if (element.closest(textHoverSelector)) return "text";
      return "default";
    };

    const animate = () => {
      const ease = reduceMotionQuery.matches ? 1 : 0.18;
      currentXRef.current += (targetXRef.current - currentXRef.current) * ease;
      currentYRef.current += (targetYRef.current - currentYRef.current) * ease;

      if (ringRef.current) {
        ringRef.current.style.left = `${currentXRef.current}px`;
        ringRef.current.style.top = `${currentYRef.current}px`;
      }

      if (dotRef.current) {
        dotRef.current.style.left = `${targetXRef.current}px`;
        dotRef.current.style.top = `${targetYRef.current}px`;
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    const showCursor = (clientX: number, clientY: number, eventTarget: EventTarget | null) => {
      if (!hasShownCursor) {
        hasShownCursor = true;
        document.body.classList.add("has-custom-cursor-ready");
      }

      targetXRef.current = clientX;
      targetYRef.current = clientY;
      if (!visible) setVisible(true);
      setMode(getModeForTarget(eventTarget));
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse" && event.pointerType !== "") {
        return;
      }

      if (!enabled) {
        setEnabled(true);
        document.body.classList.add("has-custom-cursor");
      }

      showCursor(event.clientX, event.clientY, event.target);
    };

    const onMouseMove = (event: MouseEvent) => {
      showCursor(event.clientX, event.clientY, event.target);
    };

    const onPointerOver = (event: PointerEvent) => {
      setMode(getModeForTarget(event.target));
    };

    const onPointerLeave = () => {
      setVisible(false);
      setMode("default");
      document.body.classList.remove("has-custom-cursor-ready");
      hasShownCursor = false;
    };

    syncPointerMode();
    coarsePointerQuery.addEventListener("change", syncPointerMode);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      document.body.classList.remove("has-custom-cursor-ready");
      coarsePointerQuery.removeEventListener("change", syncPointerMode);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerleave", onPointerLeave);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [enabled, visible]);

  if (!enabled) return null;

  const isText = mode === "text";
  const isInteractive = mode === "interactive";
  const isHidden = mode === "hidden";
  const showCursor = visible && !isHidden;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`custom-cursor-ring ${showCursor ? "opacity-100" : "opacity-0"} ${
          isText ? "custom-cursor-ring--text" : ""
        } ${isInteractive ? "custom-cursor-ring--interactive" : ""}`}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`custom-cursor-dot ${showCursor ? "opacity-100" : "opacity-0"} ${
          isText || isInteractive ? "custom-cursor-dot--active" : ""
        }`}
      />
    </>
  );
}
