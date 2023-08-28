import { IsString, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name?: string;
  price?: number;
  description?: string;
  image?: string;
}