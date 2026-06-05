"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { Faq } from "@/lib/faqs";
import { cn } from "@/lib/utils";

/** Accessible FAQ accordion. Pair with faqPageSchema() for matching structured data. */
export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-forest-900/10 overflow-hidden rounded-2xl border border-forest-900/10 bg-white shadow-soft">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <span className="text-[1.0625rem] font-semibold text-forest-900">
                  {faq.question}
                </span>
                <Plus
                  className={cn(
                    "h-5 w-5 shrink-0 text-emerald-600 transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-all duration-300 ease-brand",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[0.95rem] leading-relaxed text-bone-700 sm:px-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
