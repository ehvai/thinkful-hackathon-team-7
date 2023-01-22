const service = require("../../user/user.service");

async function userIdExists(req, res, next) {
  const { user_id } = req.params;
  const user = await service.validateUser(user_id);

  if (user) {
    return next();
  }

  return next({ status: 404, message: `${user_id} not found` });
}

module.exports = userIdExists;
