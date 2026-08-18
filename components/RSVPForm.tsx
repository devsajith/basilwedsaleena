"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { weddingData } from "@/app/data/content";

export function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    attendance: "attending",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const targetPhone = weddingData.contacts[0].phone.replace(/[^0-9]/g, ""); // Send to groom's family by default
    const text = `*RSVP for ${weddingData.groom} & ${weddingData.bride}'s Wedding*%0A%0A*Name:* ${formData.name}%0A*Attending:* ${formData.attendance === "attending" ? "Yes" : "No"}%0A*Number of Guests:* ${formData.guests}%0A*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/${targetPhone}?text=${text}`, "_blank");
  };

  return (
    <section className="py-20 px-4 bg-blush/20 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-champagne"
        >
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl text-olive mb-4">Are you attending?</h2>
            <p className="font-body text-text-muted">Please confirm your presence by May 10, 2026</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block font-heading text-olive">Full Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-champagne bg-ivory/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow font-body text-text-main"
                placeholder="John & Jane Doe"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="attendance" className="block font-heading text-olive">Attendance</label>
                <select
                  id="attendance"
                  value={formData.attendance}
                  onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-champagne bg-ivory/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow font-body text-text-main"
                >
                  <option value="attending">Joyfully Accept</option>
                  <option value="not_attending">Regretfully Decline</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="guests" className="block font-heading text-olive">Number of Guests</label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-champagne bg-ivory/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow font-body text-text-main"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block font-heading text-olive">Wishes for the Couple (Optional)</label>
              <textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-champagne bg-ivory/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow font-body text-text-main resize-none"
                placeholder="Looking forward to celebrating with you!"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-olive text-white rounded-xl font-heading text-lg tracking-wide hover:bg-olive/90 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send RSVP via WhatsApp
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
