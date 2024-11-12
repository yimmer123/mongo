import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from "mongoose"

@Schema()
export class Sponsor extends Document {
    
    @Prop({required: true,unique: true})
    name: string;

    @Prop({required: true,unique: true})
    nit: string;
}
export const SponsorSchema = SchemaFactory.createForClass(Sponsor);
