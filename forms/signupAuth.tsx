"use client";

import * as React from "react";
import "./auth.scss";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignupAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      router.push("/");
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
