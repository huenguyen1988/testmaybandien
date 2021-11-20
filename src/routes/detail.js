const express = require('express')
const router = express.Router()

const detailController = require('../app/controllers/DetailController')

router.get('/:_id', detailController.show)

module.exports = router