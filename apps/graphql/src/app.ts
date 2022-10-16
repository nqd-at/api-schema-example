import express, { json, urlencoded } from "express";
import { createServer } from "@graphql-yoga/node";
import { buildSchema } from "type-graphql";
import { container } from "tsyringe";
import { UserResolver } from "./resolvers/UserResolver";
import Container from "./container";

export const app = express();

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    container: new Container(),
  });
  const server = createServer({
    schema,
    maskedErrors: false,
  });
  app.use("/graphql", server);
};

bootstrap();
