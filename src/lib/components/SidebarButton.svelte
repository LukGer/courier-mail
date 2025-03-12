<script lang="ts">
  import { PanelLeftCloseIcon, PanelLeftOpenIcon } from "@lucide/svelte";
  import { useSidebar } from "./ui/sidebar";

  const sidebar = useSidebar();
</script>

<button onclick={() => sidebar.toggle()} class="btn btn-primary">
  {#if sidebar.open}
    <PanelLeftCloseIcon class="w-4 h-4" />
  {:else}
    <PanelLeftOpenIcon class="w-4 h-4" />
  {/if}
</button>
