import Link from "next/link";

interface Props {
  text: string;
  link: string;
  text2: string;
}

export default function AuthFooter({ text, link, text2 }: Props) {
  return (
    <div className="lg:hidden text-sm">
      {text}
      <Link
        href={link}
        className="text-primary-foreground underline-offset-4 hover:underline ml-1"
      >
        {text2}
      </Link>
    </div>
  );
}
