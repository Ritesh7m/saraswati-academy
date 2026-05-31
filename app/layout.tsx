import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saraswati Academy | Premium Coaching in Saki Naka, Mumbai",
  description: "Empowering Students from Class 5th to 10th with quality education, personal attention, and strong academic guidance.",
  keywords: "coaching classes, Saki Naka, Class 5 to 10, tuition, Mumbai education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer /> 
      </body>
    </html>
  );
}