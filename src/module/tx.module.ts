import { Module } from '@nestjs/common';
import { TxController } from '../controller/tx.controller';
import { TxService } from '../service/tx.service';

@Module({
  controllers: [TxController],
  providers: [TxService],
  exports: [TxService],
})
export class TxModule {

}