import { z } from 'zod';

// z.union([z.string(), z.string().array()]).optional()

export const SFormMenu = z.object({
    category: z.string().optional(),
    recomended: z.number().optional(),
    mostPopular: z.number().optional(),
    price: z.number().optional(),
    search: z.string().optional(),
    appearance: z.string().optional(),
});

export type TFormMenu = z.infer<typeof SFormMenu>;

export interface TFormMenuLite extends Omit<TFormMenu, 'appearance'> {}
