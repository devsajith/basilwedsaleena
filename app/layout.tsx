import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://basilwedsaleena.vercel.app'),
  title: "Basil & Aleena | Wedding Invitation",
  description: "Join us in celebrating the wedding of Basil & Aleena on Monday, September 7, 2026 at Mar Ignatous Noorono Church, 14th Mile, Adimali.",
  openGraph: {
    title: "Basil & Aleena | Wedding Invitation",
    description: "Join us in celebrating the wedding of Basil & Aleena on Monday, September 7, 2026 at Mar Ignatous Noorono Church, 14th Mile, Adimali.",
    images: [{ url: "/images/bridegroom.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basil & Aleena | Wedding Invitation",
    description: "Join us in celebrating the wedding of Basil & Aleena on Monday, September 7, 2026 at Mar Ignatous Noorono Church, 14th Mile, Adimali.",
    images: ["/images/bridegroom.jpg"],
  },
  icons: [
    { rel: "icon", type: "image/svg+xml", url: "/christian-cross-wedding.svg" },
    { rel: "shortcut icon", url: "/christian-cross-wedding.svg" },
    { rel: "apple-touch-icon", url: "/christian-cross-wedding.svg" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
