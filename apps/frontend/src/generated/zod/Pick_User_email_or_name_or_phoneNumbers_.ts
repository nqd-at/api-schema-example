import { z } from "zod";

export default z
  .object({
    email: z.string().regex(new RegExp("/[a-z0-9]+/")).optional(),
    name: z.string().optional(),
    phoneNumbers: z.array(z.any()).optional(),
  })
  .describe("From T, pick a set of properties whose keys are in the union K");
