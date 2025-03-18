import { MiddlewareHandler } from "hono";

export const authMiddleware: MiddlewareHandler = async (c, next) => {
  const authHeader = c.req.header("Authorization");

  // if (!authHeader || !authHeader.startsWith("Bearer ")) {
  //   return c.json({ error: "Unauthorized" }, 401);
  // }

  const token = authHeader?.split(" ")?.[1] ?? ""; // Extract the token
  c.set("token", token); // Store in context

  await next(); // Continue to the next middleware/handler
};
