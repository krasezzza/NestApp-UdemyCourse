import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateOfferDto {
  @IsNumber()
  ownerId: number;

  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsNumber()
  @Min(1900)
  @Max(new Date().getFullYear())
  year: number;

  @IsNumber()
  @Min(0)
  @Max(1000000)
  mileage: number;

  @IsString()
  description: string;

  @IsString()
  location: string;

  @IsNumber()
  @Min(0)
  @Max(1000000)
  price: number;
}
