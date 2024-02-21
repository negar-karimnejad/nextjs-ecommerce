import Footer from "@/components/Footer";
import Navbar from "@/components/Navabr/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProvider from "./SessionProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flowmazon",
  description: "We make your wallet cry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          <main className="p-4 max-w-7xl min-w-[300px] mx-auto">
            {children}
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
