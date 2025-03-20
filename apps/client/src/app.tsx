import { useAuth, useClerk } from "@clerk/clerk-react";
import { RouterProvider } from "@tanstack/react-router";
import { migrate } from "drizzle-orm/sqlite-proxy/migrator";
import { useEffect } from "react";
import { db } from "./db";
import router from "./router";

const App = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const auth = useClerk();

  useEffect(() => {
    const migrateDatabase = async () => {
      await migrate(
        db,
        async () => {
          console.log("Seas");
        },
        { migrationsFolder: "../../migrations" }
      );
    };

    migrateDatabase();
  }, [auth]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return <RouterProvider router={router} context={{ isSignedIn, auth }} />;
};

export default App;
