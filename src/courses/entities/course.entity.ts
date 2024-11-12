import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"
import { Document, Types } from "mongoose"

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


    @Prop(
        {type: [{
        name:{type: String},
        color:{type: String}}
        ]})
    skills : Types.Array<Record<string, any>>
}

export const CourseSchema = SchemaFactory.createForClass(Course);