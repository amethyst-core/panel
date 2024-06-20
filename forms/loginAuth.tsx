"use client";

import * as React from "react";
import './auth.scss';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div className="flex items-center justify-center w-full">
      <form onSubmit={onSubmit} className="w-full">
        <div className="flex-col gap-2">
          <div className="form-elements">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />

            <Label htmlFor="password">Password</Label>
            <PasswordInput
              id="password"
              placeholder="********"
              autoComplete="current-password"
              disabled={isLoading}
            />

            <p className="text-sm text-muted-foreground w-full reset-pass">
              Forgot your password?
              <Link
                href="reset"
                className="text-primary-foreground underline-offset-4 hover:underline ml-1"
              >
                Reset Now
              </Link>
            </p>
          </div>
          <div className="mt-4">
            <Button disabled={isLoading} className="w-full">
              Continue
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
