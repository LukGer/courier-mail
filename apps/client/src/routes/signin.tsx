import { LoginForm } from "@/components/login-form";
import { createFileRoute, Link, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/signin")({
  beforeLoad: ({ context }) => {
    if (context.isSignedIn) {
      throw redirect({ to: "/mail/inbox" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-gray-100">
      <LoginForm className="w-2/3" />

      <Link to="/mail/inbox">Home</Link>
    </main>
  );
}
