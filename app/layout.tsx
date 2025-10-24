import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import I18nProvider from "@/components/I18nProvider";

// Base styles
import "./styles/bare.css";
import "./styles/design-system.css";

// Typography and fonts
import "./styles/fonts.css";
import "./styles/typography.css";

// Theme
import "./styles/themes.css";

// Component styles
import "./styles/components/section.css";
import "./styles/components/button.css";
import "./styles/components/cards.css";
import "./styles/components/header.css";
import "./styles/components/footer.css";
import "./styles/components/modals.css";
import "./styles/components/language-chooser.css";

// Additional styles
import "./styles/download.css";
import "./styles/gallery.css";
import "./styles/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AQUA Wallet",
  description: "AQUA wallet website",
  openGraph: {
    title: "AQUA Wallet",
    description: "AQUA wallet website",
    images: [
      {
        url: "/assets/images/aqua-social-card-2.jpg",
        width: 1200,
        height: 630,
        alt: "AQUA Wallet",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AQUA Wallet",
    description: "AQUA wallet website",
    images: ["/assets/images/aqua-social-card-2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nProvider>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
        <Script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=b9f7ee6f-b831-4fe6-b298-a3e0d229f2bd"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
