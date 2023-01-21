const service = require("../../comment/comment.service");

async function commentIdExists(req, res, next) {
  const { comment_id } = req.body.data;
  const comment = await service.read(comment_id);

  if (comment) {
    res.locals.comment = comment;
    return next();
  }

  return next({ status: 404, message: `${comment_id} not found` });
}

module.exports = commentIdExists;
