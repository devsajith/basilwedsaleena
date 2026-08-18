"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { weddingData } from "@/app/data/content";

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white py-12">
      {/* Background Texture/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/80 z-10" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-4">
             {/* Rings Icon Placeholder (Can use Lucide or simple SVG) */}
             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
               <circle cx="9" cy="12" r="5" />
               <circle cx="15" cy="12" r="5" />
             </svg>
          </div>
          <p className="font-heading text-sm md:text-base text-text-muted tracking-[0.2em] uppercase">
            Wedding Invitation
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="w-full flex justify-center mb-6"
        >
          <img 
            src="/images/bridegroom.jpg" 
            alt="Basil and Aleena Portrait" 
            className="w-full max-w-sm md:max-w-md max-h-[500px] object-cover rounded-3xl shadow-xl border border-champagne" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="my-4 max-w-2xl text-center px-4"
        >
          <p className="font-cursive italic text-lg md:text-xl text-olive leading-relaxed">
            {weddingData.bibleVerse.text}
          </p>
          <p className="font-heading text-xs md:text-sm text-gold tracking-widest uppercase mt-2">
            — {weddingData.bibleVerse.reference}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 flex flex-col items-center"
        >
          <h1 className="font-cursive italic text-5xl md:text-7xl text-text-main mb-6">
            {weddingData.groom} <span className="mx-2 text-4xl md:text-5xl">&amp;</span> {weddingData.bride}
          </h1>

          <div className="space-y-2 text-text-muted font-heading text-sm md:text-base tracking-widest uppercase">
            <p>{weddingData.events[0].day}, {weddingData.events[0].date}</p>
            <p>AT {weddingData.events[0].time}</p>
            <p>{weddingData.venue.name}</p>
          </div>
          
          <p className="font-cursive italic text-2xl md:text-3xl text-text-main mt-8">
            Reception To Follow
          </p>
        </motion.div>
      </div>

      {/* Floating petals animation */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 md:w-3 md:h-3 bg-olive/10 rounded-full blur-[1px]"
              initial={{
                x: Math.random() * 100 + "vw",
                y: -20,
                opacity: Math.random() * 0.5 + 0.2,
              }}
              animate={{
                y: "100vh",
                x: `calc(${Math.random() * 100}vw + ${Math.random() * 50 - 25}px)`,
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
