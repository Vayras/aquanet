"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleAquaDownloadModal = () => {
    console.log("Open download modal");
    return false;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile Header */}
      <header id="aqua-mobile-header" className={isScrolled ? "scrolled" : ""}>
        <div className="aqua-header-container">
          <a className="aqua-header-logo-link" href="https://aquawallet.io/">
            <Image
              src="/assets/images/logos/aqua-logo.svg"
              className="aqua-logo mobile-modal-off"
              alt="AQUA"
              width={120}
              height={40}
            />
            <Image
              src="/assets/images/logos/aqua-logo-white.svg"
              className="aqua-logo mobile-modal-on"
              alt="AQUA"
              width={120}
              height={40}
            />
          </a>
          <div className="aqua-header-controls aqua-header-mobile-controls">
            <div
              className="aqua-header-burger"
              id="aqua-header-burger"
              onClick={toggleMobileMenu}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Header */}
      <header id="aqua-desktop-header" className={isScrolled ? "scrolled" : ""}>
        <div className="aqua-header-container">
          <a className="aqua-header-logo-link" href="https://aquawallet.io/">
            <Image
              src="/assets/images/logos/aqua-logo.svg"
              className="aqua-logo"
              alt="AQUA"
              width={120}
              height={40}
            />
          </a>
          <div className="aqua-header-nav">
            <div className="aqua-navigation">
              <ul className="nav">
                <li className="nav-home nav-current">
                  <a href="https://aquawallet.io/">Home</a>
                </li>
                <li className="nav-features">
                  <a href="https://aquawallet.io/features">Features</a>
                </li>
                <li className="nav-contact-us">
                  <a href="https://aquawallet.io/contact-us">Contact Us</a>
                </li>
                <li className="nav-faq">
                  <a href="https://aquawallet.io/#faq">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="aqua-header-controls">
            <div className="aqua-header-button">
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
                Download AQUA
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
