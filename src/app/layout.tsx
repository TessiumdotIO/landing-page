import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Configure your custom fonts
const neueMachina = localFont({
  src: [
    {
      path: "../fonts/NeueMachina-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/NeueMachina-Ultrabold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-machina",
  display: "swap",
});

const aeonik = localFont({
  src: [
    {
      path: "../fonts/Aeonik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Aeonik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Aeonik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tessium | AI - Edutainment Layer",
  description:
    "Powering the Real User Economy for the Next Phase of Web3 Adoption.",
  openGraph: {
    title: "Tessium | AI - Edutainment Layer",
    description:
      "Powering the Real User Economy for the Next Phase of Web3 Adoption.",
    url: "https://www.tessium.io",
    type: "website",
    images: [
      {
        url: "https://www.tessium.io/logo.png",
        width: 1200,
        height: 630,
        alt: "Tessium Platform Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tessium | AI - Edutainment Layer",
    description:
      "Powering the Real User Economy for the Next Phase of Web3 Adoption.",
    images: ["https://www.tessium.io/logo.png"],
    site: "@Tessium_io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${neueMachina.variable} ${aeonik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
