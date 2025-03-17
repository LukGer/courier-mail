<script lang="ts">
  import * as Table from "@/components/ui/table";
  import type { Email, EmailLabel } from "@/types";
  import {
    ArchiveIcon,
    RefreshCcwIcon,
    StarIcon,
    Trash2Icon,
  } from "@lucide/svelte";
  import dayjs from "dayjs";
  import { Button } from "./ui/button";
  import { Checkbox } from "./ui/checkbox";
  import Separator from "./ui/separator/separator.svelte";

  const {
    labels,
    emails,
  }: {
    labels: EmailLabel[];
    emails: Email[];
  } = $props();

  let selectedEmailIds = $state<string[]>([]);
  let activeFilter = $state<string>();

  function toggleSelectEmail(emailId: string) {
    if (selectedEmailIds.includes(emailId)) {
      selectedEmailIds = selectedEmailIds.filter((id) => id !== emailId);
    } else {
      selectedEmailIds = [...selectedEmailIds, emailId];
    }
  }

  function toggleSelectAll() {
    if (selectedEmailIds.length === emails.length) {
      selectedEmailIds = [];
    } else {
      selectedEmailIds = emails.map((email) => email.id);
    }
  }
</script>

<div class="border-b p-2 flex items-center gap-2">
  <Checkbox
    checked={selectedEmailIds.length === emails.length && emails.length > 0}
    onCheckedChange={toggleSelectAll}
    aria-label="Select all emails"
  />
  <Button variant="ghost" size="icon" disabled={selectedEmailIds.length === 0}>
    <ArchiveIcon class="h-4 w-4" />
    <span class="sr-only">Archive</span>
  </Button>
  <Button variant="ghost" size="icon" disabled={selectedEmailIds.length === 0}>
    <Trash2Icon class="h-4 w-4" />
    <span class="sr-only">Delete</span>
  </Button>
  <Separator orientation="vertical" class="h-6" />
  <Button variant="ghost" size="icon">
    <RefreshCcwIcon class="h-4 w-4" />
    <span class="sr-only">Refresh</span>
  </Button>
  <div class="ml-2 flex items-center gap-2 flex-wrap">
    <Button
      variant={activeFilter === null ? "default" : "outline"}
      size="sm"
      onclick={() => (activeFilter = undefined)}
    >
      All
    </Button>
    {#each labels as label}
      <Button
        variant={activeFilter === label.id ? "default" : "outline"}
        size="sm"
        class={`${activeFilter === label.id ? "text-white" : ""}`}
        style="background-color: rgb(${label.color} / 20);"
        onclick={() => (activeFilter = label.id)}
      >
        <span
          class={`size-2 rounded-full mr-2`}
          style="background-color: {label.color}"
        ></span>
        {label.name}
      </Button>
    {/each}
  </div>
</div>

<div class="flex-1 overflow-auto">
  <Table.Root>
    <Table.Header>
      <Table.Row inert>
        <Table.Head class="w-[50px]"></Table.Head>
        <Table.Head class="w-[50px]"></Table.Head>
        <Table.Head class="w-[200px]">From</Table.Head>
        <Table.Head>Subject</Table.Head>
        <Table.Head class="text-right w-[100px]">Date</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each emails as email, i (i)}
        <Table.Row class={email.read ? "" : "font-medium bg-muted/30"}>
          <Table.Cell class="p-2">
            <Checkbox
              checked={selectedEmailIds.includes(email.id)}
              onCheckedChange={() => toggleSelectEmail(email.id)}
              aria-label={`Select email from ${email.from}`}
            />
          </Table.Cell>
          <Table.Cell class="p-2">
            <Button variant="ghost" size="icon" class="h-5 w-5">
              <StarIcon
                class={`h-4 w-4 ${email.starred ? "fill-yellow-400 text-yellow-400" : ""}`}
              />
              <span class="sr-only">Star</span>
            </Button>
          </Table.Cell>
          <Table.Cell class="font-medium">{email.from}</Table.Cell>
          <Table.Cell>
            <div>
              <span class={email.read ? "" : "font-medium"}
                >{email.subject}</span
              >
              <p class="text-muted-foreground text-sm truncate">
                {email.preview}
              </p>
            </div>
          </Table.Cell>
          <Table.Cell class="text-right text-sm text-muted-foreground">
            {dayjs(email.date).format("DD. MMMM")}
          </Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
</div>
