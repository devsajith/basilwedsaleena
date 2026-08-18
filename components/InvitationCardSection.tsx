"use client";

import { motion } from "framer-motion";

export function InvitationCardSection() {
  return (
    <section className="py-20 px-4 bg-ivory/50 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <h2 className="font-heading text-4xl text-olive mb-3">Formal Invitation</h2>
          <p className="font-body text-text-muted">Save the date &amp; join us in prayer</p>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-lg mx-auto bg-white p-4 md:p-6 rounded-3xl shadow-xl border border-champagne"
        >
          <img
            src="/images/invitation_card.jpg"
            alt="Basil and Aleena Formal Invitation Card"
            className="w-full h-auto rounded-2xl shadow-inner border border-gold/20"
          />
        </motion.div>
      </div>
    </section>
  );
}
