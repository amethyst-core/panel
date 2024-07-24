import Link from "next/link";
import { ThemeButton } from "./theme-button";

import NotificationsDialog from "./notifications";
import AvatarDialog from "./avatar";

const tabs = [{ label: "Nodes" }, { label: "Users" }];

export function Header() {
  return (
    <header className="bg-background border-b">
      <div className="flex items-center justify-between p-4 lg:px-8">
        <Link href="/" className="text-2xl lg:text-lg select-none">
          Amethyst <span className="text-primary-foreground">✦</span>
        </Link>
        <nav className="nav"></nav>
        <div className="flex gap-5 lg:gap-8 items-center">
          <ThemeButton />
          <NotificationsDialog />
          <AvatarDialog />
        </div>
      </div>
    </header>
  );
}
