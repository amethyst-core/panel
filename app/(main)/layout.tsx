"use client";

import { Suspense } from "react";
import Command from "@/components/main/command";
import { Navbar } from "./_components/navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-dvh">{children}</div>
      <Command />
    </>
  );
}
