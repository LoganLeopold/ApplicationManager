const express = require('express')
const router = express.Router()
const empControl = require('../controllers/empControl')

router.get('/', empControl.list)

router.get('/new', empControl.new)

router.post('/', empControl.create)

// router.get('/:id', empControl.show)

router.get('/:id/edit', empControl.edit)

router.put('/:id', empControl.update)

module.exports = router