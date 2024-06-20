import Link from "next/link";
export default function AuthHeader() {
  return (
    <header className="mx-auto flex items-center justify-between p-6 lg:px-8 border-b border-muted-foreground/10">
      <Link href="/" className="text-lg">
        Amethyst <span className="text-primary-foreground">✦</span>
      </Link>
      <div className="text-sm">
        Don&apos;t have an account?
        <Link
          href="/auth/signup"
          className="text-primary-foreground underline-offset-4 hover:underline ml-1"
        >
          Create New
        </Link>
      </div>
    </header>
  );
}
