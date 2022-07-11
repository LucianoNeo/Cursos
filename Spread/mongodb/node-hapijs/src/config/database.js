import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const config = {
  uri: 'mongodb://localhost:27017/node-hapijs',
  options: {
    useNewUrlParser: true,
    useFindAndModify: false,
  },
}

mongoose.connection.on('open', () => {
  console.log('Conectado ao banco com sucesso.')
})

mongoose.connection.on('error', () => {
  throw new Error('Não foi possível conectar ao MongoDB.')
})

export default {
  connect: () => mongoose.connect(config.uri, config.options)
}
