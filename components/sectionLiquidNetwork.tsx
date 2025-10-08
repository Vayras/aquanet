import Image from "next/image";

export default function SectionLiquidNetwork() {
  return (
    <section className="section-centered" data-animate-slide-up-on-intersect-frame>
      <div className="section-content">
        <div className="section-text" data-animate-slide-up-on-intersect>
          <h3 className="section-title">
            THE LIQUID NETWORK
          </h3>
          <p className="text-subtitle font-semi-bold">
            Liquid is a sidechain Layer 2 solution that unlocks faster settlement for Bitcoin, confidential transactions,
            and the possibility to issue digital assets such as stablecoins or financial instruments without the need for a
            native token.
          </p>
        </div>

        <div className="section-media" data-animate-slide-up-on-intersect>
          <Image
            className="main-image"
            src="/assets/images/liquid-network-map.png"
            alt="Map of the Liquid Network"
            width={1200}
            height={600}
          />
        </div>
      </div>
      <div className="section-background-container"></div>
    </section>
  );
}
