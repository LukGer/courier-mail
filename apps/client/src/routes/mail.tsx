import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { EmailLabel } from "@/types";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SearchIcon } from "lucide-react";

export const Route = createFileRoute("/mail")({
  component: () => {
    const labels: EmailLabel[] = [
      { id: "work", name: "Work", color: "#3b82f6" },
      { id: "pers", name: "Personal", color: "#facc15" },
      { id: "ad", name: "Ad", color: "#22c55e" },
    ];

    return (
      <>
        <SidebarProvider>
          <AppSidebar labels={labels} />
          <div className="m-2 flex flex-col gap-2 flex-1">
            <div className="flex flex-row items-center py-2 px-4 rounded-md bg-white">
              <SearchIcon className="size-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 p-1.5 text-sm text-gray-700 bg-transparent border-none outline-none"
                aria-label="Search"
              />
            </div>

            <main className="rounded-lg bg-white shadow-md flex-1">
              <Outlet />
            </main>
          </div>
        </SidebarProvider>
      </>
    );
  },
});
