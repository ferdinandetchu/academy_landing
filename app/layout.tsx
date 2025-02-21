import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppToolbar from "./components/toolbar/AppToolbar";
import AppFooter from "./components/footer/footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PaveWay Academy",
  description: "Complete Website Development Course. Welcome to the most captivating, finger-flying, addictive way to learn to code",
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
        <AppToolbar />
        {children}
        <AppFooter />
        <Script src="https://js-na1.hs-scripts.com/49371839.js" />
      </body>
    </html>
  );
}
