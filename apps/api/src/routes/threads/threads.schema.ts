import { z } from "zod";

export const threadsResponseSchema = z.array(
  z.object({
    id: z.string(),
    snippet: z.string(),
    historyId: z.string(),
  })
);
