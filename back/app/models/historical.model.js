const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Historical', {
    userId: Joi.number().required(),
    quizId: Joi.number().required(),
    quizName: Joi.string().required(),
    score: Joi.string().required(),
    date: Joi.string(),
    answersOrder: Joi.array(),
})
