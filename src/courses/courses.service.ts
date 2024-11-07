import { CoursesModule } from './courses.module';
import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {

  constructor(@InjectModel(Course.name) private readonly courseModel: Model<Course>) {}

  create(createCourseDto: CreateCourseDto) {
    return 'This action adds a new course';
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
