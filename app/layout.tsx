import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

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

// Additional styles
import "./styles/download.css";
import "./styles/gallery.css";
import "./styles/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AQUA Wallet",
  description: "AQUA wallet website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
