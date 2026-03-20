import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Bento-Glow AI | Transform Customer Interactions",
  description:
    "Next-generation AI-powered customer interaction platform with a stunning bento layout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Syne:wght@400..800&family=Inter:wght@100..900&family=Unbounded:wght@400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div className="scanline-overlay" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
