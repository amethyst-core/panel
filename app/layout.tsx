import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/index.scss";

import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Amethyst",
  description: "Open Source Minecraft Server Management Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-svh">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster theme="light" position="bottom-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
