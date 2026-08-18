"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { weddingData } from "@/app/data/content";
import { Navigation } from "lucide-react";

export function MapSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const activeEvent = weddingData.events[activeTab];

  return (
    <section className="py-20 px-4 bg-ivory relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-4xl text-olive mb-4">Venue Locations</h2>
          <p className="font-body text-text-muted mb-8 max-w-xl mx-auto">
            Find locations and get instant directions for both Holy Matrimony and Reception.
          </p>

          {/* Location Tabs */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {weddingData.events.map((evt, idx) => (
              <button
                key={evt.title}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-2.5 rounded-full font-heading text-sm transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-olive text-white shadow-md scale-105"
                    : "bg-white text-olive border border-champagne hover:bg-ivory"
                }`}
              >
                {evt.title}
              </button>
            ))}
          </div>

          <div className="bg-white/80 backdrop-blur p-4 rounded-2xl max-w-lg mx-auto border border-champagne mb-6 shadow-sm">
            <h3 className="font-heading text-xl text-olive mb-1">{activeEvent.title}</h3>
            <p className="font-body text-sm text-text-muted mb-4">{activeEvent.venue}</p>

            <a
              href={activeEvent.mapShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-olive text-white px-8 py-3 rounded-full hover:bg-olive/90 transition-colors font-medium text-sm shadow-sm"
            >
              <Navigation className="w-4 h-4" />
              Open in Google Maps
            </a>
          </div>
        </motion.div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl overflow-hidden shadow-md border-4 border-white h-[400px] md:h-[500px]"
        >
          <iframe
            src={activeEvent.mapEmbedUrl}
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
