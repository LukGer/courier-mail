import type { AppRouteHandler } from "@/lib/types";
import { google } from "googleapis";
import type { QueryRoute } from "./threads.routes";
import {} from "./threads.schema";

export const query: AppRouteHandler<QueryRoute> = async (c) => {
  const accessToken = c.get("token");

  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: accessToken });

  const gmail = google.gmail({ version: "v1", auth });

  const res = await gmail.users.threads.list({
    userId: "me",
    maxResults: 10,
  });

  return c.json(res.data.threads || []);
};
