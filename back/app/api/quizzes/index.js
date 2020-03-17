const { Router } = require('express')

const { Quiz, Question, Answer } = require('../../models')
const QuestionRouter = require('./questions')

const router = new Router()

router.get('/', (req, res) => {
  try {
    var ok = []
    Quiz.get().forEach(quiz => {
      var questionsQuiz = []
      Question.get().forEach(question => {
        if (question.quizId == quiz.id){
          var answersQuestion = []
          Answer.get().forEach( answer =>{
            if (answer.questionId == question.id){
              answersQuestion.push(answer)
            }
          })
          questionsQuiz.push({...question, answer: answersQuestion})
        }
      });
      ok.push({...quiz, questions: questionsQuiz})
    })
    res.status(200).json(ok)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:id', (req, res) => {
  try {
    var questionsQuiz = []
    Question.get().forEach(question => {
      if (question.quizId == req.params.id){
        var answersQuestion = []
        Answer.get().forEach( answer =>{
          if (answer.questionId == question.id){
            answersQuestion.push(answer)
          }
        })
        questionsQuiz.push({...question, answer: answersQuestion})
      }
    });
    res.status(200).json({...Quiz.getById(req.params.id), questions: questionsQuiz})
  } catch (err) {
    res.status(500).json(err)
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

router.delete('/:quizId', (req, res) => {
  try {
    res.status(200).json(Quiz.delete(req.params.quizId))
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put('/:quizId', (req, res) => {
  try {
    res.status(200).json(Quiz.update(req.params.quizId, req.body))
  } catch (err) {
    res.status(500).json(err)
  }
})

router.use('/:quizId/questions', QuestionRouter)


module.exports = router
