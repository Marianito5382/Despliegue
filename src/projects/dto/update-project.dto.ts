import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';
import {
    IsInt,
    IsOptional,
    IsPositive,
    IsString,
    MinLength,
  } from 'class-validator';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {

    @IsString()
    @MinLength(1)
    titulo: string;
    
    @IsString()
    @MinLength(1)
    cuerpo: string;
}

