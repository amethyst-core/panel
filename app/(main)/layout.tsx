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
    <>
      <Header />
      <div className="flex flex-col min-h-dvh bg-secondary-foreground">{children}</div>
      <Command />
    </>
  );
}
