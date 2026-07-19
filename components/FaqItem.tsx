"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-[#0F2744] text-sm">{q}</span>
        {open ? (
          <Minus className="w-4 h-4 text-[#E8A020] flex-shrink-0" />
        ) : (
          <Plus className="w-4 h-4 text-[#E8A020] flex-shrink-0" />
        )}
      </button>
      {open && (
        <p className="text-gray-600 text-sm leading-relaxed pb-4">{a}</p>
      )}
    </div>
  );
}
