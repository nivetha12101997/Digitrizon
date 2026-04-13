import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./components/ClientWrapper"; // Import the new wrapper
// import DevToolsBlocker from "./components/DevToolsBlocker"; // Import the DevTools blocker
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

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
  metadataBase: new URL("https://www.digitrizon.com"),

  title: {
    default: "DIGITRIZON | Web, Mobile, SaaS & eCommerce Development",
    template: "%s | DIGITRIZON",
  },

  description:
    "DIGITRIZON builds web, mobile, SaaS, and eCommerce solutions with digital growth strategies to help businesses scale faster.",

  keywords: [
    "digital product development company",
    "web development company",
    "mobile app development company",
    "SaaS development company",
    "eCommerce development company",
    "Next.js development company",
    "React development company",
    "React Native development company",
    "custom software development",
    "digital growth solutions",
    "startup product development",
  ],

  alternates: {
    canonical: "https://www.digitrizon.com/",
  },

  openGraph: {
    title: "DIGITRIZON | Web, Mobile, SaaS & eCommerce Development",
    description:
      "Build scalable web, mobile, SaaS, and eCommerce solutions with digital growth strategies.",
    url: "https://www.digitrizon.com",
    siteName: "DIGITRIZON",
    images: [
      {
        url: "/images/OG_Logo.png",
        width: 1200,
        height: 630,
        alt: "DIGITRIZON - Digital Product Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DIGITRIZON | Web, Mobile, SaaS & eCommerce Development",
    description:
      "Build scalable web, mobile, SaaS, and eCommerce solutions with DIGITRIZON.",
    images: ["/images/FooterLogo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "DIGITRIZON",
        url: "https://www.digitrizon.com",
        logo: "https://www.digitrizon.com/images/LogoDigitrizon.jpg",
        sameAs: [
          "https://www.linkedin.com/company/digitrizon"
        ]
      },
      {
        "@type": "WebSite",
        name: "DIGITRIZON",
        url: "https://www.digitrizon.com",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.digitrizon.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };
  return (
    <html lang="en">
      {/* ✅ ADD HERE */}
      <head>
        {/* <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon.ico" media="(prefers-color-scheme: dark)" /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-Y5XN3VKH0Q"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Y5XN3VKH0Q');
    `}
  </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
        {/* <DevToolsBlocker /> */}
        <GoogleAnalytics gaId="G-Y5XN3VKH0Q" />
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}