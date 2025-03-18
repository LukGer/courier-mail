import { authenticatedGuard } from "@/lib/auth";
import { useAuth } from "@clerk/clerk-react";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/mail/inbox")({
  beforeLoad: ({ context }) => authenticatedGuard(context),
  component: Index,
});

function Index() {
  const { getToken } = useAuth();

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      setToken(token);
    };

    fetchToken();
  }, [getToken]);

  return (
    <div className="p-2">
      <pre className="w-2/3">Bearer {token}</pre>
    </div>
  );
}
