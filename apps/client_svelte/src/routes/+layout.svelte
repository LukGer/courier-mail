<script lang="ts">
  import "../app.css";

  import AppSidebar from "@/components/AppSidebar.svelte";
  import * as Sidebar from "@/components/ui/sidebar";
  import type { EmailLabel } from "@/types";
  import { SearchIcon } from "@lucide/svelte";
  import { onDestroy, onMount } from "svelte";

  let open = $state(true);

  function handleKeydown(event: KeyboardEvent) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
      event.preventDefault();
      open = !open;
    }
  }

  onMount(() => {
    window.addEventListener("keydown", handleKeydown);
  });

  onDestroy(() => {
    window.removeEventListener("keydown", handleKeydown);
  });

  let labels: EmailLabel[] = [
    { id: "work", name: "Work", color: "#3b82f6" },
    { id: "pers", name: "Personal", color: "#facc15" },
    { id: "ad", name: "Ad", color: "#22c55e" },
  ];

  let { children } = $props();
</script>

<Sidebar.Provider bind:open>
  <AppSidebar {labels} />
  <div class="m-2 flex flex-col gap-2 flex-1">
    <div class="flex flex-row items-center py-2 px-4 rounded-md bg-white">
      <SearchIcon class="size-4 text-gray-500" />
      <input
        type="text"
        placeholder="Search..."
        class="flex-1 p-1.5 text-sm text-gray-700 bg-transparent border-none outline-none"
        aria-label="Search"
      />
    </div>

    <main class="rounded-lg bg-white shadow-md flex-1">
      {@render children()}
    </main>
  </div>
</Sidebar.Provider>
