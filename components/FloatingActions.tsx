"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, CalendarPlus, X } from "lucide-react";
import { weddingData } from "@/app/data/content";

export function FloatingActions() {
  const [showMenu, setShowMenu] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('scroll', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  const shareOnWhatsApp = () => {
    const text = `You're invited to the wedding of ${weddingData.groom} & ${weddingData.bride} on ${weddingData.date}!%0A%0ASee our invitation website here: ${window.location.href}`;
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const addToCalendar = () => {
    const event = {
      text: `${weddingData.groom} & ${weddingData.bride}'s Wedding`,
      dates: "20260524T093000Z/20260524T153000Z", // UTC times for 3pm-9pm IST
      details: "Request the honor of your presence at our Holy Matrimony",
      location: weddingData.venue.name,
    };
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&dates=${event.dates}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="flex flex-col gap-3"
          >
            <button
              onClick={shareOnWhatsApp}
              className="bg-white text-olive p-3 rounded-full shadow-lg border border-champagne hover:bg-olive hover:text-white transition-colors flex items-center justify-center w-12 h-12 relative group"
            >
              <Share2 className="w-5 h-5" />
              <span className="absolute right-full mr-4 bg-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-champagne shadow-sm">
                Share Invite
              </span>
            </button>
            <button
              onClick={addToCalendar}
              className="bg-white text-olive p-3 rounded-full shadow-lg border border-champagne hover:bg-olive hover:text-white transition-colors flex items-center justify-center w-12 h-12 relative group"
            >
              <CalendarPlus className="w-5 h-5" />
              <span className="absolute right-full mr-4 bg-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-champagne shadow-sm">
                Add to Calendar
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowMenu(!showMenu)}
        className="bg-gold text-white p-4 rounded-full shadow-xl hover:bg-gold/90 transition-colors z-50 flex items-center justify-center w-14 h-14"
      >
        <motion.div
          animate={{ rotate: showMenu ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {showMenu ? <X className="w-6 h-6" /> : <span className="font-heading font-semibold text-lg">+</span>}
        </motion.div>
      </motion.button>
      
      {/* Auto-show hint once user interacts */}
      {!hasInteracted && !showMenu && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute right-full mr-4 bottom-2 bg-white/90 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap shadow-sm border border-champagne text-olive pointer-events-none"
        >
          More options here! ➔
        </motion.div>
      )}
    </div>
  );
}
