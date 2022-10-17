import express, { json, urlencoded } from "express";
import { createServer } from "@graphql-yoga/node";
import { loadFiles } from "@graphql-tools/load-files";
import {
  constraintDirectiveTypeDefs,
  createEnvelopQueryValidationPlugin,
} from "graphql-constraint-directive";
import { printSchemaWithDirectives } from "@graphql-tools/utils";
import { makeExecutableSchema } from "@graphql-tools/schema";

export const app = express();

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

const bootstrap = async () => {
  const typedefs = await loadFiles("./schema.graphql");
  const schema = makeExecutableSchema({
    typeDefs: [typedefs, constraintDirectiveTypeDefs],
  });
  // const nonDirectiveSchema = buildSchemaSync({
  //   resolvers: [UserResolver],
  // });
  // const typeDefs = printSchemaWithDirectives(nonDirectiveSchema);
  // const resolvers = createResolversMap(nonDirectiveSchema);
  // const schema = makeExecutableSchema({
  //   typeDefs: [typeDefs, constraintDirectiveTypeDefs],
  //   resolvers,
  // });
  const server = createServer({
    schema,
    plugins: [createEnvelopQueryValidationPlugin()],
    context() {
      return {}
    }
  });
  console.log(printSchemaWithDirectives(schema));
  app.use("/graphql", server);
};

bootstrap();
