import app from "./app";
import { Server } from "http";

const PORT: string | number = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV || "development";
const logLevel = process.env.LOG_LEVEL || (nodeEnv === "development" ? "dev" : "combined");

const server: Server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${nodeEnv}`)
    console.log(`Loglevel: ${logLevel}`)
    
});

export default server;