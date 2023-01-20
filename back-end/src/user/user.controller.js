const service = require("./user.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const userIdExists = require("../validations/userIdExists");
const hasProperties = require("../validations/hasProperties");
const userExists = require("../validations/userExists");

const REQUIRED_PROPERTIES = ["user_login", "user_password", "user_email"];
const hasRequiredProperties = hasProperties(REQUIRED_PROPERTIES);

// Returns a single user as requested by the user_id.  If no ID is provided, an error message is returned via the userIdExists validation.
async function read(req, res) {
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
  read: [asyncErrorBoundary(userIdExists), read],
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
