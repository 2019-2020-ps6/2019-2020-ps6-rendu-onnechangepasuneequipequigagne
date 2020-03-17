const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Question', {
    label: Joi.string().required(),
    imageURL: Joi.string(),
    answers: Joi.array(),
    quizId: Joi.number().required(),
})
