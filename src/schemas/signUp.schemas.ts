import { z } from "zod";

export const ZodUsernameSchema = z
  .string()
  .min(2, { message: "Username is too short" })
  .max(20, { message: "Username too long" });

export const ZodUserEmailSchema = z
  .string()
  .email()
  .regex(/^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i, {
    message: "Invalid Email",
  });

const ZodSignUpSchema = z.object({
  username: ZodUsernameSchema,
  email: ZodUserEmailSchema,
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters long" })
    .max(16, { message: "Password must be below 16 characters long" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
      {
        message:
          "Password must contain at least one uppercase, lowercase, digit and special character each",
      }
    ),
});

export default ZodSignUpSchema;
