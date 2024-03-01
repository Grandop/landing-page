import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Search } from "@/components/Search";

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["400", "700"] 
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}
      </body>
    </html>
  );
}
