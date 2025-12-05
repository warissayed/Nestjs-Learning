import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { XzenModule } from './xzen/xzen.module';

@Module({
  imports: [XzenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
