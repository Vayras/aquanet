"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionStandardThree() {
  const handleAquaDownloadModal = () => {
    // Add your download modal logic here
    console.log("Open download modal");
    return false;
  };

  return (
    <section className="section-standard image-first">
      <div className="section-content">
        <motion.div
          className="section-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="section-title">
            FINANCIAL FREEDOM
          </h3>
          <p className="text-subtitle font-semi-bold">
            The first Bitcoin and Liquid wallet with built-in USDt support. Spend cash, save in BTC, protect your privacy, beat inflation, and secure your future, all on a Bitcoin standard. AQUA makes freedom simple.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              return handleAquaDownloadModal();
            }}
            target="_blank"
            className="aqua-button aqua-download-button"
            data-aqua-modal
          >
            Get The App →
          </a>
        </motion.div>
        <motion.div
          className="section-media"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image
            className="main-image limited-width-phone-image"
            src="/assets/images/aqua-app-swap-screen.png"
            alt="Mobile device showing the AQUA app swap screen"
            width={500}
            height={900}
          />
        </motion.div>
        <div className="section-background-container"></div>
      </div>
    </section>
  );
}
