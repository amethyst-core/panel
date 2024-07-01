"use client";

import { Suspense } from "react";
import Command from "@/components/main/command";
import { Header } from "./_components/header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-dvh bg-secondary-foreground">
      <Header />
      <div className="p-8">{children}</div>
      <Command />
    </div>
  );
}
