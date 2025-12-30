import express from "express";
import ROUTER from "./routes/router.js";
import cors from "cors";
import { apiKeyAuth } from "./middleware/api.auth.key.js";
import { logger } from "./middleware/api.access.log.js";
import { pool } from "./config/db.config.js";

const app = express();

// 1. Built-in / third-party middleware
app.use(express .json());
// Browsers will block my APi without this
// What does it do?
app.use(cors());

// 2. Custom global middleware - Logging, request IDs, metrics, etc.
app.use(logger);

// 3. Authentication / authorization middleware - Protects routes before they reach controllers.

// 4. Route handlers (routers) - Connect your routers to handle requests.
// Protects ALL routes
app.use("/", ROUTER);

// 5. Error-handling middleware (must come last)

export default app;