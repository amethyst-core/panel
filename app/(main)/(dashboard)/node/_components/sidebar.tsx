"use client";

import Link from "next/link";

import { SidebarLinks } from "./sidebar-links";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();
  const menu = SidebarLinks(pathname);

  return (
    <div className="hidden border-r border-muted bg-secondary md:block select-none">
      <div className="flex flex-col">
        <div className="flex-1">
          <div className="flex flex-col justify-between h-full px-4 py-4">
            <nav className="grid items-start text-sm font-medium space-y-1">
              {menu.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2 rounded-lg text-muted-foreground hover:text-primary border border-transparent transition-colors",
                    pathname === item.href
                      ? "dark:bg-gradient-to-b dark:from-[#252525] dark:to-[#1D1D1D] border border-primary/10 dark:shadow-lg text-primary"
                      : ""
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
