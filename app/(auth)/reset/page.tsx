"use client";

import { useState } from "react";

import AuthHeader from "@/components/layout/auth/header";

import { ResetAuthForm } from "@/forms/resetAuth";
import Link from "next/link";

export default function Login() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <>
      <AuthHeader
        text={"Already have an account? "}
        link={"/login"}
        text2={"Sign in"}
      />
      <div className="flex lg:justify-between pt-16 py-8 px-8 lg:px-16 gap-48 grow">
        <div className="hidden lg:flex flex-col justify-between flex-1">
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

        <div className="flex-[1]">
          <div className="mx-auto flex w-full flex-col justify-center items-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-3xl tracking-tight">Reset your password</h1>
              <p className="text-sm text-muted-foreground text-center">
                We will send you a link to reset your password.
              </p>
            </div>
            <ResetAuthForm />
          </div>
        </div>
      </div>
    </>
  );
}
