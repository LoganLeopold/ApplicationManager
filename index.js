const express = require('express')
const parser = require('body-parser')
const hbs = require('hbs')
const methodOverride = require('method-override')
const app = express()

app.use(methodOverride('_method'))
// ^         ^          ^
// After a long time of working to establish an update route Stuart reminded me about methodoverride^
app.use(parser.urlencoded({extended: true}))
app.set('view engine', 'hbs')
app.use(parser.json())
app.use(require('./routes/routes'))
app.use(express.static('public'))
app.listen(3001, () => {
    console.log('listening on port 3001')
})

// https://coolors.co/3f7cac-95afba-bdc4a7-d5e1a3-e2f89c  Color palette reference