import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShreeVexa IT Solutions",
  description: "Your trusted IT partner for innovative solutions, reliable service and a brighter digital future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MotionProvider>
          <Navbar />
          <main style={{ minHeight: 'calc(100vh - 80px)' }}>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
