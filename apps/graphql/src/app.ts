import express, { json, urlencoded } from "express";
import { createServer } from "@graphql-yoga/node";
import { buildSchemaSync, createResolversMap } from "type-graphql";
import {
  constraintDirectiveTypeDefs,
  constraintDirective,
} from "graphql-constraint-directive";
import { printSchemaWithDirectives } from "@graphql-tools/utils";
import { UserResolver } from "./resolvers/UserResolver";
import { makeExecutableSchema } from "@graphql-tools/schema";

export const app = express();

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

const bootstrap = async () => {
  const nonDirectiveSchema = buildSchemaSync({
    resolvers: [UserResolver],
  });
  const typeDefs = printSchemaWithDirectives(nonDirectiveSchema);
  const resolvers = createResolversMap(nonDirectiveSchema);
  const schema = makeExecutableSchema({
    typeDefs: [typeDefs, constraintDirectiveTypeDefs],
    resolvers,
  });
  const server = createServer({
    schema: constraintDirective()(schema),
  });
  app.use("/graphql", server);
};

bootstrap();
