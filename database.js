// Vamos incluir a configuração do banco de dados aqui
//moongoose usa JS
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set("strictQuery", true)

const connectDataBase = () => {
  console.log('Conectando com MongoDB')

  mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Mongo conectado com sucesso!'))
  .catch(error => console.log(error))
}

module.exports = connectDataBase