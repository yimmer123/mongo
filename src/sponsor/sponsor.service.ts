import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sponsor } from './entities/sponsor.entity';
import { SponsorModule } from './sponsor.module';

@Injectable()
export class SponsorService {
  constructor(@InjectModel(Sponsor.name) private SponsorModule: Model< Sponsor>) {}
  
  
  async create(CreateSponsorDto: CreateSponsorDto){
  const newSponsor =  new this.SponsorModule(CreateSponsorDto);
  try{
    return await newSponsor.save();
  }
  catch(error){
    throw new BadRequestException(
      `Error al guardar:${error}`
    )
  }
  }

  async findAll() {
    return await this.SponsorModule.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} sponsor`;
  }

  update(id: number, updateSponsorDto: UpdateSponsorDto) {
    return `This action updates a #${id} sponsor`;
  }

  remove(id: number) {
    return `This action removes a #${id} sponsor`;
  }
}
