const express = require('express')
const cors = require('cors')

const app = express()
const PORTA = 3333
app.use(cors())

app.use(express.json())

const router = require('./route')
app.use('/', router)

app.listen(PORTA, console.log(`Rodando servidor na porta: ${PORTA}`))//ligando o servidor