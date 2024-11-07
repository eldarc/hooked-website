import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const canelaRegular = localFont({
  src: "./fonts/Canela-Regular.woff",
  variable: "--font-canela-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hooked - Immersive and social ebook reading",
  description: "Immersive and social ebook reading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${canelaRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
