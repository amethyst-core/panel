// Import layout components
import NodeHeader from "./_components/node-header";
import Sidebar from "./_components/sidebar";

import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col relative h-full flex-grow w-full">
      <NodeHeader />
      <div className="relative grid flex-grow w-full md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]">
        <Sidebar />
        <div className="flex flex-col">{children}</div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
}
