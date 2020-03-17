const { Router } = require('express')

const { User } = require('../../models')

const router = new Router()

router.get('/', (req, res) => {
  try {
    res.status(200).json(User.get())
  } catch (err) {
    res.status(404).json(err)
  }
})

router.post('/', (req, res) => {
  try {
    const user = User.create({ ...req.body })
    res.status(201).json(user)
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(500).json(err.extra)
    } else {
      res.status(404).json(err)
    }
  }
})

router.get('/:id', (req, res) => {
  try {
    res.status(200).json(User.getById(req.params.id))
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/:id', (req, res) => {
  try {
    res.status(200).json(User.delete(req.params.id))
  } catch (err) {
    res.status(404).json(err)
  }
})

router.put('/:id', (req, res) => {
  try {
    res.status(200).json(User.update(req.params.quizId, req.body))
  } catch (err) {
    res.status(404).json(err)
  }
})

module.exports = router
