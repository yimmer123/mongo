import { IsNotEmpty, IsAlpha, IsInt, Min, Max, IsPositive, ValidateNested, IsMongoId, IsArray, } from "class-validator";
import { CreateCategoryDto } from "./category.dtos";
import {Type} from 'class-transformer';
import { Sponsor } from './../../sponsor/entities/sponsor.entity';
export class CreateBootcampDto {

    @IsNotEmpty()
    readonly name:string;

    @IsNotEmpty()
    @IsPositive()
    readonly phone:number;
    readonly address:string;
    @IsInt()
    @IsNotEmpty()
    @Min(1)
    @Max(10)
    readonly averageRating:number;
    
    readonly CreatedAt:Date;

    @IsNotEmpty()
    @ValidateNested()
    @Type(()=>CreateCategoryDto)
    readonly category:CreateCategoryDto;

    @IsMongoId()
    @IsNotEmpty()
    sponsor:string;

    @IsNotEmpty()
    @IsArray()
    readonly skills: any[]
}
