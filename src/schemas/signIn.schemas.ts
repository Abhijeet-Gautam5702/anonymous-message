import { z } from "zod";
import { ZodUserEmailSchema } from "./signUp.schemas";

const ZodSignInSchema = z.object({
  email: ZodUserEmailSchema,
  password: z.string(),
});

export default ZodSignInSchema;
