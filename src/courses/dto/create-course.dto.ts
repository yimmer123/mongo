import { IsArray, IsNotEmpty } from "class-validator";
export class CreateCourseDto {
    
    
    @IsNotEmpty()
    readonly title : string;

    @IsNotEmpty()
    readonly description : string;

    @IsNotEmpty()
    readonly weeks : number;

    @IsNotEmpty()
    readonly tuition : number;

    @IsNotEmpty()
    readonly minimunSkill : string;

    @IsNotEmpty()
    readonly createdAt : Date;

    @IsNotEmpty()
    @IsArray()
    readonly skills: any[]
}
