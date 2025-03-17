import { LoginForm } from "@/components/login-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-gray-100">
      <LoginForm className="w-2/3" />
    </main>
  );
}
