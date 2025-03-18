import { createRouter } from "@/lib/create-app";

import * as handlers from "./emails.handlers";
import * as routes from "./emails.routes";

const router = createRouter().openapi(routes.query, handlers.query);

export default router;
