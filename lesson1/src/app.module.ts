import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DoctorController } from './doctor/doctor.controller';
import { DoctorService } from './doctor/doctor.service';
import { DoctorModule } from './doctor/doctor.module';

@Module({
  imports: [UserModule, DoctorModule],
  controllers: [AppController, DoctorController],
  providers: [AppService, DoctorService],
})
export class AppModule {}
