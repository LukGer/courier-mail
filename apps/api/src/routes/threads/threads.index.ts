import { createRouter } from "@/lib/create-app";

import * as handlers from "./threads.handlers";
import * as routes from "./threads.routes";

const router = createRouter().openapi(routes.query, handlers.query);

export default router;
