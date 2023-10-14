import z, { string } from "zod";

export const CreateStatusSchema = z.object({
  value: string(),
});

export type CreateStatus = z.infer<typeof CreateStatusSchema>;
