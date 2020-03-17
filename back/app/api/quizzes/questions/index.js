const { Router } = require('express')

const { Question, Answer } = require('../../../models')


const router = new Router({mergeParams: true})
const AnswerRouter = require('./answers')

router.get('/', (req, res) => {
  try {
    var ok = []
    Question.get().forEach(question => {
      if (question.quizId == req.params.quizId){
        var answersQuestion = []
        Answer.get().forEach(answer => {
          if (question.id == answer.questionId){
            answersQuestion.push(answer)
          }
        });
        ok.push({...question, answers: answersQuestion})
      }
    })
    res.status(200).json(ok)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:id', (req, res) => {
  try {
    var answersQuestion = []
    Answer.get().forEach(element => {
      if (element.questionId == parseInt(req.params.id)){
        answersQuestion.push(element);
      }
    });
    res.status(200).json({...Question.getById(req.params.id), answers: answersQuestion})
  } catch (err) {
    res.status(500).json(err)
  }
})


router.post('/', (req, res) => {
  try {
    const question = Question.create({ ...req.body, quizId:parseInt(req.params.quizId) })
    res.status(201).json(question)
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
    res.status(200).json(Question.update(req.params.id, { ...req.body, quizId:parseInt(req.params.quizId)}))
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

router.use('/:questionId/answers', AnswerRouter)


module.exports = router
