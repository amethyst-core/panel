import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "@next/font/local";

import "./globals.css";

import { Toaster } from "sonner";

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
          defaultTheme="light"
          // enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster theme="light" position="bottom-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
