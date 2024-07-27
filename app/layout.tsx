import "./globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme-provider";

import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Amethyst",
  description: "Open Source Minecraft Server Management Solution",
};

const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/Helvetica-Now-Var.ttf",
    },
  ],
  variable: "--font-helvetica",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${helvetica.variable} font-sans`}>
      <body className="min-h-svh">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
