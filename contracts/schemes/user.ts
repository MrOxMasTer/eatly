import z, { string } from "zod";

export const CreateUserSchema = z.object({
  email: string().email().describe("Почта"),
  name: string().length(4).describe("Имя пользователя"),
  password: string().describe("Пароль пользователя"),
});

export type CreateUser = z.infer<typeof CreateUserSchema>;

export const AddRoleToUserSchema = z.object({
  value: string(),
  userId: string(),
});

export type AddRoleToUser = z.infer<typeof AddRoleToUserSchema>;

export const BanUserSchema = z.object({
  userId: string(),
  banReason: string(),
});
