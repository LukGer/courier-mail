import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { threadSchema } from "./threads.schema";

export const query = createRoute({
  path: "/threads/query",
  method: "get",
  tags: ["Threads"],
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(threadSchema),
      "The list of threads"
    ),
  },
});

export type QueryRoute = typeof query;
