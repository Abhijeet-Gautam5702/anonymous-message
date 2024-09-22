import { z } from "zod";

const ZodMessageSchema = z.object({
  content: z
    .string()
    .min(30, { message: "Message content must be 30-300 characters long" })
    .max(300, { message: "Message content must be 30-300 characters long" }),
});

export default ZodMessageSchema;
