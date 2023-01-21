const service = require("../../user/user.service");

async function userExists(req, res, next) {
  const user = await service.validateEmail(req.body.data.user_email);

  if (user) {
    return next({ status: 404, message: `${user.user_email} exists` });
  }

  return next();
}

module.exports = userExists;
