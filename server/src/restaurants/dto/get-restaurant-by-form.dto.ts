import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetRestaurantsByForm {
  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  recomended?: string;

  @IsString()
  @IsOptional()
  mostPopular?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  search?: string;
}
