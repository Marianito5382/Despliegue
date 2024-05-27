import {
    IsInt,
    IsOptional,
    IsPositive,
    IsString,
    MinLength,
  } from 'class-validator';
  

export class CreateProjectDto {
    @IsString()
    @MinLength(1)
    titulo: string;

    @IsString()
    @MinLength(1)
    cuerpo: string;
}
