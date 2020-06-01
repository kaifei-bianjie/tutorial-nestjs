import { GetTxReqDto } from '../dto/get.tx.req.dto';
import { GetTxResDto } from '../dto/get.tx.res.dto';
import { CoinDto } from '../dto/base.dto';
import { Injectable } from '@nestjs/common';
import { CustomException } from '../exception/custom.exception';

@Injectable()
export class TxService {

  /**
   * get tx list
   *
   * @param reqDto
   */
  getTxList(reqDto: GetTxReqDto): GetTxResDto[] {
    // get request dto
    console.log(reqDto);

    if (!reqDto.count) {
      throw new CustomException({
        code: '400',
        msg: 'count must not be false',
      });
    }

    let resDto = [];
    let txRes1 = new GetTxResDto();

    txRes1.signer = 'iaa1z8wrnv35mmezpseym0jy7lngvsan2alwx9g2l5';
    txRes1.hash = '1A08BA3CBEE04CCA9F406F61D4C778B7CA0D06EE7D5FFFB8CFA953E2DB7BECE6';
    txRes1.block_height = 5669812;
    txRes1.type = 'WithdrawDelegatorReward';
    txRes1.fee = new CoinDto({ denom: 'iris-atto', amount: 35430000000000000 });

    resDto.push(txRes1);
    return resDto;
  }

}