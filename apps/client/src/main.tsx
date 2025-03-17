import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Import the generated route tree
import { ClerkProvider, useAuth, useClerk } from "@clerk/clerk-react";
import router from "./router";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const App = () => {
  const { isSignedIn } = useAuth();
  const auth = useClerk();

  return <RouterProvider router={router} context={{ isSignedIn, auth }} />;
};

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
      </ClerkProvider>
    </StrictMode>
  );
}
