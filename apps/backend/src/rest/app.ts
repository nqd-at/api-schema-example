import express, {
  json,
  urlencoded,
  Response as ExResponse,
  Request as ExRequest,
  NextFunction,
} from "express";
import cors from "cors";
import { RegisterRoutes } from "./routes/routes";
import swaggerUi from "swagger-ui-express";
import { ValidateError } from "tsoa";

export const initRestAPI = async (app: express.Application) => {
  app.use(
    "/docs",
    swaggerUi.serve,
    async (_req: ExRequest, res: ExResponse) => {
      return res.send(
        swaggerUi.generateHTML(await import("../../dist/swagger.json"))
      );
    }
  );

  app.get("/.openapi-schema", async (_req: ExRequest, res: ExResponse) => {
    return res.send(await import("../../dist/swagger.json"));
  });

  app.use(cors());

  // Use body parser to read sent json payloads
  app.use(
    urlencoded({
      extended: true,
    })
  );
  app.use(json());

  RegisterRoutes(app);

  app.use(function errorHandler(
    err: unknown,
    req: ExRequest,
    res: ExResponse,
    next: NextFunction
  ): ExResponse | void {
    if (err instanceof ValidateError) {
      console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
      return res.status(400).json({
        message: "Validation Failed",
        details: err?.fields,
      });
    }
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }

    next();
  });
};
