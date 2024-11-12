import { CoursesModule } from './courses.module';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {

  constructor(@InjectModel(Course.name) private readonly courseModel: Model<Course>) {}

   async create(CreateCourseDto: CreateCourseDto) {
   const newCourses =  new this.courseModel(CreateCourseDto);
   try{
     return await newCourses.save();
   }
   catch(error){
     throw new BadRequestException(
       `Error al guardar:${error}`
     )
   }
   
 }
  

  async findAll() {
    return await this.courseModel.find().exec();
  }

  findOne(id: string) {
    return this.courseModel.find({_id:id}).exec();
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
