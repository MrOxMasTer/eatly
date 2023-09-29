import { z } from 'zod';

export const SFormMenu = z.object({
    category: z.string().optional(),
    recomended: z.string().optional(),
    mostPopular: z.string().optional(),
    price: z.number().optional(),
    search: z.string().optional(),
    appearance: z.string().optional(),
});

export type TFormMenu = z.infer<typeof SFormMenu>;

export interface TFormMenuLite extends Omit<TFormMenu, 'appearance'> {}
