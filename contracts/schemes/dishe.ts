import { z } from "zod";

export const CreateDisheSchema = z.object({
  title: z.string(),
  price: z.number(),
  restaurantId: z.string(),
  deliveryTime: z.number(),
  status: z.string().optional(),
});

export type CreateDishe = z.infer<typeof CreateDisheSchema>;

export const GetDishesByFormSchema = z.object({
  category: z.string(),
  recomended: z.string(),
  mostPopular: z.string(),
  price: z.number(),
  search: z.string(),
});

export type GetDishesByForm = z.infer<typeof GetDishesByFormSchema>;
