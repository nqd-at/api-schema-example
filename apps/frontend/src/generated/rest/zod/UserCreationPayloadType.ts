import { z } from "zod";

export default z.object({
  email: z
    .string()
    .regex(new RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"))
    .email()
    .min(1)
    .optional(),
  name: z.string().min(1).optional(),
});
