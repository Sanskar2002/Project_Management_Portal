import { Express } from "express";

const app = express();

//router imports
import healthCheckRouter from "./routes/healthcheck.route.js";

app.use("/api/v1/healthcheck", healthCheckRouter);

export default app;
