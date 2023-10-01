import { z } from 'zod';

export type TDisheId = string | number;

export type TDisheStatus = 'healthy' | 'trending' | 'supreme';

export const SDishe = z.object({
    id: z.union([z.string(), z.number()]),
    status: z.string(),
    src: z.string(),
    title: z.string(),
    deliveryTime: z.number(),
    rating: z.number(),
    price: z.number(),
});

export type TDishe = z.infer<typeof SDishe>;
