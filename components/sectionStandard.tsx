"use client"
import { useState } from "react";
import Image from "next/image";
import DownloadModal from "./downloadModal";

export default function SectionStandard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <DownloadModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <section className="section-standard aqua-hero primary-inverse with-video-bg">
        <div className="section-content">
          <div className="section-text">
            <h3 className="section-title">
              THE BITCOIN SUPERAPP
            </h3>
            <p className="text-subtitle font-semi-bold">
              AQUA is your global passport to financial inclusion, designed for Latin America and embraced by Bitcoiners everywhere.
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleOpenModal();
              }}
              className="aqua-button aqua-download-button"
              data-aqua-modal
            >
              Get The App →
            </a>
        </div>
        <div className="section-media">
          <Image
            className="main-image limited-width-phone-image"
            src="/assets/images/aqua-hero-phone.png"
            alt="AQUA app home screen"
            width={500}
            height={900}
          />
        </div>
      </div>
      <div className="section-background-container">
        <video autoPlay muted loop className="section-background-media">
          <source src="/assets/videos/underwater-aqua-blue-website-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
    </>
  );
}
