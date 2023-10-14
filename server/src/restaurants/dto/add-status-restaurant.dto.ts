import { AddStatustRestaurantSchema } from 'contracts';
import { createZodDto } from 'nestjs-zod';

export class AddStatustRestaurant extends createZodDto(
  AddStatustRestaurantSchema,
) {}
