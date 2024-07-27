"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="flex h-14 items-center gap-4 border-b border-muted lg:h-[70px] p-8">
      <div className="w-full flex-1">Amethsyt</div>
      <div className="flex items-center gap-4">
        <Avatar className="cursor-pointer h-8 w-8">
          <AvatarImage src="https://github.com/swargaraj.png" alt="@shadcn" />
          <AvatarFallback>SB</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
