"use client";
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
import Header from "@/components/ui/header";

export default function Login() {
  return (
    <div className="h-[100vh] flex flex-col">
     <Header
				text={"Don't have an account? "}
				link={"/auth/signup"}
				text2={" Create New"}
			/>

      <div className="lg:flex lg:items-center lg:justify-between p-[3rem] h-full">
        <div className="lg:flex-1 flex flex-col justify-between h-full max-w-lg ">
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
