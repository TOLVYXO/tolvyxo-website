"use client";
import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("tolvyxo-intro-seen")) return;
      sessionStorage.setItem("tolvyxo-intro-seen", "1");
      setVisible(true);
      const timer = window.setTimeout(() => setVisible(false), 2550);
      return () => window.clearTimeout(timer);
    } catch {
      setVisible(false);
    }
  }, []);

  if (!visible) return null;
  return (
    <div className="intro-curtain" aria-label="TOLVYXO">
      <div className="intro-emblem">
        <div className="intro-ring" />
        <div className="intro-disc"><span className="intro-letter">T</span></div>
      </div>
      <span className="intro-wordmark">TOLVYXO<span>.</span></span>
    </div>
  );
}
