import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString, Max } from "class-validator";


export class CreateCategoryDto{
    
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

} 
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {

}