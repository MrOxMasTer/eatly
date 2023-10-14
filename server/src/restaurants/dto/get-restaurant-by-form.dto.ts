import { GetRestaurantsByFormSchema } from 'contracts';
import { createZodDto } from 'nestjs-zod';

export class GetRestaurantsByForm extends createZodDto(
  GetRestaurantsByFormSchema,
) {}
