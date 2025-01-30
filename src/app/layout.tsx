import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "primeicons/primeicons.css";

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
        {children}
      </body>
    </html>
  );
}
