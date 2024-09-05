import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Nav from './components/nav'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Buddy",
  description: "Ask AI anything on your mind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <Nav />
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
    </html>
  );
}
