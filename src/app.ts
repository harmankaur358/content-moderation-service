import dotenv from "dotenv";

// Load environment variables
dotenv.config();
console.log("ENV Loaded:", process.env.NODE_ENV);

import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import moderationRoutes from "./api/v1/routes/moderationRoutes";

const app: Express = express();

const nodeEnv = process.env.NODE_ENV || "development";
const logLevel = process.env.LOG_LEVEL || (nodeEnv === "development" ? "dev" : "combined");

app.use(morgan(logLevel));

app.use(express.json());

/**
 * Mount moderation routes on /api/v1/moderation
 */
app.use("/api/v1/moderation", moderationRoutes);

/**
 * Default error handler for unmatched routes
 */
app.use((req: Request, res: Response): void => {
    res.status(404).json({ message: "Endpoint not found" });
});

export default app;