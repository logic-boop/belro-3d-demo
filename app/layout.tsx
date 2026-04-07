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

// Updated metadata for the BELRO brand for Zaid's demo
export const metadata: Metadata = {
  title: "BELRO | Design Intelligence Lab",
  description: "A high-performance 3D interactive studio experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body 
        className="min-h-full bg-[#000814] text-white selection:bg-blue-500/30"
        /* This attribute prevents the 'cz-shortcut-listen' or 'dark-mode' 
           browser extension errors seen in your UI console.
        */
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}