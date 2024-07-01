import { useState, useEffect } from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { MoreHorizontal } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

const data: NodesData[] = [
  {
    id: "m5gr84i9",
    status: "online",
    nodename: "Node #2 (US)",
  },
  {
    id: "3u1reuv4",
    status: "offline",
    nodename: "Node #1 (EU)",
  },
];

export type NodesData = {
  id: string;
  status: "online" | "offline";
  nodename: string;
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
    accessorKey: "nodename",
    header: ({ column }) => {
      return <span>Node Name</span>;
    },
    cell: ({ row }) => <div>{row.getValue("nodename")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const node = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
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

export function NodesTable() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search"
          value={
            (table.getColumn("nodename")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("nodename")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        {/* Separate these from table/tsx */}
        <Dialog>
          <DialogTrigger>
            <Button variant="outline" className="ml-auto">
              Connect Node
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="cursor-pointer"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export function NodesTableSkeleton() {
  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Skeleton className="w-96 h-10" />
        <Skeleton className="w-36 h-10 ml-auto" />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="border-b">
            <TableRow>
              <TableCell>
                <Skeleton className="h-4 w-24" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-36" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-10" />
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className="py-12">
            {[...Array(2)].map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="h-6 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-6 w-36" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-6 w-10" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Skeleton className="w-36 h-10" />
        </div>
      </div>
    </div>
  );
}
