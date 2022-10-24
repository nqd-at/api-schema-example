import express from "express";
import { createServer } from "@graphql-yoga/node";
import { buildSchema, createResolversMap } from "type-graphql";
import {
  constraintDirective,
  constraintDirectiveTypeDefs,
  createEnvelopQueryValidationPlugin,
} from "graphql-constraint-directive";
import { printSchemaWithDirectives } from "@graphql-tools/utils";
import { UserResolver } from "./resolvers/UserResolver";
import { makeExecutableSchema } from "@graphql-tools/schema";
import cors from "cors";
import Container from "./container";

export const initGraphQL = async (app: express.Application) => {
  const nonDirectiveSchema = await buildSchema({
    resolvers: [UserResolver],
    container: new Container(),
  });
  const typeDefs = printSchemaWithDirectives(nonDirectiveSchema);
  const resolvers = createResolversMap(nonDirectiveSchema);
  const schema = makeExecutableSchema({
    typeDefs: [typeDefs, constraintDirectiveTypeDefs],
    resolvers,
  });
  const server = createServer({
    schema: constraintDirective()(schema),
    plugins: [createEnvelopQueryValidationPlugin()],
    maskedErrors: false,
  });

  app.use(cors());

  app.use("/graphql", server);
  app.use("/.graphql-schema", (_req, res) => {
    const originalSchema = printSchemaWithDirectives(schema);
    res.contentType("text/plain").send(originalSchema);
  });
};
