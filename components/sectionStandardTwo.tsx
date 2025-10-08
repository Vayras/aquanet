"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionStandardTwo() {
  const scrollToNewsletterAndFocus = () => {
    // Add your newsletter scroll logic here
    console.log("Scroll to newsletter");
  };

  return (
    <section className="section-standard primary-inverse with-video-bg">
      <div className="section-content">
        <motion.div
          className="section-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="section-title">
            BE YOUR OWN BANK WITH AQUA
          </h3>
          <p className="text-subtitle font-semi-bold">
            AQUA's built-in Marketplace allows you to buy Bitcoin directly into self custody in many regions.  Prepaid Visa Dolphin Cards are on their way as well as peer-to-peer financial services like lending, borrowing, and bill-pay.  Everything you need in one app!
          </p>
          <button onClick={scrollToNewsletterAndFocus}>
            Get Notified!
          </button>
        </motion.div>
        <motion.div
          className="section-media"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image
            className="main-image limited-width"
            src="/assets/images/two-aqua-debit-cards.png"
            alt="Two AQUA debit cards"
            style={{ maxWidth: '22.375rem' }}
            width={358}
            height={400}
          />
        </motion.div>
      </div>
      <div className="section-background-container">
        <video autoPlay muted loop className="section-background-media">
          <source src="/assets/videos/underwater-aqua-blue-website-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
