import { CoinDto } from './base.dto';

export class GetTxResDto {
  signer: string;
  hash: string;
  block_height: number;
  type: string;
  fee: CoinDto;
}