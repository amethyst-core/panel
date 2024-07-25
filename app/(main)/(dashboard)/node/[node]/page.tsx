import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import AreaChart from "@/components/ui/AreaChart";

export default function NodeDetailed() {
	return (
		<>
			<div className="bg-background border-b p-6 lg:px-8 flex flex-col">
				<Link
					href="/"
					className="flex items-center text-sm mb-2"
				>
					<ChevronLeft className="mr-1 h-4 w-4" />
					All Nodes
				</Link>
				<h2 className="text-xl flex items-center">
					<span className="text-muted-foreground mr-1">Node:</span>New Minecraft
					Server
					<Badge
						variant="outline"
						className="ml-2"
					>
						Healthy
					</Badge>
				</h2>
			</div>
      <div></div>
			<div className="h-[50%] w-[50%]">
				<AreaChart theme={"dark"} />
        
			</div>
		</>
	);
}
