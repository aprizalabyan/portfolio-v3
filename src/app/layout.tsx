import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "primeicons/primeicons.css";
import Pointer from "@/components/pointer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aprizal Abyan",
  description: "Aprizal Abyan Portfolio",
  icons: "logo-icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Pointer />
        {children}
      </body>
    </html>
  );
}
