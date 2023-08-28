import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  name?: string;
  price?: number;
  description?: string;
  image?: string;
  category?: string;
  menu?: string;
}