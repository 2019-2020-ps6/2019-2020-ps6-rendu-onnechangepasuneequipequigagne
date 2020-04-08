const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Historical', {
    userId: Joi.number().required(),
    quizId: Joi.string().required(),
    score: Joi.number().required(),
    date: Joi.string(),
})
