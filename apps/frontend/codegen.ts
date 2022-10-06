import { CodegenConfig } from "@graphql-codegen/cli";
import { z } from "zod";

const generatedDir = "src/generated/graphql";
const downloadedSchema = `${generatedDir}/schema.graphql`;

const config: CodegenConfig = {
  schema: downloadedSchema,
  generates: {
    [`${generatedDir}/types.ts`]: {
      plugins: ["typescript"],
      config: { overwrite: true },
    },
    [`${generatedDir}/zod.ts`]: {
      plugins: ["typescript-validation-schema"],
      config: {
        overwrite: true,
        importFrom: "./types",
        strictScalars: false,
        schema: "zod",
        scalarSchemas: {
          Date: z.date(),
        },
        directives: {
          constraint: {
            /* string */
            minLength: "min",
            maxLength: "max",
            startsWith: "startsWith",
            endsWith: "endsWith",
            contains: ["regex", "/$1/"],
            notContains: ["regex", "/^((?!$1).)*$/"],
            pattern: "regex",
            format: {
              email: "email",
              uri: "url",
              uuid: "uuid",
            },
            /** int/float */
            min: "gte",
            max: "lte",
            exclusiveMin: "gt",
            exclusiveMax: "lt",
            multipleOf: "multipleOf",
            /** array/list */
            minItems: "min",
            maxItems: "max",
          },
        },
      },
    },
  },
};

export default config;
