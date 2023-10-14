import { CreateDisheSchema } from 'contracts';
import { createZodDto } from 'nestjs-zod';

export class CreateDisheDto extends createZodDto(CreateDisheSchema) {}
