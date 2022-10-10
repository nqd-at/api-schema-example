import { PlatformBuilder } from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";
import { createHandler } from "azure-function-express";
import { Server } from "../src/Server";

const platform = PlatformBuilder.create(Server, {
  adapter: PlatformExpress,
  disableComponentsScan: true,
});

const promise = platform.bootstrap();

export default createHandler(async (req: any, res: any) => {
  try {
    await promise;
    platform.callback(req, res);
  } catch (er) {
    console.error("Exception", er);
  }
});
