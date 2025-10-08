"use client";

import Image from "next/image";

export default function SectionStandardThree() {
  const handleAquaDownloadModal = () => {
    // Add your download modal logic here
    console.log("Open download modal");
    return false;
  };

  return (
    <section className="section-standard image-first" data-animate-slide-up-on-intersect-frame>
      <div className="section-content">
        <div className="section-text" data-animate-slide-up-on-intersect>
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
        </div>
        <div className="section-media" data-animate-slide-up-on-intersect>
          <Image
            className="main-image limited-width-phone-image"
            src="/assets/images/aqua-app-swap-screen.png"
            alt="Mobile device showing the AQUA app swap screen"
            width={500}
            height={900}
          />
        </div>
        <div className="section-background-container"></div>
      </div>
    </section>
  );
}
