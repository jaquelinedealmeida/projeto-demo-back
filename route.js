const express = require('express')
const router = express.Router()
const {getAll, create} = require('./controller')

//permitir para entregar como resposta de uma requisicao a lista de flashcards

router.get('/cards', getAll)
router.post('/cards', create)
// router.put('/cards', put)

module.exports = router
//criando um endereco ou rota com get para permitir que dados sejam recuperados