import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default function Login() {
  return (
    <div className="h-[100vh]">
      <header className="mx-auto flex items-center justify-between p-6 lg:px-8 border-b border-muted-foreground/10">
        <Link href="/" className="text-lg">
          Amethyst <span className="text-primary-foreground">✦</span>
        </Link>
        <div className="text-sm">
          Don&apos;t have an account?
          <Link
            href="/auth/signup"
            className="text-primary-foreground underline-offset-4 hover:underline ml-1"
          >
            Create New
          </Link>
        </div>
      </header>
      <div className="lg:flex lg:items-center lg:justify-between mt-6">
        <div className="lg:flex-1 flex flex-col justify-space-between h-[100%] max-w-lg mx-12 my-10">
          <div>
            <h1 className="text-5xl tracking-tight">
              Manage Your Amethyst Nodes With Ease
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A modern, powerful, and user-friendly admin panel built for
              Minecraft servers.
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              &copy; 2024 Amethyst. All rights reserved.
            </p>
          </div>
        </div>
        <div className="mt-6 lg:mt-0 lg:ml-10"></div>
      </div>
      <div></div>
    </div>
  );
}
