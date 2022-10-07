import { Controller, Get } from "@tsed/common";
import { getSpec, SpecTypes } from "@tsed/schema";

@Controller("/")
export class DemoCtrl {
  @Get("/.schema")
  get() {
    // return getJsonSchema(Product, {customKeys, groups});
    const spec = getSpec(DemoCtrl, { specType: SpecTypes.OPENAPI });
    console.log(spec);
    return spec;
  }
}
