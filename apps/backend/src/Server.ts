import { Inject, PlatformApplication } from "@tsed/common";
import { Configuration } from "@tsed/di";
import "@tsed/platform-koa";
import "@tsed/swagger";
import "@tsed/typegraphql";

@Configuration({
  mount: {
    "/rest": [],
  },
  acceptMimes: ["application/json"],
  typegraphql: {
    serverConfig: {
      path: "graphql",
    },
  },
  swagger: {
    path: "/api-docs",
  },
  debug: process.env.NODE_ENV !== "production",
})
export class Server {
  @Inject()
  app: PlatformApplication;

  @Configuration()
  settings: Configuration;
}
