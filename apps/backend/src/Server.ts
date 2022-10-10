import { Inject, PlatformApplication } from "@tsed/common";
import { Configuration } from "@tsed/di";
import { TodoController } from "./rest/controllers/TodoController";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import cors from "cors";
import { Request, Response } from "express";
import "@tsed/platform-express";
import "@tsed/swagger";
import "@tsed/typegraphql";

@Configuration({
  mount: {
    "/api/rest": [TodoController],
  },
  httpPort: false,
  httpsPort: false, // CHANGE
  acceptMimes: ["application/json"],
  // typegraphql: {
  //   serverConfig: {
  //     path: "graphql",
  //   },
  // },
  swagger: [
    {
      path: "/v3/docs",
      specVersion: "3.0.1",
    },
  ],
  debug: process.env.NODE_ENV !== "production",
})
export class Server {
  @Inject()
  app: PlatformApplication;

  @Configuration()
  settings: Configuration;

  $beforeRoutesInit(): void {
    this.app
      .use(cors())
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true,
        })
      )
      .use((_: Request, res: Response, next: () => void) => {
        res.type("application/json");
        next();
      });
  }
}
