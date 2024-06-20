"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignupAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {}, 1000);
  }

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={onSubmit}>
        <div className="flex-col gap-2">
          <div className="gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              className="w-32"
            />
          </div>
          <div className="pt-4">
            <Button disabled={isLoading} className="w-full">
              Continue
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
