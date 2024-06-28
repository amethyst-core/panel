"use client";

import { useState } from "react";

import AuthHeader from "@/components/layout/auth/header";
import AuthFooter from "@/components/layout/auth/footer";

import { SignupAuthForm } from "@/forms/signupAuth";
import Link from "next/link";

export default function Login() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <>
      <AuthHeader
        text={"Already have an account? "}
        link={"/auth/login"}
        text2={"Sign in"}
      />
      <div className="flex lg:justify-between pt-16 py-8 px-8 lg:px-16 gap-48 grow">
        <div className="hidden lg:flex flex-col justify-between flex-1">
          <div>
            <h1 className="text-5xl tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400">
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
          <div className="mx-auto flex w-full flex-col justify-center items-center space-y-6 max-w-[70%] ">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-3xl tracking-tight">Create your account</h1>
              <p className="text-sm text-muted-foreground text-center">
                Enter your email and password below
              </p>
            </div>
            <SignupAuthForm />
            <p className="px-8 pb-2 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our
              <Link
                href="/terms"
                className="text-primary-foreground underline-offset-4 hover:underline ml-1"
              >
                Terms of Service
              </Link>{" "}
              and
              <Link
                href="/privacy"
                className="text-primary-foreground underline-offset-4 hover:underline ml-1"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <AuthFooter
              text={"Already have an account? "}
              link={"/auth/login"}
              text2={"Sign in"}
            />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
