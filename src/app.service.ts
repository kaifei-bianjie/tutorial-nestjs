import { Injectable } from '@nestjs/common';
import { TxService } from './service/tx.service';
import { GetTxReqDto } from './dto/get.tx.req.dto';

@Injectable()
export class AppService {
  constructor(private txService: TxService) {

  }

  getHello(): string {
    let reqDto = new GetTxReqDto();
    let resDto = this.txService.getTxList(reqDto);
    return JSON.stringify(resDto);
  }
}
