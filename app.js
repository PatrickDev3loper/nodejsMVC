const express = require('express')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const router = express.Router();
const port = 5000;
const quadrosRoute = require('./routers/quadros-router');


app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(bodyParser.urlencoded())

app.use(express.static(__dirname + '/public'))

app.use('/', quadrosRoute)

appa.listen(port, () => {
    console.log(`Server aberto: http://localhost:${port}`)
})