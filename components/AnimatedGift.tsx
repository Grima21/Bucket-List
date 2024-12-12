"use client";

import { useState, useEffect } from "react";
import { Gift } from "lucide-react";

export default function AnimatedGift() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    const timer = setTimeout(() => setIsOpen(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`transition-all duration-500 ${
          isOpen ? "scale-150" : "scale-100"
        }`}
      >
        <Gift
          className={`w-12 h-12 ${isOpen ? "text-green-500" : "text-red-500"}`}
        />
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full bg-yellow-300 rounded-full transition-all duration-500 ${
          isOpen ? "scale-0" : "scale-100"
        }`}
      />
    </div>
  );
}
