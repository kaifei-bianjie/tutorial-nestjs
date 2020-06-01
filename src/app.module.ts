import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TxModule } from './module/tx.module';
import { APP_FILTER } from '@nestjs/core';
import { CustomExceptionFilter } from './exception/custom.exception.filter';

@Module({
  imports: [TxModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: CustomExceptionFilter,

    },
    AppService],
})
export class AppModule {
}
