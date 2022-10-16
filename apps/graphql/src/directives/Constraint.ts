import { getMetadataStorage, SymbolKeysNotSupportedError } from "type-graphql";
import { MethodAndPropDecorator } from "type-graphql/dist/decorators/types";
import { ZodType } from "zod";

// type ZodType = "string" | "number" | "boolean" | "bigint" | "date"
interface ZodValidator {
  string: number
}

export function Constraint(type: ZodType): MethodAndPropDecorator;
export function Constraint(
  type: ZodType
): MethodDecorator | PropertyDecorator | ClassDecorator {
  return (targetOrPrototype, propertyKey, _descriptor) => {
    const directive = { nameOrDefinition: "", args: {} };

    if (typeof propertyKey === "symbol") {
      throw new SymbolKeysNotSupportedError();
    }
    if (propertyKey) {
      getMetadataStorage().collectDirectiveFieldMetadata({
        target: targetOrPrototype.constructor,
        fieldName: propertyKey,
        directive,
      });
    } else {
      getMetadataStorage().collectDirectiveClassMetadata({
        target: targetOrPrototype as Function,
        directive,
      });
    }
  };
}
