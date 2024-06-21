"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function NewPassAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      router.push("/nodes");
    }, 1000);
  }

  return (
    <div className="flex items-center justify-center w-full">
      <form onSubmit={onSubmit} className="w-full">
        <div className="flex-col gap-2">
          <div className="form-elements">
            <PasswordInput
              id="password"
              placeholder="********"
              autoComplete="current-password"
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
