import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"
import { Document, Types } from "mongoose"
import { category, categorySchema } from "./category.entity";
import { Sponsor } from './../../sponsor/entities/sponsor.entity';
import { IsMongoId } from "class-validator";

@Schema()
export class Bootcamp {

    @Prop()
    name: string;
    @Prop()
    phone: number;
    @Prop()
    address: string;
    @Prop()
    averageRating: number;
    @Prop()
    cratedAt: Date;

@Prop({
    type: categorySchema,
    required: true
})
    category: category;

    @Prop({
        type: Types.ObjectId,
        ref: Sponsor.name}
    )
    sponsor: Sponsor| Types.ObjectId

    @Prop(
        {type: [{
        name:{type: String}},
         {color:{Type: String}}
        ]})
    skills : Types.Array<Record<string, any>>

}

export const BootcampSchema = SchemaFactory.createForClass(Bootcamp);