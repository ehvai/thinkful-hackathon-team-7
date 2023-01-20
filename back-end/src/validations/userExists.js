const service = require("../user/user.service");

async function userExists(req, res, next) {
  const user = await service.list();

  if (user.user_email) {
    return next({ status: 404, message: `${user.user_email} exists` });
  }

  return next();
}

module.exports = userExists;
