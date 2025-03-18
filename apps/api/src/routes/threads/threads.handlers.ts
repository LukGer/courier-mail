import type { AppRouteHandler } from "@/lib/types";
import { createClerkClient } from "@clerk/backend";
import { getAuth } from "@hono/clerk-auth";
import { google } from "googleapis";
import type { QueryRoute } from "./threads.routes";
import { threadsResponseSchema } from "./threads.schema";

const CLERK_SECRET_KEY = process.env.CLERK_SECRET_KEY;
const CLERK_PUBLISHABLE_KEY = process.env.CLERK_PUBLISHABLE_KEY;

export const query: AppRouteHandler<QueryRoute> = async (c) => {
  const clerkAuth = getAuth(c);

  const client = createClerkClient({
    publishableKey: CLERK_PUBLISHABLE_KEY,
    secretKey: CLERK_SECRET_KEY,
  });

  const userId = clerkAuth?.userId;

  if (!userId) {
    return c.json("Unauthorized", 401);
  }

  const tokens = await client.users.getUserOauthAccessToken(userId, "google");

  const accessToken = tokens.data[0].token;

  if (!accessToken) {
    return c.json("Unauthorized", 401);
  }

  const auth = new google.auth.OAuth2();

  auth.setCredentials({ access_token: accessToken });

  const gmail = google.gmail({ version: "v1", auth });

  const res = await gmail.users.threads
    .list({
      userId: "me",
      maxResults: 10,
    })
    .then((response) => threadsResponseSchema.parse(response.data.threads));

  return c.json(res, 200);
};
