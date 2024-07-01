import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { ThemeButton } from "./theme-button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const tabs = [{ label: "Nodes" }, { label: "Users" }];

export function Header() {
  const [section, setSection] = useState("section1");

  const handleHeaderClick = (section: string) => {
    setSection(section);
  };
  return (
    <header className="bg-background border-b">
      <div className="flex items-center justify-between p-4 lg:px-8">
        <Link href="/" className="text-2xl lg:text-lg select-none">
          Amethyst <span className="text-primary-foreground">✦</span>
        </Link>
        <nav className="nav"></nav>
        <div className="flex">
          <ThemeButton />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="mr-2">
                <Bell className="text-muted-foreground h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Keyboard shortcuts</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/settings">
            <Avatar>
              <AvatarImage src="https://github.com/swargaraj.png" />
              <AvatarFallback>SW</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  );
}
