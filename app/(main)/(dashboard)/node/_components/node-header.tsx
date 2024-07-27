import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function NodeHeader() {
  return (
    <div className="bg-background border-b p-6 lg:px-8 flex flex-col">
      <Link href="/" className="flex items-center text-sm mb-2">
        <ChevronLeft className="mr-1 h-4 w-4" />
        All Nodes
      </Link>
      <h2 className="text-xl flex items-center">
        <span className="text-muted-foreground mr-1">Node:</span>New Minecraft
        Server
        <Badge variant="outline" className="ml-2">
          Healthy
        </Badge>
      </h2>
    </div>
  );
}
