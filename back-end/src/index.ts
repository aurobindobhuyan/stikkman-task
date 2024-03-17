import express, { Request } from "express";
// import helmet from "helmet";
import compression from "compression";
import dotenv from "dotenv";
import cors from "cors";

import { default as mongoDB } from "./config/database";
import routers from "./routes";
import { RouteNotFound, globalErrorhandler } from "./utils/errorHandler";

dotenv.config();

const app = express();
app.use(express.json());
app.use(compression());
// app.use(helmet());
app.use(
  cors({
    origin: "*",
    methods: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
    preflightContinue: true,
    credentials: true,
  })
);

(async () => {
  try {
    await mongoDB();
    console.log(`🌿 [DB]: MongoDB Connected`);
    routers(app);

    app.use("*", (req: Request) => {
      throw new RouteNotFound(`Can't find ${req.originalUrl} on the server!`);
    });

    app.use(globalErrorhandler);

    app.listen(process.env.PORT, () => {
      console.log(`⚡️ Server is running at ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error occured: ", error);
  }
})();
