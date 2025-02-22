const joi = require('joi');

const authenticate = joi.object({
  username: joi.string().required(),
  password: joi.string().required()
});

module.exports = {
  authenticate
};
