import { z } from "zod";

export default z.object({
  name: z.string().min(1).optional(),
  email: z.string().email().min(1).optional(),
});
