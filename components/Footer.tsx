"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/app/data/content";

export function Footer() {
  return (
    <footer className="bg-olive text-white py-12 px-4 relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="w-12 h-12 mx-auto mb-6 opacity-80">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-4-12h8" />
            </svg>
          </div>
          <p className="font-heading text-xl md:text-2xl italic text-gold-light mb-6">
            "May the Lord bless this union with love, faith, and everlasting joy."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <h3 className="font-cursive text-3xl md:text-4xl mb-4">
            {weddingData.groom} & {weddingData.bride}
          </h3>
          <p className="font-body text-sm text-white/60 mb-6 uppercase tracking-widest">
            We look forward to celebrating this blessed day with you.
          </p>

          <a
            href="https://wa.me/919645851927?text=Hi%2C%20I%20saw%20the%20Alan%20%26%20Benitta%20wedding%20invitation%20website.%20I%20would%20like%20a%20similar%20invitation%20website."
            target="_blank"
            rel="noreferrer"
            className="inline-block mb-4 px-6 py-2 rounded-full border border-gold/70 text-gold-light hover:bg-gold hover:text-olive transition-colors text-xs uppercase tracking-widest font-medium"
          >
            Create an Invitation Website
          </a>
        </motion.div>

        <div className="border-t border-white/10 pt-8 mt-8 text-xs text-white/40 flex flex-col md:flex-row justify-center items-center gap-2">
          <span>&copy; {new Date().getFullYear()} {weddingData.groom} & {weddingData.bride}.</span>
          <span>Made with love.</span>
        </div>
      </div>
      
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
    </footer>
  );
}
