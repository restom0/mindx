import { USER_ROLE } from "../constants/role.constant";

export const SERVER_CONFIG = {
  PORT: process.env.SERVER_PORT || 1113,
  RESOURCES: {
    USER: {
      CONTEXT_PATH: "/users",
    },
    POST: {
      CONTEXT_PATH: "/posts",
    },
    POST: {
      CONTEXT_PATH: "/comments",
    },
  },
  KEY_ROLE_MAPPING: {
    SECRET_API_KEY_FOR_ALL: {
      key: process.env.SECRET_API_KEY_FOR_ALL || "",
      roles: [USER_ROLE.USER, USER_ROLE.POST],
    },
    SECRET_API_KEY_FOR_ONLY_POST: {
      key: process.env.SECRET_API_KEY_FOR_ONLY_POST || "",
      roles: [USER_ROLE.POST],
    },
    SECRET_API_KEY_FOR_ONLY_USER: {
      key: process.env.SECRET_API_KEY_FOR_ONLY_USER || "",
      roles: [USER_ROLE.USER],
    },
  },
};
