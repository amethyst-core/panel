"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DummyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-col min-h-dvh">
      <div className="absolute top-0 z-[-2] h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      {children}
    </div>
  );
}
