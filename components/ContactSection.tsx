"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { weddingData } from "@/app/data/content";

export function ContactSection() {
  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-heading text-4xl text-olive mb-4">Contact & Queries</h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {weddingData.contacts.map((contact, index) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-ivory rounded-2xl p-6 w-full md:w-64 border border-champagne text-center hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl text-olive mb-2">{contact.name}</h3>
              <p className="font-body text-sm text-text-muted mb-6 uppercase tracking-wider">{contact.relation}</p>
              
              <a 
                href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full text-olive border border-champagne hover:bg-olive hover:text-white hover:border-olive transition-colors font-medium text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
