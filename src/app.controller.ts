import { Body, Controller, Get, Headers, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { GetTxReqDto } from './dto/get.tx.req.dto';
import { Form } from 'multiparty';

@Controller('/test')
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
