"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        <div className=" grid gap-2">
          <div className="">
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
