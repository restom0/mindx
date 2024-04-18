import { ERROR_MSG } from "../constants/errorMessage.constant.js";
import { BadRequestError } from "../error/BadRequest.error.js";
import { CommonUtils } from "../utils/common.util.js";
import { BaseDTO } from "./base.dto.js";

export class CommentDTO extends BaseDTO {
  constructor(comment) {
    if (
      !("content" in comment) &&
      CommonUtils.checkNullOrUndefined(comment.content)
    ) {
      throw BadRequestError(ERROR_MSG.INVALID_REQ);
    }

    this.id = CommonUtils.checkNullOrUndefined(comment.id) ? comment.id : null;
    this.content = comment.content;
    this.postId = CommonUtils.checkNullOrUndefined(comment.postId)
      ? comment.postId
      : null;
    this.authorId = CommonUtils.checkNullOrUndefined(comment.authorId)
      ? comment.authorId
      : null;
  }
  static toDTO(comment) {
    if (!comment || !comment.content) {
      throw new BadRequestError(ERROR_MSG.INVALID_REQ);
    }

    return new CommentDTO({
      id: CommonUtils.checkNullOrUndefined(comment.id) ? comment.id : null,
      content: comment.content,
      postId: CommonUtils.checkNullOrUndefined(comment.postId)
        ? comment.postId
        : null,
      authorId: CommonUtils.checkNullOrUndefined(comment.authorId)
        ? comment.authorId
        : null,
    });
  }
}
