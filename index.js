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

//Roger helped me realize I don't need Bootstrap local to this project's files to serve it and can use the online send but I can't leave this note in the .hbs.

// https://coolors.co/d33f49-d7c0d0-eff0d1-77ba99-262730  Color palette reference