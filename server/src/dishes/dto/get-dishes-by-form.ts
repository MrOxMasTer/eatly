import { GetDishesByFormSchema } from 'contracts';
import { createZodDto } from 'nestjs-zod';

export class GetDishesByForm extends createZodDto(GetDishesByFormSchema) {}
