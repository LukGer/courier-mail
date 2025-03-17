import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: ({ context }) => {
    if (!context.isSignedIn) {
      throw redirect({ to: "/login" });
    } else {
      throw redirect({ to: "/mail/inbox" });
    }
  },
});
