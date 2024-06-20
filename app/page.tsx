import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-dvh w-screen items-center justify-center bg-[#1c1c22]">
      <Link href="/auth/login" className="text-5xl">
        Amethyst <span className="text-primary-foreground">✦</span>
      </Link>
    </div>
  );
}
