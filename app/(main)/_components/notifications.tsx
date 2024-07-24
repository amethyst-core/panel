/**
 * Renders the notifications dropdown component.
 */

"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import { Bell, Loader } from "lucide-react";

export default function NotificationsDialog() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5 cursor-pointer" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[400px] p-4 space-y-2">
        <DropdownMenuLabel className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Notifications</h3>
          <Button variant="ghost" size="sm">
            Mark all as read
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="" />
        <div className="space-y-4 p-4">
          <div className="flex items-start gap-3">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">No New Notifications</p>
              <p className="text-sm text-muted-foreground">
                All caught up! Time to watch more anime!
              </p>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
