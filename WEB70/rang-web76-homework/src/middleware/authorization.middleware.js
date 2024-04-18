import { SERVER_CONFIG } from "../configs/server.config.js";
import { USER_ROLE } from "../constants/role.constant.js";
import { ForBiddenRequest } from "../error/forbiddenRequest.error.js";
import { UnAuthorizeRequest } from "../error/unauthorizeRequest.error.js";
import { CommonUtils } from "../utils/common.util.js";

export const checkApiKey = (req, res, next) => {
  const reqApiKey = req.headers.get("Authorization");
  if (CommonUtils.checkNullOrUndefined(reqApiKey)) {
    throw new UnAuthorizeRequest("Not found api key");
  }
  if (reqApiKey === SERVER_CONFIG.SECRET_API_KEY_FOR_ALL) {
    req.isAuthenticated = true;
    req.role = USER_ROLE.ADMIN;
    next();
  }
  if (reqApiKey === SERVER_CONFIG.SECRET_API_KEY_FOR_ONLY_POST) {
    req.isAuthenticated = true;
    req.role = USER_ROLE.USER;
    next();
  }
  throw new UnAuthorizeRequest("Invalid api key");
};
export const checkRoleFullAccess = (req, res, next) => {
  const { isAuthenticated, role } = req;
  if (!isAuthenticated) {
    throw new UnAuthorizeRequest("Invalid api key");
  }
  if (!CommonUtils.checkNullOrUndefined(role) && role === USER_ROLE.ADMIN) {
    next();
  }
  throw new ForBiddenRequest("Not admin");
};
export const checkRoleForOnlyPost = (req, res, next) => {
  const { isAuthenticated, role } = req;
  if (!isAuthenticated) {
    throw new ForBiddenRequest("Invalid api key");
  }
  if (
    !CommonUtils.checkNullOrUndefined(role) &&
    role === (USER_ROLE.ADMIN || USER_ROLE.POST)
  ) {
    next();
  }
  throw new ForBiddenRequest("Not post");
};
export const checkRoleForOnlyUser = (req, res, next) => {
  const { isAuthenticated, role } = req;
  if (!isAuthenticated) {
    throw new ForBiddenRequest("Invalid api key");
  }
  if (
    !CommonUtils.checkNullOrUndefined(role) &&
    role === (USER_ROLE.ADMIN || USER_ROLE.USER)
  ) {
    next();
  }
  throw new ForBiddenRequest("Not user");
};
// export const authorize(...roles) => {

// }
