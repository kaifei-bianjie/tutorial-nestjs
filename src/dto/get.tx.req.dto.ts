import { Injectable } from '@nestjs/common';

export class GetTxReqDto {
  readonly pageSize: number;
  pageNum: number;
  count: Boolean;
  txType: string;
  status: string;
  beginTime: string;
  endTime: string;
}