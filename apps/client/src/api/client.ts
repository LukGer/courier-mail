import type { AppType } from "@repo/api";
import { hc } from "hono/client";

const API_BASE_URL = process.env.VITE_BACKEND_BASE_URL!;

export const client = hc<AppType>(API_BASE_URL);
