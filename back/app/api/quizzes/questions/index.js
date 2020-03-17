const { Router } = require('express')

const { Question } = require('../../../models')

const { Answer } = require('../../../models')

const NotFoundError = require('../../../utils/errors/not-found-error')

const AnswerRouter = require('./answers')

const router = new Router({mergeParams: true})


router.get('/', (req, res) => {
    try {
        let questions = Question.get().filter((question) => question.quizId ===  parseInt(req.params.quizId))
        questions.forEach(function (question) {
            question.answers = Answer.get().filter((answer) => answer.questionId === question.id)
        })
        res.status(200).json(questions)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:questionId', (req, res) => {
    try {
        let question = Question.getById(req.params.questionId)
        if(question.quizId ===  parseInt(req.params.quizId)) {
            question.answers = Answer.get().filter((answer) => answer.questionId === parseInt(req.params.questionId))
            res.status(200).json(question)
        }
        else {
            throw new NotFoundError(`Question not found`)
        }
    } catch (err) {
        res.status(404).json(err)
    }
})

router.post('/', (req, res) => {
    try {
        const question = Question.create({ ...req.body,quizId : parseInt(req.params.quizId)})
        res.status(201).json(question)
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json(err.extra)
        } else {
            res.status(500).json(err)
        }
    }
})

router.put('/:questionId', (req, res) => {
    try {
        let question = Question.getById(req.params.questionId)
        if(question.quizId ===  parseInt(req.params.quizId)) {
            res.status(200).json(Question.update(req.params.questionId,req.body))
        }
        else {
            throw new NotFoundError(`Question not found`)
        }
    } catch (err) {
        res.status(404).json(err)
    }
})

router.delete('/:questionId', (req, res) => {
    try {
        let question = Question.getById(req.params.questionId)
        if(question.quizId ===  parseInt(req.params.quizId)) {
            let answers = Answer.get().filter((answer) => answer.questionId === parseInt(req.params.questionId))
            answers.forEach(function (answer) {
                Answer.delete(answer.id)
            })
            res.status(200).json(Question.delete(req.params.questionId))
        }
        else {
            throw new NotFoundError(`Question not found`)
        }
    } catch (err) {
        res.status(404).json(err)
    }
})

router.use('/:questionId/answers',AnswerRouter)

module.exports = router
