import { BootcampsModule } from './bootcamps.module';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Bootcamp } from './entities/bootcamp.entity';

@Injectable()
export class BootcampsService {


  constructor(@InjectModel(Bootcamp.name) private BootcampsModule: Model< Bootcamp>) {}
  
  async create(createBootcampDto: CreateBootcampDto) {
    const newBootcamp =  new this.BootcampsModule(createBootcampDto);
    try{
      return await newBootcamp.save();
    }
    catch(error){
      throw new BadRequestException(
        `Error al guardar:${error}`
      )
    }
    
  }

  async findAll() {
    return await this.BootcampsModule.find().populate('category').exec();
  }

  findOne(id: string) {
    return this.BootcampsModule.find({_id:id}).exec();
  }

  update(id: string, updateBootcampDto: UpdateBootcampDto) {
    return this.BootcampsModule.findByIdAndUpdate (id, {$set: updateBootcampDto}).exec();
  }

  remove(id: string) {
    return `This action removes a #${id} bootcamp`;
  }
}
