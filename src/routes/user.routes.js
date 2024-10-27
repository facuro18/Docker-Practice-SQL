const express = require('express')
const router = express.Router()

const DB = require('../database/models/index')

router.get('/', async (_req, res, next) => {
  try {
    const users = await DB.User.findAll() // Accede al modelo User y obtén todos los registros
    res.json(users)
  } catch (error) {
    next(error) // Envía el error al manejador de errores
  }
})

module.exports = router
