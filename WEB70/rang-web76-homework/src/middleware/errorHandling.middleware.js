import { ResponseDTO } from "../dto/response.dto.js";
import { BaseError } from "../error/base.error.js";
import { CommonUtils } from "../utils/common.util.js";

export const errorHandler = (err, _, res, a) => {
  const status =
    CommonUtils.checkNullOrUndefined(err) && err instanceof BaseError
      ? err.statusCode
      : 500;
  const essMsg =
    status >= 500 ? "There were some errors in server" : err.message;
  return res.status(status).json(new ResponseDTO(null, essMsg));
};
