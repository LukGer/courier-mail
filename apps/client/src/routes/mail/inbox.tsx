import { db } from "@/db";
import { DbThread } from "@/db/schema";
import { authenticatedGuard } from "@/lib/auth";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/mail/inbox")({
  beforeLoad: ({ context }) => authenticatedGuard(context),
  component: Index,
});

function Index() {
  const [threads, setThreads] = useState<DbThread[]>([]);

  useEffect(() => {
    async function fetchMails() {
      const threads = await db.query.thread.findMany();

      setThreads(threads);
    }

    fetchMails();
  }, []);

  return (
    <div className="p-2">
      <pre className="w-2/3">{JSON.stringify(threads)}</pre>
    </div>
  );
}
