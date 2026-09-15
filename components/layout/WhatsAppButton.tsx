"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  const message = encodeURIComponent(
    "Hello Jagdamba Procut, I'd like to share a steel plate / cutting requirement."
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={`https://wa.me/${company.whatsapp}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, scale: 1.03 }}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] py-3 pl-3 pr-3 text-white shadow-card-hover sm:bottom-7 sm:right-7 sm:pr-4"
          aria-label="Send your requirement on WhatsApp"
        >
          <span className="relative grid h-8 w-8 place-items-center">
            <span className="absolute inset-0 rounded-full bg-white/30 animate-pulse-ring" />
            <MessageCircle size={22} strokeWidth={2} fill="white" className="relative text-[#25D366]" />
          </span>
          <span className="hidden text-sm font-semibold sm:inline">Send Your Requirement</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
