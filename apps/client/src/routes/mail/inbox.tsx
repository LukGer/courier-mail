import { authenticatedGuard } from "@/lib/auth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mail/inbox")({
  beforeLoad: ({ context }) => authenticatedGuard(context),
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
