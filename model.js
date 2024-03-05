// Vamos incluir nossas modelagens de dados aqui

const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // já é default do mongoose
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

module.exports = mongoose.model("card", CardSchema);
