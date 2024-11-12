import { Module } from '@nestjs/common';
import { BootcampsService } from './bootcamps.service';
import { BootcampsController } from './bootcamps.controller';
import { Bootcamp, BootcampSchema } from './entities/bootcamp.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { category, categorySchema } from './entities/category.entity';
import { Sponsor, SponsorSchema } from 'src/sponsor/entities/sponsor.entity';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Bootcamp.name,
      schema: BootcampSchema
    }]),
    MongooseModule.forFeature([
      {name: category.name,
        schema: categorySchema
      }]),
      MongooseModule.forFeature([
        {name: Sponsor.name,
          schema: SponsorSchema
        }])

  ],
  controllers: [BootcampsController],
  providers: [BootcampsService],
})
export class BootcampsModule {}
