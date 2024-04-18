import { SERVER_CONFIG } from "../configs/server.config.js";
import { USER_ROLE } from "../constants/role.constant.js";
import { UnAuthorizeRequest } from "../error/unauthorizeRequest.error.js";
import { CommonUtils } from "../utils/common.util.js";

export const checkApiKey = (req, res, next) => {
  const reqApiKey = req.headers.get("Authorization");
  if (CommonUtils.checkNullOrUndefined(reqApiKey)) {
    throw new UnAuthorizeRequest("Not found api key");
  }
  if (reqApiKey === SERVER_CONFIG.KEY_ROLE_MAPPING.SECRET_API_KEY_FOR_ALL.key) {
    req.isAuthenticated = true;
    req.role = SERVER_CONFIG.KEY_ROLE_MAPPING.SECRET_API_KEY_FOR_ALL.roles;
    next();
  }
  if (
    reqApiKey ===
    SERVER_CONFIG.KEY_ROLE_MAPPING.SECRET_API_KEY_FOR_ONLY_POST.key
  ) {
    req.isAuthenticated = true;
    req.role =
      SERVER_CONFIG.KEY_ROLE_MAPPING.SECRET_API_KEY_FOR_ONLY_POST.roles;
    next();
  }
  if (
    reqApiKey ===
    SERVER_CONFIG.KEY_ROLE_MAPPING.SECRET_API_KEY_FOR_ONLY_USER.key
  ) {
    req.isAuthenticated = true;
    req.role =
      SERVER_CONFIG.KEY_ROLE_MAPPING.SECRET_API_KEY_FOR_ONLY_USER.roles;
    next();
  }
  throw new UnAuthorizeRequest("Invalid api key");
};
