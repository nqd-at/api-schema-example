import { z } from "zod";

export default z.object({
  id: z.number().optional(),
  email: z.string().email().optional(),
  name: z.string().optional(),
  status: z.any().optional(),
});
