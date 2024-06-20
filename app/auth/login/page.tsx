"use client";

import Link from "next/link";
import { useState } from "react";

import AuthHeader from "@/components/layout/auth/header";

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
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";


export default function Login() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <>
      <AuthHeader
        text={"Don't have an account? "}
        link={"/auth/signup"}
        text2={"Create one"}
      />
      <div className="lg:flex lg:items-center lg:justify-between p-[3rem] h-full pt-12 px-16 gap-32">
        <div className="flex flex-col justify-between flex-1 h-full max-w-lg">
          <div>
            <h1 className="text-5xl tracking-tight">
              Manage Your Amethyst Nodes With Ease
            </h1>
            <p className="mt-4 text-lg font-light text-muted-foreground">
              A modern, powerful, and user-friendly admin panel built for
              Minecraft servers.
            </p>
          </div>

          <div>
            <p className="text-sm font-light text-muted-foreground">
              &copy; 2024 Amethyst. All rights reserved.
              <span className="inline-block mt-3">
                This is a demonstration purpose panel and may cause latency
                issues and should not be used in production.
              </span>
            </p>
          </div>
        </div>

        <div className="flex-[2]">
          <div>
            <Label htmlFor="current_password">Current Password</Label>
            <PasswordInput
              id="current_password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              autoComplete="current-password"
              className="my-3"
            />
          </div>
          <Button>Login</Button>
        </div>
      </div>
      <div></div>
    </>
  );
}
