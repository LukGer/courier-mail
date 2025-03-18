import { authenticatedGuard } from "@/lib/auth";
import { useAuth, useUser } from "@clerk/clerk-react";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/mail/inbox")({
  beforeLoad: ({ context }) => authenticatedGuard(context),
  component: Index,
});

function Index() {
  const { getToken } = useAuth();
  const { user } = useUser();

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken({ template: "oauth_google" });
      setToken(token);
    };

    fetchToken();
  }, [getToken]);

  return (
    <div className="p-2">
      <pre className="whitespace-pre-wrap">Bearer {token}</pre>
    </div>
  );
}
