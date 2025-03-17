import type { LoadedClerk } from "@clerk/types";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "../App.css";

interface CourierRouterContext {
  isSignedIn: boolean;
  auth?: LoadedClerk;
}

export const Route = createRootRouteWithContext<CourierRouterContext>()({
  component: () => {
    return (
      <>
        <Outlet />
        <TanStackRouterDevtools />
      </>
    );
  },
});
