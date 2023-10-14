import { CreateStatusSchema } from 'contracts';
import { createZodDto } from 'nestjs-zod';

export class CreateStatusDto extends createZodDto(CreateStatusSchema) {}
