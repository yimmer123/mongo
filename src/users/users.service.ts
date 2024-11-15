import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UsersModule } from './users.module';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
   
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
