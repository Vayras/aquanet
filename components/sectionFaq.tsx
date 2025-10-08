"use client";

import { useState } from "react";
import Image from "next/image";

export default function SectionFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Are there limits on the amount of funds I can send or receive with AQUA?",
      answer: "AQUA is non-custodial, so there are no restrictions on the amount you can send or receive. The only exception is USDt transfers via Tron or Ethereum, which depend on SideShift's liquidity."
    },
    {
      question: "Are AQUA transactions RBF-enabled, and how can I adjust the fees if needed?",
      answer: "Yes. AQUA supports Replace-by-Fee (RBF). If a transaction is stuck due to low fees, you can increase the fee using the RBF option in the app to speed up confirmation."
    },
    {
      question: "My Bitcoin purchase in AQUA was declined or is missing.",
      answer: "Check Restrictions. Bitcoin purchases are handled by third-party providers, which may have country-specific restrictions or KYC requirements. If your payment went through but you didn't receive Bitcoin, contact the provider directly."
    },
    {
      question: "Does AQUA collect any data from its users?",
      answer: (
        <>
          <p>AQUA doesn't collect personal data or transaction logs. Data might only be shared when using third-party services, such as customer support through Zendesk.</p>
          <p>For more information about AQUA's commitment to privacy, always check out the most recent version of our Privacy Policy.</p>
        </>
      )
    },
    {
      question: "How does AQUA store my seed phrase?",
      answer: (
        <>
          <p>AQUA is a non-custodial Bitcoin and Liquid wallet, therefore it is the user's sole responsibility to safeguard access to the funds and the device on which they install AQUA.</p>
          <p>AQUA doesn't store or access seed phrases. They are securely saved on your device using Keychain (iOS) or EncryptedSharedPreferences (Android). Users are fully responsible for safeguarding their recovery phrases.</p>
        </>
      )
    },
    {
      question: "How do I contact AQUA?",
      answer: (
        <p>
          Visit our{" "}
          <a href="https://jan3.zendesk.com/hc/en-us" target="_blank" rel="noopener noreferrer">
            Zendesk Support Portal
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="aqua-faq-link-icon"
                height="15"
                width="15"
                viewBox="0 0 512 512"
              >
                <path
                  d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"
                />
              </svg>
            </span>
          </a>
        </p>
      )
    }
  ];

  return (
    <section className="section-faq" id="faq" data-animate-slide-up-on-intersect-frame>
      <div className="section-content">
        <h2 className="section-title" data-animate-slide-up-on-intersect>
          FAQ
        </h2>

        <div className="aqua-faqs" data-animate-slide-up-on-intersect>
          {faqs.map((faq, index) => (
            <article key={index} className={`aqua-faq ${openFaq === index ? 'active' : ''}`}>
              <div className="aqua-faq-question" onClick={() => toggleFaq(index)}>
                <span>
                  <h5>{faq.question}</h5>
                </span>
                <Image
                  src="/assets/images/icons/up_chevron.svg"
                  alt="selector arrow up"
                  className="aqua-faq-selector selector-up"
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/images/icons/down_chevron.svg"
                  alt="selector arrow down"
                  className="aqua-faq-selector selector-down"
                  width={24}
                  height={24}
                />
              </div>
              <div className="aqua-faq-answer">
                {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="section-background-container"></div>
    </section>
  );
}
