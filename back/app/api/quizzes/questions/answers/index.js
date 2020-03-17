const { Router } = require('express')

const NotFoundError = require('../../../../utils/errors/not-found-error')

const { Answer } = require('../../../../models')

const router = new Router({mergeParams: true})


router.get('/', (req, res) => {
    try {
        let answers = Answer.get().filter((answer) => answer.questionId ===  parseInt(req.params.questionId))
        res.status(200).json(answers)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:answerId', (req, res) => {
    try {
        let answer = Answer.getById(req.params.answerId)
        if(answer.questionId ===  parseInt(req.params.questionId)) {
            res.status(200).json(answer)
        }
        else {
            throw new NotFoundError(`Answer not found`)
        }
    } catch (err) {
        res.status(404).json(err)
    }
})

router.post('/', (req, res) => {
    try {
        const answer = Answer.create({ ...req.body,questionId : parseInt(req.params.questionId)})
        res.status(201).json(answer)
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json(err.extra)
        } else {
            res.status(500).json(err)
        }
    }
})

router.put('/:answerId', (req, res) => {
    try {
        let answer = Answer.getById(req.params.answerId)
        if(answer.questionId ===  parseInt(req.params.questionId)) {
            res.status(200).json(Answer.update(req.params.answerId,req.body))
        }
        else {
            throw new NotFoundError(`Answer not found`)
        }
    } catch (err) {
        res.status(404).json(err)
    }
})

router.delete('/:answerId', (req, res) => {
    try {
        let answer = Answer.getById(req.params.answerId)
        if(answer.questionId ===  parseInt(req.params.questionId)) {
            res.status(200).json(Answer.delete(req.params.answerId))
        }
        else {
            throw new NotFoundError(`Answer not found`)
        }
    } catch (err) {
        res.status(404).json(err)
    }
})


module.exports = router
