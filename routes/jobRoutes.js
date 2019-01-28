const express = require('express')
const router = express.Router()
const jobControl = require('../controllers/jobControl')

router.get('/', jobControl.list)

router.get('/new', jobControl.new)

router.post('/', jobControl.create)

router.get('/:id', jobControl.show)

router.get('/:id/edit', jobControl.edit)

router.put('/:id', jobControl.update)


