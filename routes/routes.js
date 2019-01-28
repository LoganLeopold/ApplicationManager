const express = require('express')
const router = express.Router()


router.use('/employer', require('./empRoutes'));
router.use('/job', require('./jobRoutes'));


// router.use('/', require('./application.js'));

module.exports = router