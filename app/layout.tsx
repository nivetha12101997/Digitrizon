import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./components/ClientWrapper"; // Import the new wrapper
import DevToolsBlocker from "./components/DevToolsBlocker"; // Import the DevTools blocker
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata stays here in the Server Component!
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://www.digitrizon.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "DIGITRIZON | Scalable Digital Product Development Company",
    template: "%s | DIGITRIZON", 
  },
  description: "DIGITRIZON builds scalable mobile apps, web platforms, SaaS products, and e-commerce solutions with performance-driven digital growth strategies for modern businesses.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/images/Digitrizon_Favi.png',
    apple: '/images/Digitrizon_Favi.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
        {/* <DevToolsBlocker /> */}
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}