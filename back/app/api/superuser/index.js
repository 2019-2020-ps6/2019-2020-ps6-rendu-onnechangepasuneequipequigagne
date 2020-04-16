const { Router } = require('express')

const { SuperUser } = require('../../models')

const router = new Router()

router.get('/', (req, res) => {
    try {
        res.status(200).json(SuperUser.get())
    } catch (err) {
        res.status(404).json(err)
    }
})

router.get('/:id', (req, res) => {
    try {
        res.status(200).json(SuperUser.getById(req.params.id))
    } catch (err) {
        res.status(404).json(err)
    }
})


router.post('/', (req, res) => {
    try {
        const superUser = SuperUser.create({ ...req.body })
        res.status(201).json(superUser)
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(500).json(err.extra)
        } else {
            res.status(404).json(err)
        }
    }
})


router.put('/:id', (req, res) => {
    try {
        res.status(200).json(SuperUser.update(req.params.id, req.body))
    } catch (err) {
        res.status(404).json(err)
    }
})

router.delete('/:id', (req, res) => {
    try {
        res.status(200).json(SuperUser.delete(req.params.id))
    } catch (err) {
        res.status(404).json(err)
    }
})

module.exports = router
