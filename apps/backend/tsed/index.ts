import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { $log, PlatformBuilder } from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";
import Express from "express";
import { Server } from "../src/Server";

let platform: PlatformBuilder<Express.Application, Express.Router>;

const bootstrap = async () => {
  try {
    $log.debug("Start server...");
    platform = await PlatformExpress.bootstrap(Server);
  } catch (er) {
    $log.error(er);
  }
};

const promise = bootstrap();

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  console.log(11, req.url)
  try {
    await promise;

    platform.callback(context.req as any, context.res as any);
    console.log(context.res)
  } catch (e) {
    console.error(e);
  }

  // context.log('HTTP trigger function processed a request.');
  // const name = (req.query.name || (req.body && req.body.name));
  // const responseMessage = name
  //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
  //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

  // context.res = {
  //     // status: 200, /* Defaults to 200 */
  //     body: responseMessage
  // };
};

export default httpTrigger;
