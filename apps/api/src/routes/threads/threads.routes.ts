import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { threadsResponseSchema } from "./threads.schema";

export const query = createRoute({
  path: "/threads/query",
  method: "get",
  request: {
    query: z.object({
      start: z.number(),
      maxResults: z.number(),
    }),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      threadsResponseSchema,
      "The list of threads"
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(z.string(), "Unauthorized"),
  },
});

export type QueryRoute = typeof query;
