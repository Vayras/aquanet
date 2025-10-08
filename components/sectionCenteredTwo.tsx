import Image from "next/image";

export default function SectionCenteredTwo() {
  return (
    <section className="section-centered primary-inverse with-video-bg" data-animate-slide-up-on-intersect-frame>
      <div className="section-content">
        <div className="section-text" data-animate-slide-up-on-intersect>
          <h3 className="section-title">
            PRIVATE AND CHEAP USDT TRANSFERS
          </h3>
          <p className="text-subtitle font-semi-bold">
            Sending digital dollars around the world is now cheaper than ever thanks to Tether USDt and the Liquid Network. Don't pay more fees than you need to!
          </p>
        </div>
        <div className="section-media" data-animate-slide-up-on-intersect>
          <div className="fee-comparison-cards">
            <article className="fee-comparison-card best-fee">
              <Image className="fee-comparison-logo" src="/assets/images/logos/liquid.svg" alt="Liquid logo" width={100} height={100} />
              <div className="fee-comparison-info">
                <p>
                  Liquid
                </p>
                <p>
                  $100.00
                </p>
              </div>
              <div className="fee-comparison-amount">
                <p>
                  Fee $0.02
                </p>
              </div>
            </article>
            <div className="middle-fee-comparison-cards">
              <article className="fee-comparison-card">
                <Image
                  className="fee-comparison-logo"
                  src="/assets/images/logos/western-union.svg"
                  alt="Western Union logo"
                  width={100}
                  height={100}
                />
                <div className="fee-comparison-info">
                  <p>
                    Western Union
                  </p>
                  <p>
                    $100.00
                  </p>
                </div>
                <div className="fee-comparison-amount">
                  <p>
                    Fee $8.99
                  </p>
                </div>
              </article>
              <article className="fee-comparison-card">
                <Image className="fee-comparison-logo" src="/assets/images/logos/ethereum.svg" alt="Ethereum logo" width={100} height={100} />
                <div className="fee-comparison-info">
                  <p>
                    Ethereum
                  </p>
                  <p>
                    $100.00
                  </p>
                </div>
                <div className="fee-comparison-amount">
                  <p>
                    Fee $8.00
                  </p>
                </div>
              </article>
            </div>

            <div className="last-fee-comparison-card">
              <article className="fee-comparison-card">
                <Image className="fee-comparison-logo" src="/assets/images/logos/tron.svg" alt="Tron logo" width={100} height={100} />
                <div className="fee-comparison-info">
                  <p>
                    Tron
                  </p>
                  <p>
                    $100.00
                  </p>
                </div>
                <div className="fee-comparison-amount">
                  <p>
                    Fee $2.00
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className="section-background-container">
        <video autoPlay muted loop className="section-background-media">
          <source src="/assets/videos/underwater-aqua-blue-website-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
