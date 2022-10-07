import { Inject, PlatformApplication } from "@tsed/common";
import { Configuration } from "@tsed/di";
import "@tsed/platform-express";
import "@tsed/swagger";
import "@tsed/typegraphql";
import { DemoCtrl } from "./rest/controllers/DemoController";

@Configuration({
  mount: {
    "/rest": [DemoCtrl],
  },
  acceptMimes: ["application/json"],
  // typegraphql: {
  //   serverConfig: {
  //     path: "graphql",
  //   },
  // },
  // swagger: {
  //   path: "/api-docs",
  // },
  debug: process.env.NODE_ENV !== "production",
})
export class Server {
  @Inject()
  app: PlatformApplication;

  @Configuration()
  settings: Configuration;
}
