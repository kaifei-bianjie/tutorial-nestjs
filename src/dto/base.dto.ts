export class CoinDto {
  denom: string;
  amount: number;

  constructor({ denom, amount }) {
    this.denom = denom;
    this.amount = amount;
  }
}

export class BaseResponse {
  code: string;
  msg: string;
  data: any;
}