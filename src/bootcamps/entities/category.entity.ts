import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class category extends Document{
    
    @Prop({required: true})
    name: string;
    
    @Prop()
    description: string;
}
export const categorySchema = SchemaFactory.createForClass(category)