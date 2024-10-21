import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Toolkit",
  description: "Contains a bunch of tools for classical AI Tasks",
};

const notoSans = Noto_Sans({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
         ${notoSans.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}
