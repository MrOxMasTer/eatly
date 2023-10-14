import { AddRoleToUserSchema } from 'contracts';
import { createZodDto } from 'nestjs-zod';

export class AddRoleDto extends createZodDto(AddRoleToUserSchema) {}
