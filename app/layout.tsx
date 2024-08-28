import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from './components/nav'
import Footer from "./components/footer";

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
        </body>
    </html>
  );
}
