const service = require("../user/user.service");

async function userIdExists(req, res, next) {
  const user = await service.read(req.params.user_id);

  if (user) {
    res.locals.user = user;
    return next();
  }

  return next({ status: 404, message: `${req.params.user_id} not found` });
}

module.exports = userIdExists;
