"use client";

import { Suspense } from "react";
import Command from "@/components/main/command";
import { Header } from "./_components/header";
import { useTheme } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-dvh bg-secondary-foreground">
      <NextTopLoader
        color={theme === "dark" ? "#fafafa" : "#000000"}
        showSpinner={false}
        height={2}
      />
      <Header />
      <div>
        {children}
        <Toaster position="bottom-center" />
      </div>
      <Command />
    </div>
  );
}
