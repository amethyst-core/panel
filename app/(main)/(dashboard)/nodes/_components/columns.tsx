import { ColumnDef } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { Files, MoreHorizontal } from "lucide-react";
import Link from "next/link";

export type NodesData = {
  id: string;
  name: string;
  host: string;
  status: "online" | "offline";
};

export const columns: ColumnDef<NodesData>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <span>Node Name</span>;
    },
    cell: ({ row }) => (
      <div>
        <Link href={"/node/" + row.getValue("id")}>{row.getValue("name")}</Link>
      </div>
    ),
  },
  {
    accessorKey: "host",
    header: ({ column }) => {
      return <span>Host</span>;
    },
    cell: ({ row }) => (
      <div className="flex items-center">
        {row.getValue("host")}
        <Files
          className="h-4 w-4 text-muted-foreground ml-2 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(row.getValue("host"));
            toast.success("Host copied to clipboard", {
              duration: 2000,
            });
          }}
        />
      </div>
    ),
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => (
      <Link
        href={"/node/" + row.getValue("id")}
        className="hover:underline underline-offset-4"
      >
        View
      </Link>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const node = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex justify-end">
              <Button variant="ghost" className="h-8 w-fit p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(node.id);
                toast.success("Node ID copied");
              }}
              className="cursor-pointer"
            >
              Copy Node ID
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
