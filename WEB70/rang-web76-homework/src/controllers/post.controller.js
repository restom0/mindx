import { ERROR_MSG } from "../constants/errorMessage.constant.js";
import { BadRequestError } from "../error/BadRequest.error.js";
import { BaseError } from "../error/base.error.js";
import { PostService } from "../service/post.service.js";
import { CommonUtils } from "../utils/common.util.js";
async function getAll(req, res) {
  try {
    res.json(await PostService.getAll());
  } catch (err) {
    console.error(`Error while get all user`, err.message);

    if (err instanceof BaseError) {
      res.status(err.statusCode);
    } else {
      res.status(500);
    }

    res.json({
      error: {
        msg: err.message,
      },
    });
  }
}

async function getById(req, res) {
  try {
    const id = req.params.id;
    if (CommonUtils.checkNullOrUndefined(id)) {
      throw new BadRequestError(ERROR_MSG.INVALID_REQ);
    }
    res.json(await PostService.getById());
  } catch (err) {
    console.error(`Error while get all user`, err.message);

    if (err instanceof BaseError) {
      res.status(err.statusCode);
    } else {
      res.status(500);
    }

    res.json({
      error: {
        msg: err.message,
      },
    });
  }
}
export const PostController = { getById, getAll };
