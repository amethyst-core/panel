"use client";

import { Suspense } from "react";
import { NodesTable, NodesTableSkeleton } from "./_components/table";

export default function Nodes() {
  return (
    <div className="p-8">
      <div>
        <h2 className="text-2xl mb-1">Your Nodes</h2>
        <p className="text-sm text-muted-foreground">
          You can manage your nodes from here.
        </p>
      </div>
      <Suspense fallback={<NodesTableSkeleton />}>
        <NodesTable />
      </Suspense>
    </div>
  );
}
