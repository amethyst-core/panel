import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between shadow-sm p-4 lg:px-8 bg-[#1a1a1a]">
      <Link href="/" className="text-2xl lg:text-lg select-none">
        Amethyst <span className="text-primary-foreground">✦</span>
      </Link>
      <div>
        <Link href="/settings">
          <Avatar>
            <AvatarImage src="https://github.com/swargaraj.png" />
            <AvatarFallback>SW</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </nav>
  );
}
