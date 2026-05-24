"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "portfolio-visitor-number";

export default function VisitorCounter() {
  const [visitorNumber, setVisitorNumber] = useState<number | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored) {
      setVisitorNumber(Number.parseInt(stored, 10));
      return;
    }

    const recordVisit = async () => {
      try {
        const response = await fetch("/api/visitor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ page: window.location.pathname }),
        });

        if (!response.ok) return;

        const data = (await response.json()) as { visitorNumber?: number };
        if (typeof data.visitorNumber === "number") {
          sessionStorage.setItem(SESSION_KEY, String(data.visitorNumber));
          setVisitorNumber(data.visitorNumber);
        }
      } catch {
        // API unavailable in local static preview — fail silently
      }
    };

    recordVisit();
  }, []);

  if (visitorNumber === null) return null;

  return (
    <div
      aria-live="polite"
      className="fixed bottom-4 left-4 z-50 rounded-full border border-[#7042f861] bg-[#030014]/80 px-4 py-2 text-xs text-gray-300 backdrop-blur-md pointer-events-none"
    >
      You are visitor{" "}
      <span className="font-semibold text-purple-300">
        #{visitorNumber.toLocaleString()}
      </span>
    </div>
  );
}
