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
export const metadata: Metadata = {
  title: "Digitrizon | Empowering Digital Growth",
  description: "Next-gen digital solutions for your business.",
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