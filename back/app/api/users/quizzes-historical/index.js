const { Router } = require('express')

const {Historical} = require('../../../models')

const NotFoundError = require('../../../utils/errors/not-found-error')

const router = new Router({mergeParams: true})


router.get('/', (req, res) => {
    try {
        let historical = Historical.get().filter((historical) => historical.userId === parseInt(req.params.userId))
        res.status(200).json(historical)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:historicalId', (req, res) => {
    try {
        let historical = Historical.getById(req.params.historicalId)
        if(historical.userId ===  parseInt(req.params.userId)) {
            res.status(200).json(historical)
        }
        else {
            throw new NotFoundError(`History not found`)
        }
    } catch (err) {
        res.status(404).json(err)
    }
})

router.post('/', (req, res) => {
    try {
        const historical = Historical.create({ ...req.body,userId : parseInt(req.params.userId)})
        res.status(201).json(historical)
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json(err.extra)
        } else {
            res.status(500).json(err)
        }
    }
})

router.put('/:historicalId', (req, res) => {
    try {
        let historical = Historical.getById(req.params.historicalId)
        if(historical.userId ===  parseInt(req.params.userId)) {
            res.status(200).json(Historical.update(req.params.historicalId,req.body))
        }
        else {
            throw new NotFoundError(`Historical not found`)
        }
    } catch (err) {
        res.status(404).json(err)
    }
})

router.delete('/:historicalId', (req, res) => {
    try {
        let historical = Historical.getById(req.params.historicalId)
        if(historical.userId ===  parseInt(req.params.userId)) {
            res.status(200).json(Historical.delete(req.params.historicalId))
        }
        else {
            throw new NotFoundError(`Historical not found`)
        }
    } catch (err) {
        res.status(404).json(err)
    }
})

module.exports = router
