// Vamos incluir nossas modelagens de dados aqui

const mongoose = require('mongoose')

const CardEsquema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    required: true,
    default: new Date
  }
})

module.exports = mongoose.model('card', CardEsquema)