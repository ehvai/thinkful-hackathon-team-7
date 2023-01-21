const service = require("../../user/user.service");

async function userEmailPasswordValidated(req, res, next) {
  const user = await service.validate(req.body.data.user_email);

  if (user) {
    if (user.user_password == req.body.data.user_password) {
      res.locals.user = user;
      return next();
    }
    return next({
      status: 404,
      message: `${req.body.data.user_password} does not match`,
    });
  }

  return next({
    status: 404,
    message: `${req.body.data.user_email} not found`,
  });
}

module.exports = userEmailPasswordValidated;
