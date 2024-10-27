const express = require('express')
const router = express.Router()

const DB = require('../database/models/index')

router.get('/', async (_req, res, next) => {
  try {
    const users = await DB.User.findAll()
    res.json(users)
  } catch (error) {
    next(error)
  }
})

module.exports = router
