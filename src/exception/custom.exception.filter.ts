import { ExceptionFilter, ArgumentsHost, HttpStatus, Catch } from '@nestjs/common';
import { BaseResponse } from '../dto/base.dto';
import { CustomException } from './custom.exception';

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  catch(e: CustomException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();

    let baseResponse = new BaseResponse();
    baseResponse.code = e.code;
    baseResponse.msg = e.msg;
    baseResponse.data = {};
    res.status(HttpStatus.OK).json(
      baseResponse,
    );
  }
}