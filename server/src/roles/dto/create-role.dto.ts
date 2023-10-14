import { CreateRoleSchema } from 'contracts';
import { createZodDto } from 'nestjs-zod';

export class CreateRoleDto extends createZodDto(CreateRoleSchema) {}
