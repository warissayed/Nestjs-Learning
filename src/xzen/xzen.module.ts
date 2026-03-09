import { Module } from '@nestjs/common';
import { XzenController } from './xzen.controller';
import { XzenService } from './xzen.service';

@Module({
  controllers: [XzenController],
  providers: [XzenService]
})
export class XzenModule {}
