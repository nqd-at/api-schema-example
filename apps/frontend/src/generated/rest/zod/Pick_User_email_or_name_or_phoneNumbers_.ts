import { z } from "zod";

export default z
  .object({
    email: z.string().email().min(1).optional(),
    name: z.string().min(1).optional(),
    phoneNumbers: z.array(z.any()).optional(),
  })
  .describe("From T, pick a set of properties whose keys are in the union K");
