"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/app/data/content";
import { MapPin } from "lucide-react";

export function MapSection() {
  return (
    <section className="py-20 px-4 bg-ivory relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl text-olive mb-4">Location</h2>
          <p className="font-body text-text-muted mb-6">{weddingData.venue.name}</p>
          
          <a
            href={weddingData.venue.mapShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-full text-olive border border-champagne hover:bg-olive hover:text-white transition-colors font-medium text-sm shadow-sm"
          >
            <MapPin className="w-4 h-4" />
            Get Directions
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-md border-4 border-white h-[400px] md:h-[500px]"
        >
          <iframe
            src={weddingData.venue.mapUrl}
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
  );
}
