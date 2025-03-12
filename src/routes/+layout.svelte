<script lang="ts">
  import "../app.css";

  import AppSidebar from "@/components/AppSidebar.svelte";
  import * as Sidebar from "@/components/ui/sidebar";
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

  let { children } = $props();
</script>

<Sidebar.Provider bind:open>
  <AppSidebar />
  <main class="m-2 rounded-lg bg-white shadow-md flex-1">
    {@render children()}
  </main>
</Sidebar.Provider>
