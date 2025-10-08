"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Add your newsletter form submission logic here
    console.log("Newsletter signup:", email);

    // Simulate submission
    setEmail("");
  };

  const currentYear = new Date().getFullYear();

  return (
    <section className="section-footer primary-inverse">
      <div className="section-content">
        <div>
          <Image
            src="/assets/images/logos/aqua-logo-white.svg"
            className="aqua-logo"
            alt="AQUA"
            width={120}
            height={40}
          />
          <p className="footer-description">
            AQUA is your global passport to financial inclusion, designed for Latin America and embraced by Bitcoiners everywhere.
          </p>
        </div>

        <div>
          <h5 className="subscribe-label" id="newsletter-subscribe-label">
            Subscribe to the JAN3 Newsletter
          </h5>
          <form
            className="newsletter-signup"
            id="jan3-newsletter-form"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="g-recaptcha aqua-button-accent aqua-button-with-icon"
              data-sitekey="6LftnDcpAAAAAO72bjMLnIUvMShe5auTltxUMjCv"
              data-callback="jan3NewsletterFormSubmit"
              data-action="submit"
            >
              <Image
                src="/assets/images/icons/checkmark.svg"
                className="success-icon"
                alt="Checkmark icon"
                width={20}
                height={20}
              />
              <Image
                src="/assets/images/icons/loading.svg"
                className="loading-icon"
                alt="Loading icon"
                width={20}
                height={20}
              />
              <span className="newsletter-subscribe-button-label">Subscribe</span>
            </button>
          </form>
          <small className="required-recaptcha-notice">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy">Privacy Policy</a>
            {" "}and{" "}
            <a href="https://policies.google.com/terms">Terms of Service</a>
            {" "}apply.
          </small>

          <div className="footer-links mobile-footer-links">
            <div className="footer-link-group">
              <div className="aqua-navigation">
                <ul className="nav">
                  <li className="nav-home"><a href="https://aquawallet.io/">Home</a></li>
                  <li className="nav-features"><a href="https://aquawallet.io/features">Features</a></li>
                  <li className="nav-contactus"><a href="https://aquawallet.io/contactus">Contact Us</a></li>
                  <li className="nav-faq"><a href="https://aquawallet.io/#faq">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-link-group">
              <div className="aqua-navigation">
                 <ul className="nav">
                  <li className="nav-privacy-policy"><a href="https://aqua.net/privacy-web/" data-translate-key="Privacy Policy">Privacy Policy</a></li>
                  <li className="nav-terms-and-conditions"><a href="https://aqua.net/terms-web/" data-translate-key="Terms and Conditions">Terms and Conditions</a></li>
              </ul>
              </div>
            </div>
            <div className="footer-link-group">
              <ul>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100095180887605" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 10V14H10V21H14V14H17L18 10H14V8C14 7.73478 14.1054 7.48043 14.2929 7.29289C14.4804 7.10536 14.7348 7 15 7H18V3H15C13.6739 3 12.4021 3.52678 11.4645 4.46447C10.5268 5.40215 10 6.67392 10 8V10H7Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/AquaBitcoin" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask
                        id="mask0_2649_48219"
                        style={{maskType: "luminance"}}
                        maskUnits="userSpaceOnUse"
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                      >
                        <path d="M3 3H21V21H3V3Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_2649_48219)">
                        <path
                          d="M17.175 3.84351H19.9354L13.9054 10.7529L21 20.1566H15.4457L11.0923 14.4545L6.11657 20.1566H3.35357L9.80271 12.7638L3 3.84479H8.69571L12.6249 9.05579L17.175 3.84351ZM16.2043 18.5006H17.7343L7.86 5.41336H6.21943L16.2043 18.5006Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/aquabitcoin" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H16C17.0609 4 18.0783 4.42143 18.8284 5.17157C19.5786 5.92172 20 6.93913 20 8V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20H8C6.93913 20 5.92172 19.5786 5.17157 18.8284C4.42143 18.0783 4 17.0609 4 16V8Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 7.5V7.51M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://github.com/AquaWallet/aqua-wallet" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 2C10.6868 2 9.38642 2.26508 8.17317 2.7801C6.95991 3.29513 5.85752 4.05001 4.92893 5.00165C3.05357 6.92357 2 9.53026 2 12.2483C2 16.778 4.87 20.6211 8.84 21.9841C9.34 22.0661 9.5 21.7484 9.5 21.4717V19.7398C6.73 20.3547 6.14 18.3665 6.14 18.3665C5.68 17.1777 5.03 16.86 5.03 16.86C4.12 16.2246 5.1 16.2451 5.1 16.2451C6.1 16.3168 6.63 17.3007 6.63 17.3007C7.5 18.8584 8.97 18.3972 9.54 18.1513C9.63 17.4851 9.89 17.0342 10.17 16.778C7.95 16.5218 5.62 15.6404 5.62 11.7359C5.62 10.5983 6 9.6862 6.65 8.95858C6.55 8.70237 6.2 7.63655 6.75 6.25303C6.75 6.25303 7.59 5.97633 9.5 7.29836C10.29 7.07289 11.15 6.96016 12 6.96016C12.85 6.96016 13.71 7.07289 14.5 7.29836C16.41 5.97633 17.25 6.25303 17.25 6.25303C17.8 7.63655 17.45 8.70237 17.35 8.95858C18 9.6862 18.38 10.5983 18.38 11.7359C18.38 15.6507 16.04 16.5116 13.81 16.7678C14.17 17.0855 14.5 17.7106 14.5 18.6637V21.4717C14.5 21.7484 14.66 22.0764 15.17 21.9841C19.14 20.6109 22 16.778 22 12.2483C22 10.9024 21.7413 9.5698 21.2388 8.32643C20.7362 7.08305 19.9997 5.95329 19.0711 5.00165C18.1425 4.05001 17.0401 3.29513 15.8268 2.7801C14.6136 2.26508 13.3132 2 12 2Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/products/jan3-aqua" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 11V16M8 8V8.01M12 16V11M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 16V13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.tiktok.com/@aquabitcoines" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.44 5.82C15.7566 5.03953 15.3799 4.0374 15.38 3H12.29V15.4C12.2667 16.0712 11.9835 16.7071 11.5003 17.1735C11.0171 17.6399 10.3716 17.9004 9.7 17.9C8.28 17.9 7.1 16.74 7.1 15.3C7.1 13.58 8.76 12.29 10.47 12.82V9.66C7.02 9.2 4 11.88 4 15.3C4 18.63 6.76 21 9.69 21C12.83 21 15.38 18.45 15.38 15.3V9.01C16.633 9.90985 18.1374 10.3926 19.68 10.39V7.3C19.68 7.3 17.8 7.39 16.44 5.82Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-link-group aqua-copyright no-bottom-border text-caption">
              © {currentYear} JAN3 LLC. All rights reserved
            </div>
            <div className="footer-link-group no-bottom-border text-body-2">
              <span style={{textDecoration: "underline"}}>
                <a href="https://jan3.com" target="_blank" rel="noopener noreferrer">Built by JAN3</a>
              </span>
            </div>
            <div className="footer-link-group no-bottom-border aqua-copyright text-caption">
              The Dolphin Visa® Card is issued by our partner Financial Institutions, pursuant to a license from Visa.
            </div>
          </div>

          <div className="footer-links desktop-footer-links">
            <div className="footer-row">
              <div className="footer-link-group">
                <div className="aqua-navigation">
                  <ul className="nav">
                    <li className="nav-home"><a href="https://aquawallet.io/">Home</a></li>
                    <li className="nav-features"><a href="https://aquawallet.io/features">Features</a></li>
                    <li className="nav-contactus"><a href="https://aquawallet.io/contactus">Contact Us</a></li>
                    <li className="nav-faq"><a href="https://aquawallet.io/#faq">FAQ</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-link-group">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100095180887605" target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 10V14H10V21H14V14H17L18 10H14V8C14 7.73478 14.1054 7.48043 14.2929 7.29289C14.4804 7.10536 14.7348 7 15 7H18V3H15C13.6739 3 12.4021 3.52678 11.4645 4.46447C10.5268 5.40215 10 6.67392 10 8V10H7Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="https://twitter.com/AquaBitcoin" target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask
                          id="mask0_desktop"
                          style={{maskType: "luminance"}}
                          maskUnits="userSpaceOnUse"
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                        >
                          <path d="M3 3H21V21H3V3Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_desktop)">
                          <path
                            d="M17.175 3.84351H19.9354L13.9054 10.7529L21 20.1566H15.4457L11.0923 14.4545L6.11657 20.1566H3.35357L9.80271 12.7638L3 3.84479H8.69571L12.6249 9.05579L17.175 3.84351ZM16.2043 18.5006H17.7343L7.86 5.41336H6.21943L16.2043 18.5006Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/aquabitcoin" target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H16C17.0609 4 18.0783 4.42143 18.8284 5.17157C19.5786 5.92172 20 6.93913 20 8V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20H8C6.93913 20 5.92172 19.5786 5.17157 18.8284C4.42143 18.0783 4 17.0609 4 16V8Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.5 7.5V7.51M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/AquaWallet/aqua-wallet" target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 2C10.6868 2 9.38642 2.26508 8.17317 2.7801C6.95991 3.29513 5.85752 4.05001 4.92893 5.00165C3.05357 6.92357 2 9.53026 2 12.2483C2 16.778 4.87 20.6211 8.84 21.9841C9.34 22.0661 9.5 21.7484 9.5 21.4717V19.7398C6.73 20.3547 6.14 18.3665 6.14 18.3665C5.68 17.1777 5.03 16.86 5.03 16.86C4.12 16.2246 5.1 16.2451 5.1 16.2451C6.1 16.3168 6.63 17.3007 6.63 17.3007C7.5 18.8584 8.97 18.3972 9.54 18.1513C9.63 17.4851 9.89 17.0342 10.17 16.778C7.95 16.5218 5.62 15.6404 5.62 11.7359C5.62 10.5983 6 9.6862 6.65 8.95858C6.55 8.70237 6.2 7.63655 6.75 6.25303C6.75 6.25303 7.59 5.97633 9.5 7.29836C10.29 7.07289 11.15 6.96016 12 6.96016C12.85 6.96016 13.71 7.07289 14.5 7.29836C16.41 5.97633 17.25 6.25303 17.25 6.25303C17.8 7.63655 17.45 8.70237 17.35 8.95858C18 9.6862 18.38 10.5983 18.38 11.7359C18.38 15.6507 16.04 16.5116 13.81 16.7678C14.17 17.0855 14.5 17.7106 14.5 18.6637V21.4717C14.5 21.7484 14.66 22.0764 15.17 21.9841C19.14 20.6109 22 16.778 22 12.2483C22 10.9024 21.7413 9.5698 21.2388 8.32643C20.7362 7.08305 19.9997 5.95329 19.0711 5.00165C18.1425 4.05001 17.0401 3.29513 15.8268 2.7801C14.6136 2.26508 13.3132 2 12 2Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/products/jan3-aqua" target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8 11V16M8 8V8.01M12 16V11M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 16V13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.tiktok.com/@aquabitcoines" target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.44 5.82C15.7566 5.03953 15.3799 4.0374 15.38 3H12.29V15.4C12.2667 16.0712 11.9835 16.7071 11.5003 17.1735C11.0171 17.6399 10.3716 17.9004 9.7 17.9C8.28 17.9 7.1 16.74 7.1 15.3C7.1 13.58 8.76 12.29 10.47 12.82V9.66C7.02 9.2 4 11.88 4 15.3C4 18.63 6.76 21 9.69 21C12.83 21 15.38 18.45 15.38 15.3V9.01C16.633 9.90985 18.1374 10.3926 19.68 10.39V7.3C19.68 7.3 17.8 7.39 16.44 5.82Z"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-row tablet-column no-bottom-border">
              <div className="footer-link-group">
                <div className="aqua-navigation">
                  <ul className="nav">
                    <li className="nav-privacy-policy"><a href="https://aqua.net/privacy-web/" data-translate-key="Privacy Policy">Privacy Policy</a></li>
                    <li className="nav-terms-and-conditions"><a href="https://aqua.net/terms-web/" data-translate-key="Terms and Conditions">Terms and Conditions</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-link-group">
                <span className="aqua-copyright text-body-2">
                  © {currentYear} JAN3 LLC. All rights reserved
                </span>
              </div>
              <div className="footer-link-group text-body-2">
                <span style={{textDecoration: "underline"}}>
                  <a href="https://jan3.com" target="_blank" rel="noopener noreferrer">Built by JAN3</a>
                </span>
              </div>
            </div>
            <div className="footer-row tablet-column">
              <div className="footer-link-group aqua-copyright text-caption">
                The Dolphin Visa® Card is issued by our partner Financial Institutions, pursuant to a license from Visa.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
