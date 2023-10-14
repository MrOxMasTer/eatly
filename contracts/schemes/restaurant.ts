import z from "zod";

export const AddStatustRestaurantSchema = z.object({
  restaurantId: z.string(),
  statusValue: z.string(),
});

export type AddStatustRestaurant = z.infer<typeof AddStatustRestaurantSchema>;

export const CreateRestaurantSchema = z.object({
  id: z.string(),
  title: z.string(),
  deliveryTime: z.number().optional(),
  status: z.string().optional(),
});

export type CreateRestaurant = z.infer<typeof CreateRestaurantSchema>;

export const GetRestaurantsByFormSchema = z.object({
  category: z.string().optional(),
  recomended: z.string().optional(),
  mostPopular: z.string().optional(),
  price: z.number().optional(),
  search: z.string().optional(),
});

export type GetRestaurantsByForm = z.infer<typeof GetRestaurantsByFormSchema>;
