const db = require('../models/index.js')

db.sequelize
  .sync()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.')
  })
  .catch(error => {
    console.error('Error al conectar a la base de datos:', error)
  })
