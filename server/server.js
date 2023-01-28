//Import dependencies
const cors = require('cors')
const express = require('express');

const app = express();

const port = 8000;

//bring in express configs telling express to use json
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

require('./config/mongoose.config')

const Routes = require('./routes/author.routes')
Routes(app)
//same as require('./routes/author.routes.js')(app)

app.listen (port, () => console.log(`You are connected to server. ************** Now at port: ${port}.`))