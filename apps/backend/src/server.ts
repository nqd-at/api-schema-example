import "reflect-metadata";
import express from "express";
import { initRestAPI } from "./rest/app";
import { initGraphQL } from "./graphql/app";

const app = express();
const port = process.env.PORT || 3000;

const init = async () => {
  await initRestAPI(app);
  await initGraphQL(app);

  app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
  );
};

init().catch(console.error);
