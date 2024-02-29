// Vamos incluir nossas lógicas de negócio aqui

const mongoose = require('mongoose')
const Card = require('./model')

const getAll = async function(request, response) {
  const cards = await Card.find()
    response.json(cards)
}

const create = async function(request, response) {
    const newCard = new Card({
      _id: new mongoose.Types.ObjectId(),
      title: request.body.title,
      description: request.body.description,
      link: request.body.link
    })

    const cardCreated = await newCard.save()

    response.json(cardCreated)
}

const put = async function(request, response) {
  const updateCard = Card({
    _id: new mongoose.Types.ObjectId(),
    title: request.body.title,
    description: request.body.description,
    link: request.body.link
  })

  const cardUpdated = await updateCard.save()

  response.json(cardUpdated)
}

//incluir update e delete

module.exports = {
    getAll,
    create,
    put
}
