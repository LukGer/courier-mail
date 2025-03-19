import { useAuth, useClerk } from "@clerk/clerk-react";
import { RouterProvider } from "@tanstack/react-router";
import router from "./router";

const App = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const auth = useClerk();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return <RouterProvider router={router} context={{ isSignedIn, auth }} />;
};

export default App;
