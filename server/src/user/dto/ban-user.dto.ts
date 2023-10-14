import { BanUserSchema } from 'contracts';
import { createZodDto } from 'nestjs-zod';

export class BanUserDto extends createZodDto(BanUserSchema) {}
