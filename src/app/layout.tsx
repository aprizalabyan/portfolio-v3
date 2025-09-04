import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "primeicons/primeicons.css";
import Pointer from "@/components/pointer"
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aprizalabyan.github.io"),
  title: "Aprizal Abyan | Portfolio",
  description: "Explore my projects, skills, and professional experience in web development.",
  icons: "logo-icon.png",
  keywords: [
    "Aprizal Abyan",
    "Muhammad Aprizal Abyan",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
  ],
  authors: [{ name: "Aprizal Abyan" }],
  creator: "Aprizal Abyan",
  publisher: "Aprizal Abyan",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aprizal Abyan | Portfolio",
    description:
      "Discover the work of Aprizal Abyan — Web Developer specializing in Vue/React and modern web technologies.",
    url: "/",
    siteName: "Aprizal Abyan",
    images: ["/logo-icon.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aprizal Abyan | Portfolio",
    description:
      "Explore projects and experiences by Aprizal Abyan, Web Developer.",
    images: ["/logo-icon.png"],
    creator: "@aprzla_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aprizal Abyan",
              url: "https://aprizalabyan.github.io",
              jobTitle: "Web Developer",
              sameAs: [
                "https://github.com/aprizalabyan",
                "https://www.linkedin.com/in/muhammad-aprizal-abyan-598012268/"
              ]
            }),
          }}
        />
      </Head>
      <body className={inter.className}>
        <Pointer />
        {children}
      </body>
    </html>
  );
}
