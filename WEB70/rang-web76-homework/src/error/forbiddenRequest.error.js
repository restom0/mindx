import { BaseError } from "./base.error.js";

export class ForBiddenRequest extends BaseError {
  constructor(message) {
    super(message);
    this.statusCode = 403;
  }
}
