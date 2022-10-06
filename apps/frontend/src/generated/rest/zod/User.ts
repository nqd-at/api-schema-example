import { z } from "zod";

export default z.object({
  id: z.number().optional(),
  email: z.string().email().min(1).optional(),
  name: z.string().min(1).optional(),
  status: z.any().optional(),
  phoneNumbers: z.array(z.any()).optional(),
});
