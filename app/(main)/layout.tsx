"use client";

import { useEffect, useState } from "react";
import Command from "@/components/main/command";

import { useTheme } from "next-themes";

import NextTopLoader from "nextjs-toploader";

// Import layout components
import Header from "./_components/layout/header";

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
      <div className="flex flex-col h-screen">
        <Header />
        {children}
        <Toaster position="bottom-center" />
      </div>
      <Command />
    </div>
  );
}
