"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingData } from "@/app/data/content";
import { X } from "lucide-react";

// For the demo, we use Unsplash images if local ones aren't available
const getImageUrl = (src: string, index: number) => {
  if (src.startsWith('/images/')) {
    // Return high quality unsplash images for demo purposes
    const unsplashIds = [
      "1519741497673-1f2e0c20a9a4", // wedding couple
      "1511285560929-80b456fea0bc", // rings
      "1465495976277-441829e00196", // wedding decor
      "1515934751435-cda96766023d", // wedding hands
      "1606800052052-a08af7148866", // flowers
      "1511285560929-80b456fea0bc"  // backup
    ];
    return `https://images.unsplash.com/photo-${unsplashIds[index % unsplashIds.length]}?q=80&w=800&auto=format&fit=crop`;
  }
  return src;
};

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-olive mb-4">Captured Moments</h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {weddingData.gallery.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setSelectedImage(getImageUrl(src, index))}
            >
              <img
                src={getImageUrl(src, index)}
                alt={`Gallery image ${index + 1}`}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-olive/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
