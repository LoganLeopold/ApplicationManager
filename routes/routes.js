const express = require('express')
const router = express.Router()


router.use('/employer', require('./empRoutes.js'));
router.use('/job', require('./jobRoutes'));

router.get('/', (req, res) => {
    res.render('../views/layout.hbs')
})
// router.use('/', require('./application.js'));


module.exports = router


