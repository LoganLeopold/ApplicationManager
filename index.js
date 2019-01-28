const express = require('express')
const parser = require ('body-parser')
const hbs = (require('hbs'))

const app = express()

app.use(parser.urlencoded({extended: true}))
app.set('view engine', 'hbs')
app.use(bodyParser.json())
app.use(require('./routes/routes'))


app.listen(3000, () => {
    console.log('listening on port 3000')
})
