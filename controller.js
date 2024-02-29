// Vamos incluir nossas lógicas de negócio aqui

const mongoose = require('mongoose')
const Card = require('./model')

const getAll = async function(request, response) {
  const cards = await Card.find()
    response.json(cards)
}

const create = async function(request, response) {
    const novoCard = new Card({
      _id: new mongoose.Types.ObjectId(),
      title: request.body.title,
      description: request.body.description,
      link: request.body.link
    })

    const cardCreated = await novoCard.save()

    response.json(cardCreated)
}

module.exports = {
    getAll,
    create
}
