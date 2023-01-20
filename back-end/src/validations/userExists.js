const service = require("../user/user.service");

async function userExists(req, res, next) {
  const user_list = await service.list();

  if (user_list.user_login) {
    return next({ status: 404, message: `${user_list.user_login} exists` });
  }
  if (user_list.user_email) {
    return next({ status: 404, message: `${user_list.user_email} exists` });
  }

  return next();
}

module.exports = userExists;
