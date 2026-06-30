import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://bhooswarganmit.shop"),

  title: {
    default: "Bhooswarga",
    template: "%s | Bhooswarga",
  },

  description:
    "Bhooswarga is a modern platform for showcasing fresh agricultural products, sustainable farming, and a seamless online shopping experience.",

  keywords: [
    "Bhooswarga",
    "Agriculture",
    "Organic Products",
    "Fresh Produce",
    "Sustainable Farming",
    "Farm Marketplace",
    "Vegetables",
    "Fruits",
    "Farm Fresh",
    "India",
  ],

  authors: [{ name: "Navdeep C" }],
  creator: "Navdeep C",
  publisher: "Bhooswarga",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://bhooswarganmit.shop",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bhooswarganmit.shop",
    title: "Bhooswarga",
    description:
      "Fresh agricultural products with a focus on sustainable farming and a premium online shopping experience.",
    siteName: "Bhooswarga",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Bhooswarga",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bhooswarga",
    description:
      "Fresh agricultural products with a focus on sustainable farming.",
    images: ["/opengraph-image.png"],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}