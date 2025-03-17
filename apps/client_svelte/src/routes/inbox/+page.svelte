<script lang="ts">
  import MailTable from "@/components/MailTable.svelte";
  import type { Email, EmailLabel } from "@/types";

  const {
    data,
  }: {
    data: {
      labels: EmailLabel[];
    };
  } = $props();

  const labels = data.labels;

  const emails: Email[] = [
    {
      id: "mail-1",
      from: "John Doe",
      subject: "Meeting Reminder",
      preview: "Don't forget about our meeting tomorrow.",
      date: "2025-03-16",
      read: false,
      starred: false,
      labelIds: ["work"],
    },
    {
      id: "mail-2",
      from: "Jane Smith",
      subject: "Project Update",
      preview: "The project is on track for completion.",
      date: "2025-03-15",
      read: false,
      starred: true,
      labelIds: ["pers"],
    },
    {
      id: "mail-3",
      from: "Bob Johnson",
      subject: "Invoice Due",
      preview: "Your invoice is due next week.",
      date: "2025-03-14",
      read: false,
      starred: false,
      labelIds: ["ad"],
    },
    {
      id: "mail-4",
      from: "Alice Brown",
      subject: "Newsletter Subscription",
      preview: "Thank you for subscribing to our newsletter.",
      date: "2025-03-13",
      read: true,
      starred: true,
      labelIds: ["work", "pers"],
    },
    {
      id: "mail-5",
      from: "Charlie Davis",
      subject: "Feedback Request",
      preview: "We would love to hear your feedback.",
      date: "2025-03-12",
      read: false,
      starred: false,
      labelIds: ["ad"],
    },
    {
      id: "mail-6",
      from: "Diana Prince",
      subject: "New Features Released",
      preview: "Check out the new features in our app.",
      date: "2025-03-11",
      read: true,
      starred: true,
      labelIds: ["work"],
    },
  ];
</script>

<main class="p-4">
  <MailTable {labels} {emails} />
</main>
