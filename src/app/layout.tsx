import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Premium local body sans font
const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Variable.ttf",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-VariableItalic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

// Technical industrial heading font
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

// Inter — used for logo wordmark (semibold + bold)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#111827",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "EPCX | Industrial Workforce & Site Operations Intelligence Platform",
  description: "Enterprise-grade operational ERP for EPC contractors, oil & gas fabrication, and heavy workforce environments. Real-time site attendance, contractor reconciliation, and salary audit tracking.",
  keywords: [
    "EPCX", 
    "Industrial Workforce Management", 
    "EPC Contractors Software", 
    "Oil and Gas Operations", 
    "Site Attendance Tracking", 
    "Contractor Salary Audits", 
    "Shutdown Operations ERP", 
    "Industrial Command Center"
  ],
  authors: [{ name: "EPCX Operations" }],
  openGraph: {
    title: "EPCX | Industrial Workforce & Site Operations Intelligence",
    description: "Centrally manage heavy industry site operations, workforce attendance, and contractor transparency.",
    type: "website",
    locale: "en_US",
    siteName: "EPCX",
  },
  twitter: {
    card: "summary_large_image",
    title: "EPCX | Industrial Workforce Operations Intelligence",
    description: "Centrally manage heavy industry site operations, workforce attendance, and contractor transparency.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${satoshi.variable} ${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
