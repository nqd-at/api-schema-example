import { z } from "zod";

export default z.object({
  id: z.number().optional(),
  email: z.string().regex(new RegExp("/[a-z0-9]+/")).optional(),
  name: z.string().optional(),
  status: z.any().optional(),
  phoneNumbers: z.array(z.any()).optional(),
});
