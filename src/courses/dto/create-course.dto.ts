import { IsNotEmpty } from "class-validator";
export class CreateCourseDto {
    @IsNotEmpty()

    readonly title : string;
    readonly description : string;
    readonly weeks : number;
    readonly tuition : number;
    readonly minimunSkill : string;
    readonly createdAt : Date;
}
