import Link from "next/link";

interface Props {
  text: string;
  link: string;
  text2: string;
}

export default function AuthHeader({ text, link, text2 }: Props) {
  return (
    <header className="flex items-center justify-between p-6 lg:px-8 border-b border-muted-foreground/10">
      <Link href="/" className="text-lg">
        Amethyst <span className="text-primary-foreground">✦</span>
      </Link>
      <div className="text-sm">
        {text}
        <Link
          href={link}
          className="text-primary-foreground underline-offset-4 hover:underline ml-1"
        >
          {text2}
        </Link>
      </div>
    </header>
  );
}
