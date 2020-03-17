const { Router } = require('express')

const { Quiz } = require('../../models')
const { Question } = require('../../models')
const { Answer } = require('../../models')

const QuestionsRouter = require('./questions')

const router = new Router()

router.get('/', (req, res) => {
  try {
    let quizzes = Quiz.get()
    quizzes.forEach(function (quiz) {
      let questions = Question.get().filter((question) => question.quizId === quiz.id)
      questions.forEach(function (question) {
        question.answers = Answer.get().filter((answer) => answer.questionId === question.id)
      })
      quiz.questions = questions
    })
    res.status(200).json(quizzes)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:quizId', (req, res) => {
  try {
      let quiz = Quiz.getById(req.params.quizId)
      let questions = Question.get().filter((question) => question.quizId === quiz.id)
      questions.forEach(function (question) {
      question.answers = Answer.get().filter((answer) => answer.questionId === question.id)
    })
      quiz.questions = questions
      res.status(200).json(quiz)
  } catch (err) {
    res.status(400).json(err)
  }
})

router.delete('/:quizId', (req, res) => {
  try {
    let questions  = Question.get().filter((question) => question.quizId === parseInt(req.params.quizId))
    questions.forEach(function (question) {
       let answers = Answer.get().filter((answer) => answer.questionId === question.id)
       answers.forEach(function (answer) {
        Answer.delete(answer.id)
      })
       Question.delete(question.id)
    })
    res.status(200).json(Quiz.delete(req.params.quizId))
  } catch (err) {
    res.status(400).json(err)
  }
})

router.put('/:quizId', (req, res) => {
  try {
    res.status(200).json(Quiz.update(req.params.quizId,req.body))
  } catch (err) {
    res.status(400).json(err)
  }
})

router.post('/', (req, res) => {
  try {
    const quiz = Quiz.create({ ...req.body })
    res.status(201).json(quiz)
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra)
    } else {
      res.status(500).json(err)
    }
  }
})

router.use('/:quizId/questions',QuestionsRouter)

module.exports = router
