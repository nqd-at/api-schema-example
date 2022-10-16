import express, {
  json,
  urlencoded,
  Response as ExResponse,
  Request as ExRequest,
} from "express";
import { RegisterRoutes } from "./routes/routes";
import swaggerUi from "swagger-ui-express";

export const app = express();

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});

app.get("/.schema", async (_req: ExRequest, res: ExResponse) => {
  return res.send(await import("../build/swagger.json"));
});

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);
