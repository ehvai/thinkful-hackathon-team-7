const service = require("./user.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const userIdExists = require("../validations/user/userIdExists");
const hasProperties = require("../validations/hasProperties");
const userExists = require("../validations/user/userExists");
const userEmailPasswordValidated = require("../validations/user/userEmailPasswordValidated");

const REQUIRED_PROPERTIES = ["user_alias", "user_password", "user_email"];
const hasRequiredProperties = hasProperties(REQUIRED_PROPERTIES);

// A complete list of users ONLY FOR TESTING PURPOSES - This functionality is not for integration in the front end.
async function list(req, res) {
  const users = await service.list();
  res.json({ data: users });
}

// Returns a single user as requested by the user_id.  If no ID is provided, an error message is returned via the userIdExists validation.
async function read(req, res) {
  const { user_id } = res.locals.user;
  const user = await service.read(user_id);
  res.json({ data: user });
}

async function verifyLogin(req, res) {
  res.json({ data: res.locals.user });
}

// Creates a single user.  No user_id is required, it is generated.  If properties are missing or invalid, it returns an error message per validations.
async function create(req, res) {
  const user = await service.create(req.body.data);
  res.status(201).json({ data: user });
}

// Updates a single user.  User_id is required.
async function update(req, res) {
  const user = await service.update(req.body.data);
  res.json({ data: user });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(userIdExists), read],
  verifyLogin: [asyncErrorBoundary(userEmailPasswordValidated), verifyLogin],
  create: [
    hasRequiredProperties,
    asyncErrorBoundary(userExists),
    asyncErrorBoundary(create),
  ],
  update: [
    asyncErrorBoundary(userIdExists),
    hasRequiredProperties,
    asyncErrorBoundary(update),
  ],
};
