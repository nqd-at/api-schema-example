#!/usr/bin/env ts-node
import { program } from "commander";
import * as OpenAPI from "openapi-typescript-codegen";
import { jsonSchemaToZod } from "json-schema-to-zod";
import fs from "node:fs";
import path from "node:path";
import * as tsImport from "ts-import";

const currentDir = process.cwd();

program
  .description("CLI to convert OpenAPI schema to Zod schema")
  .option("-i, --input <schema>", "URL or Path to OpenAPI schema file (.json)")
  .option("-o, --output <dir>", "Output directory")
  .showHelpAfterError()
  .parse(process.argv);

const options = program.opts<{ input: string; output: string; help: any }>();

if (!options.input || !options.output) {
  program.error("--input, --output is required");
}

if (options.help) {
  program.outputHelp();
}

const run = async () => {
  const { input, output } = options;

  const outDir = path.join(currentDir, output);

  await OpenAPI.generate({
    input,
    output: outDir,
    exportCore: false,
    exportModels: true,
    exportSchemas: true,
    exportServices: false,
    useOptions: true,
    indent: "2",
  });

  const schemasDir = path.join(outDir, "schemas");
  const files = fs.readdirSync(schemasDir);

  const zodDir = path.join(outDir, "zod");
  if (!fs.existsSync(zodDir)) {
    fs.mkdirSync(zodDir, { recursive: true });
  }

  await Promise.all(
    files.map(async (file) => {
      const originalfilePath = path.join(schemasDir, file);
      const schema = await tsImport.load(originalfilePath);

      const className = path.basename(file, ".ts").substring(1);
      const filePath = path.join(zodDir, `${className}.ts`);

      const obj = schema[Object.keys(schema)[0]];
      obj.type = typeof obj;
      const result = jsonSchemaToZod(obj);

      fs.writeFileSync(filePath, result);
    })
  );
};

run().catch((error) =>
  program.error((error as Error).stack ?? "Unknown error")
);

export {};
