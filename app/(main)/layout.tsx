"use client";

import * as React from "react";
import Command from "@/components/main/command";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-dvh">
      <Command/>
      {children}
    </div>
  );
}
