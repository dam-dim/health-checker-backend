import express from "express";
import ROUTER from "./routes/router.js";
import cors from "cors";
import { apiKeyAuth } from "./middleware/api.auth.key.js";

const app = express();

// Built-in / third-party middleware
app.use(express.json());
// Browsers will block my APi without this
// What does it do?
app.use(cors());

// Custom global middleware - Logging, request IDs, metrics, etc.

//Authentication / authorization middleware - Protects routes before they reach controllers.

// Route handlers (routers) - Connect your routers to handle requests.
// Protects ALL routes
app.use("/", apiKeyAuth, ROUTER);

// Error-handling middleware (must come last)

export default app;