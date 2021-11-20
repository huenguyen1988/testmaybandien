const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars');
const path = require('path')

const app = express()
const port = 80

const db = require('./config/db')

const route = require('./routes')

//connect db
db.connect()

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//http logger
app.use(morgan('combined'))
//template engine
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))

route(app)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})