<script lang="ts">
  import * as Sidebar from "@/components/ui/sidebar";
  import {
    AlertCircleIcon,
    ClockIcon,
    DiamondIcon,
    Edit3Icon,
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
      url: "/inbox",
      icon: InboxIcon,
    },
    {
      title: "Starred",
      url: "/starred",
      icon: StarIcon,
    },
    {
      title: "Snoozed",
      url: "/snoozed",
      icon: ClockIcon,
    },
    {
      title: "Important",
      url: "/important",
      icon: DiamondIcon,
    },
    {
      title: "Sent",
      url: "/sent",
      icon: PlaneTakeoffIcon,
    },
    {
      title: "Drafts",
      url: "/drafts",
      icon: EditIcon,
    },
    {
      title: "Spam",
      url: "/spam",
      icon: AlertCircleIcon,
    },
  ];
</script>

<Sidebar.Root collapsible="icon" variant="sidebar">
  <Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton
          size="lg"
          class="bg-gray-100 rounded-md p-2 pointer-events-none"
        >
          <div
            class="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground"
          >
            <MailCheckIcon className="size-4" />
          </div>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">Courier Mail</span>
          </div>
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Header>
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          <Sidebar.MenuItem>
            <Sidebar.MenuButton
              size="lg"
              class="bg-primary text-primary-foreground"
            >
              {#snippet child({ props })}
                <a href="/compose" {...props}>
                  <Edit3Icon class="ml-2 mr-2 size-4 min-h-4 shrink-0" />
                  <span class="overflow-hidden font-semibold">Compose</span>
                </a>
              {/snippet}
              {#snippet tooltipContent()}
                <p>Compose</p>
              {/snippet}
            </Sidebar.MenuButton>
          </Sidebar.MenuItem>
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
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
