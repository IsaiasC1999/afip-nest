import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AfipModule } from './afip/afip.module';

@Module({
  imports: [AfipModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
