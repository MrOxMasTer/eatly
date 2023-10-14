import z from "zod";

export const CreateRoleSchema = z
  .object({
    description: z.string(),
    value: z.string(),
  })
  .required();

export type CreateRole = z.infer<typeof CreateRoleSchema>;
