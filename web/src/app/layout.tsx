import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ItemDonation",
  description: "ItemDonation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en dark-model">
      <>
        {/* <ScrollRestoration> */}
        <body className={inter.className}>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </body>
      </>
    </html>
  );
}
