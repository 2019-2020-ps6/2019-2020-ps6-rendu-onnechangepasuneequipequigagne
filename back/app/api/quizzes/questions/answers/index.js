const { Router } = require('express')

const { Answer } = require('../../../../models')

const router = new Router({mergeParams: true})

router.get('/', (req, res) => {
  try {
    res.status(200).json(Answer.get())
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:id', (req, res) => {
  try {
    res.status(200).json(Answer.getById(req.params.id));
  } catch (err) {
    res.status(500).json(err)
  }
})


router.post('/', (req, res) => {
  try {
    const answer = Answer.create({ ...req.body, questionId:parseInt(req.params.questionId)})
    res.status(201).json(answer)
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra)
    } else {
      res.status(500).json(err)
    }
  }
})

router.put('/:id', (req, res) => {
  try {
    res.status(200).json(Question.update(req.params.id, { ...req.body, quizId:parseInt(req.params.questionId)}))
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/:id', (req, res) => {
  try {
    res.status(200).json(Question.delete(req.params.id))
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
