<script lang="ts">
  import "../app.css";

  import AppSidebar from "@/components/AppSidebar.svelte";
  import * as Sidebar from "@/components/ui/sidebar";

  let { children } = $props();
</script>

<Sidebar.Provider>
  <AppSidebar />
  <main class="m-2 rounded-lg bg-white shadow-md flex-1">
    {@render children()}
  </main>
</Sidebar.Provider>
