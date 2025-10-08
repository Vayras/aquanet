"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionEffortlessSwaps() {
  const handleAquaDownloadModal = () => {
    console.log("Open download modal");
    return false;
  };

  return (
    <section className="section-standard aqua-hero primary-inverse with-video-bg">
      <div className="section-content">
        <motion.div
          className="section-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="section-title">
            EFFORTLESS SWAPS
          </h3>
          <p className="text-subtitle font-semi-bold">
            AQUA is the only Bitcoin wallet with easy on-the-fly swaps, allowing users to put Bitcoin on Layer 2 for quick
            access to Lightning payments or stablecoins.
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
      </div>
      <div className="section-background-container">
        <video autoPlay muted loop className="section-background-media">
          <source src="/assets/videos/underwater-aqua-blue-website-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
