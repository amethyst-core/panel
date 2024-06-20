"use client";
import * as React from "react";
import Link from "next/link";

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

        <div className="flex-2">
          <Card>
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>
                Enter your email and password to sign in
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Sign in</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div></div>
    </>
  );
}
