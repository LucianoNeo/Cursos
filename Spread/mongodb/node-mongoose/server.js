const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const routes = require('./src/routes')
require('dotenv/config');
const app = express()
const port = process.env.PORT || 5000

mongoose.connect(process.env.DB_ADDRESS, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("CONECTADO ao banco com sucesso!")
    }
})


app.use(cors())

app.use(cookieParser())

app.use(express.json())


app.get('/', function (req, res) {
    res.json({ message: 'Olá Neo' })
})

app.use(routes)

app.listen(port, () => console.log('Api rodando na porta 5000'))
