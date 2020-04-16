const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('SuperUser', {
    login: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
})
