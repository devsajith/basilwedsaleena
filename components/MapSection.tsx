"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/app/data/content";
import { Navigation } from "lucide-react";

export function MapSection() {
  const matrimonyEvent = weddingData.events[0];
  const receptionEvent = weddingData.events[1];

  return (
    <div className="space-y-0">
      {/* SECTION 1: Holy Matrimony Location */}
      <section className="py-16 sm:py-20 px-4 bg-ivory relative border-b border-champagne">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <span className="font-heading text-xs uppercase tracking-widest text-gold font-semibold mb-2 block">
              Ceremony Location
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-olive mb-3">{matrimonyEvent.title}</h2>
            <p className="font-body text-text-muted text-base sm:text-lg mb-2">{matrimonyEvent.venue}</p>
            <p className="font-heading text-xs text-gold uppercase tracking-wider mb-6">
              {matrimonyEvent.day}, {matrimonyEvent.date} • {matrimonyEvent.time}
            </p>
            
            <a
              href={matrimonyEvent.mapShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white px-6 sm:px-8 py-3 rounded-full text-olive border border-champagne hover:bg-olive hover:text-white transition-colors font-medium text-xs sm:text-sm shadow-sm"
            >
              <Navigation className="w-4 h-4 text-gold" />
              Get Directions to Holy Matrimony
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-md border-4 border-white h-[320px] sm:h-[450px]"
          >
            <iframe
              src={matrimonyEvent.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Wedding Reception Location */}
      <section className="py-16 sm:py-20 px-4 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <span className="font-heading text-xs uppercase tracking-widest text-gold font-semibold mb-2 block">
              Reception Location
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-olive mb-3">{receptionEvent.title}</h2>
            <p className="font-body text-text-muted text-base sm:text-lg mb-2">{receptionEvent.venue}</p>
            <p className="font-heading text-xs text-gold uppercase tracking-wider mb-6">
              {receptionEvent.day}, {receptionEvent.date} • {receptionEvent.time}
            </p>
            
            <a
              href={receptionEvent.mapShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white px-6 sm:px-8 py-3 rounded-full text-olive border border-champagne hover:bg-olive hover:text-white transition-colors font-medium text-sm shadow-sm"
            >
              <Navigation className="w-4 h-4 text-gold" />
              Get Directions to Wedding Reception
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-md border-4 border-white h-[320px] sm:h-[450px]"
          >
            <iframe
              src={receptionEvent.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
