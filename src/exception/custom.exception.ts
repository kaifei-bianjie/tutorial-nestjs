export class CustomException {
  code: string;
  msg: string;

  constructor({ code, msg }) {
    this.code = code;
    this.msg = msg;
  }
}