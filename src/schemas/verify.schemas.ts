import { z } from "zod";

const ZodVerificationSchema = z
  .string()
  .length(6, { message: "Verification Code must be 6 characters long" });

export default ZodVerificationSchema;
