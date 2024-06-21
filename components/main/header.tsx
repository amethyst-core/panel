import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="flex items-center justify-center lg:justify-between p-4 lg:px-8">
      <Link href="/" className="text-2xl lg:text-lg">
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
    </header>
  );
}
