import { z } from "zod";

export const sellsValidationSchema = z.object({
  quantity: z.string({ required_error: "This feild is required" }),
  buyer: z.string({ required_error: "This feild is required" }),
  date: z.string({ required_error: "This feild is required" }),
});
