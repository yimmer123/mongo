import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema()
export class Course {

    @Prop()
    title: string;
    @Prop()
    desciption: string;
    @Prop()
    weeks: number;
    @Prop()
    tuition: number;
    @Prop()
    minimunSkill: string;
    @Prop()
    createdAt: Date;
}

export const CourseSchema = SchemaFactory.createForClass(Course);