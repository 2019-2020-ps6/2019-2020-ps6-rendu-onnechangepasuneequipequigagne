const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('User', {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  profilePicture: Joi.string(),
  quizzesId: Joi.array(),
  quizzesHistorical: Joi.array(),
})
