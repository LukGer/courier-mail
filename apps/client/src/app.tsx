import { useAuth, useClerk } from "@clerk/clerk-react";
import { RouterProvider } from "@tanstack/react-router";
import router from "./router";

const App = () => {
  const { isSignedIn } = useAuth();
  const auth = useClerk();

  return <RouterProvider router={router} context={{ isSignedIn, auth }} />;
};

export default App;
