import { Body, Headers, HttpStatus, Post, Res, Controller, UseFilters } from '@nestjs/common';
import { GetTxReqDto } from '../dto/get.tx.req.dto';
import { TxService } from '../service/tx.service';
import { CustomExceptionFilter } from '../exception/custom.exception.filter';
import { CustomException } from '../exception/custom.exception';

@Controller('/txs')
export class TxController {
  constructor(private readonly txService: TxService) {
  }

  @Post('')
  getTxList(@Headers('content-type') a: string, @Body() reqDto: GetTxReqDto, @Res() res): string {
    if (reqDto.pageSize === 0 || reqDto.pageNum === 0) {
      throw new CustomException({ code: '400', msg: 'bad request' });
    } else {
      console.log(JSON.stringify(reqDto));
    }
    let resDto = this.txService.getTxList(reqDto);
    return res.status(HttpStatus.OK).json(resDto);
  }
}