import { CreateRestaurantSchema } from 'contracts';
import { createZodDto } from 'nestjs-zod';

export class CreateRestaurantDto extends createZodDto(CreateRestaurantSchema) {}
