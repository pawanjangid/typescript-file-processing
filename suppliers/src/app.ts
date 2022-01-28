import { json, urlencoded } from "body-parser";
import cors from "cors";
import Debug from "debug";
import express from "express";
import morgan from "morgan";

import { decodeToken, authorize } from "../../../shared/authorization/authorization";
import errorHandler from "../../../shared/helpers/error-handler";
import suppliersController from "./controllers/suppliers.controller";

const debug = Debug("suppliers");

debug("Starting");

const app = express();

// We're running behind api gateway
// So allow express to set the X-Forwarded-For as the calling ip address
app.enable('trust proxy');

app.use(morgan("combined"));
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());
app.use(decodeToken);

// global error handler
app.use(errorHandler);

// api routes
export function suppliersGenerateRoutes(expressApp: express.Express): void {
    expressApp.use("/suppliers/v1", authorize(), suppliersController);
}
debug(`Started in ${process.env.NODE_ENV === "development" ? "dev" : "prod"}`);

export default app;
