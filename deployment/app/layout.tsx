import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🌱 Garden – A Living GitHub Contribution Garden",
  description:
    "Garden is an open-source project where developers plant digital flowers by submitting messages and blooms. Powered by a public API and Vercel-hosted frontend.",
  metadataBase: new URL("https://gardenofgithub.vercel.app"),
  openGraph: {
    title: "🌱 Garden – A Living GitHub Contribution Garden",
    description:
      "Plant a flower and leave a message. A creative API + frontend experience for open-source developers.",
    url: "https://gardenofgithub.vercel.app",
    siteName: "Garden",
    images: [
      {
        url: "https://github.com/user-attachments/assets/419bec01-612e-4f31-b5d3-de5b7b8251ae",
        width: 1200,
        height: 630,
        alt: "Garden – GitHub Contribution Garden",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garden – A Living GitHub Contribution Garden",
    description:
      "Plant your flower and contribute to a creative GitHub community project!",
    images: [
      "https://github.com/user-attachments/assets/419bec01-612e-4f31-b5d3-de5b7b8251ae",
    ],
    creator: "@myferdoescoding",
  },
  keywords: [
    "GitHub",
    "Open Source",
    "API",
    "Flowers",
    "Vercel",
    "Next.js",
    "Developer Garden",
    "Community Project",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
