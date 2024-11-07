import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema()
export class User {

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
}

export const UserSchema = SchemaFactory.createForClass(User);