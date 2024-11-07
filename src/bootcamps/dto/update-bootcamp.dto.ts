import { CreateBootcampDto } from './create-bootcamp.dto';
import { PartialType } from '@nestjs/mapped-types';
export class UpdateBootcampDto extends PartialType(CreateBootcampDto) {
    readonly name?:string;
    readonly phone?:number;
    readonly address?:string;
    readonly averageRating?:number;
    readonly CreatedAt?:Date;

}
