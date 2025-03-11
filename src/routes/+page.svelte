<script lang="ts">
  import { useSidebar } from "@/components/ui/sidebar";
  import PanelLeftCloseIcon from "lucide-svelte/icons/panel-left-close";
  import PanelLeftOpenIcon from "lucide-svelte/icons/panel-left-open";

  const sidebar = useSidebar();
</script>

<main class="p-4">
  <header class="flex flex-row items-center">
    <button onclick={() => sidebar.toggle()} class="btn btn-primary">
      {#if sidebar.open}
        <PanelLeftCloseIcon class="w-4 h-4" />
      {:else}
        <PanelLeftOpenIcon class="w-4 h-4" />
      {/if}
    </button>
  </header>
</main>
