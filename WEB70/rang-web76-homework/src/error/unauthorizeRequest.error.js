import { BaseError } from "./base.error.js";

export class UnAuthorizeRequest extends BaseError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}
