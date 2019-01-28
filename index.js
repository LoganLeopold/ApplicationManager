const express = require('express')
const parser = require ('body-parser')
const hbs = (require('hbs'))
const seed = (require('./db/seed.js'))

const app = express()

app.use(parser.urlencoded({extended: true}))
app.set('view engine', 'hbs')
app.use(parser.json())
app.use(require('./routes/routes'))

app.seed


app.listen(3001, () => {
    console.log('listening on port 3001')
})
