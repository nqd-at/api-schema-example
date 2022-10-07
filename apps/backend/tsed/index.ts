import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import {$log} from "@tsed/common";
import { PlatformKoa } from "@tsed/platform-koa";
import { Server } from "../src/Server";

let platform = PlatformKoa.create(Server);

const bootstrap = async () => {
  try {
    $log.debug("Start server...");
    platform = await PlatformKoa.bootstrap(Server);
  } catch (er) {
    $log.error(er);
  }
}

const promise = bootstrap();

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    await promise
    platform.app.raw(req, context.res)
    // handler.callback(req, res);
  } catch (e) {
    console.error(e)
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
