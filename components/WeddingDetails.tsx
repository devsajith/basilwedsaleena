"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/app/data/content";
import { CalendarDays, MapPin, Clock } from "lucide-react";

export function WeddingDetails() {
  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-olive mb-6">Family Blessings</h2>
          <div className="grid md:grid-cols-2 gap-8 font-heading">
            <div className="bg-ivory/30 p-8 rounded-2xl border border-champagne text-center flex flex-col items-center shadow-sm">
              <div className="w-8 h-8 mb-4 opacity-70">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-4-12h8" />
                </svg>
              </div>
              <p className="font-cursive italic text-3xl md:text-4xl text-olive mb-4">Groom's Family</p>
              <p className="text-xl md:text-2xl font-medium text-text-main">{weddingData.parents.groom.father} &amp; {weddingData.parents.groom.mother}</p>
              <p className="text-sm mt-3 text-text-muted tracking-widest uppercase">{weddingData.parents.groom.address}</p>
            </div>
            
            <div className="bg-ivory/30 p-8 rounded-2xl border border-champagne text-center flex flex-col items-center shadow-sm">
              <div className="w-8 h-8 mb-4 opacity-70">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-4-12h8" />
                </svg>
              </div>
              <p className="font-cursive italic text-3xl md:text-4xl text-olive mb-4">Bride's Family</p>
              <p className="text-xl md:text-2xl font-medium text-text-main">{weddingData.parents.bride.father} &amp; {weddingData.parents.bride.mother}</p>
              <p className="text-sm mt-3 text-text-muted tracking-widest uppercase">{weddingData.parents.bride.address}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {weddingData.events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-ivory rounded-3xl p-8 text-center border border-champagne shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full" />
              
              <h3 className="font-cursive text-4xl text-olive mb-6">{event.title}</h3>
              
              <div className="space-y-4 font-body text-text-muted flex flex-col items-center">
                <div className="flex items-center gap-3">
                  <CalendarDays className="w-5 h-5 text-gold" />
                  <span className="text-lg uppercase tracking-wider">{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold" />
                  <span className="text-lg uppercase tracking-wider">{event.day} | {event.time}</span>
                </div>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-champagne w-full justify-center flex-col">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-md font-medium text-text-main">{event.venue}</span>
                  </div>
                  {event.mapShareUrl && (
                    <a
                      href={event.mapShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 px-5 py-2 rounded-full text-xs font-medium text-olive bg-white border border-champagne hover:bg-olive hover:text-white transition-colors shadow-sm"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Get Directions
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
