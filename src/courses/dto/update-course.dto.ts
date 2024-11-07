import { CreateCourseDto } from './create-course.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    readonly title? : string;
    readonly description? : string;
    readonly weeks? : number;
    readonly tuition? : number;
    readonly minimunSkill? : string;
    readonly createdAt? : Date;
    
}
