<script lang="ts">
  import * as Sidebar from "@/components/ui/sidebar";
  import {
    AlertCircleIcon,
    ClockIcon,
    DiamondIcon,
    EditIcon,
    InboxIcon,
    MailCheckIcon,
    PlaneTakeoffIcon,
    StarIcon,
  } from "@lucide/svelte";

  // Menu items.
  const items = [
    {
      title: "Inbox",
      url: "/#inbox",
      icon: InboxIcon,
    },
    {
      title: "Starred",
      url: "/#starred",
      icon: StarIcon,
    },
    {
      title: "Snoozed",
      url: "/#snoozed",
      icon: ClockIcon,
    },
    {
      title: "Important",
      url: "/#important",
      icon: DiamondIcon,
    },
    {
      title: "Sent",
      url: "/#sent",
      icon: PlaneTakeoffIcon,
    },
    {
      title: "Drafts",
      url: "/#drafts",
      icon: EditIcon,
    },
    {
      title: "Spam",
      url: "/#spam",
      icon: AlertCircleIcon,
    },
  ];
</script>

<Sidebar.Root collapsible="icon" variant="sidebar">
  <Sidebar.Header class="flex flex-row items-center gap-2 overflow-hidden">
    <MailCheckIcon class="size-8 text-white min-h-8 shrink-0" />
    <p
      class="font-bold text-gray-100 whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-300"
    >
      Courier
    </p>
  </Sidebar.Header>
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each items as item (item.title)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton class="text-gray-100">
                {#snippet child({ props })}
                  <a href={item.url} {...props}>
                    <item.icon />
                    <span class="font-bold">{item.title}</span>
                  </a>
                {/snippet}
                {#snippet tooltipContent()}
                  <p>{item.title}</p>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>
</Sidebar.Root>
