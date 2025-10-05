import { httpRouter } from "convex/server";

import { authComponent, createAuth } from "./auth";

const http = httpRouter();

authComponent.registerRoutes(http, createAuth);

// biome-ignore lint/style/noDefaultExport: required for Convex
export default http;
