import Link from "next/link";
import Navbar from "./navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { ThemeButton } from "./theme-button";

const tabs = [
  { label: "Nodes" },
  { label: "Users" },
];

export function Header() {
  const [section, setSection] = useState("section1");

  const handleHeaderClick = (section: string) => {
    setSection(section);
  };
  return (
    <header className="bg-background shadow-sm dark:shadow-slate-100/10">
      <div className="flex items-center justify-between p-4 lg:px-8">
        <Link href="/" className="text-2xl lg:text-lg select-none">
          Amethyst <span className="text-primary-foreground">✦</span>
        </Link>
        <div className="flex">
          <ThemeButton />
          <Button variant="ghost" className="mr-2">
            <Bell className="text-muted-foreground h-5 w-5" />
          </Button>
          <Link href="/settings">
            <Avatar>
              <AvatarImage src="https://github.com/swargaraj.png" />
              <AvatarFallback>SW</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
      <Navbar tabs={tabs} />
    </header>
  );
}
