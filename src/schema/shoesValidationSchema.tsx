import { z } from "zod";

export const shoesValidationSchema = z.object({
  name: z.string({ required_error: "This feild is required" }),
  price: z.string({ required_error: "This feild is required" }),
  quantity: z.string({ required_error: "This feild is required" }),
  releaseDate: z.string({ required_error: "This feild is required" }),
  brand: z.string({ required_error: "This feild is required" }),
  model: z.string({ required_error: "This feild is required" }),
  style: z.string({ required_error: "This feild is required" }),
  size: z.string({ required_error: "This feild is required" }),
  color: z.string({ required_error: "This feild is required" }),
  shoesImage: z.string({ required_error: "This feild is required" }),
});
