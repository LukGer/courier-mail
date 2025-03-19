import { CourierRouterContext } from "@/router";
import { redirect } from "@tanstack/react-router";

export function authenticatedGuard(ctx: CourierRouterContext) {
  const { isSignedIn } = ctx;
  if (!isSignedIn) {
    throw redirect({ to: "/signin" });
  }
}
