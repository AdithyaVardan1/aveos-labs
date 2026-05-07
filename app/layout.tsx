import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aveos Labs — The Edge is Engineered.",
  description: "We build AI systems, products, and MVPs that give businesses an unfair advantage.",
  openGraph: {
    title: "Aveos Labs — The Edge is Engineered.",
    description: "We build AI systems, products, and MVPs that give businesses an unfair advantage.",
    url: "https://aveoslabs.com",
    siteName: "Aveos Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aveoslabs",
    creator: "@aveoslabs",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
