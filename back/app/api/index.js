const { Router } = require('express')
const QuizzesRouter = require('./quizzes')
const UsersRouter = require('./users')
const SuperUsersRouter = require('./superuser')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/quizzes', QuizzesRouter)
router.use('/users', UsersRouter)
router.use('/superusers', SuperUsersRouter)

module.exports = router
