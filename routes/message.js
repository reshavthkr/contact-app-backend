const express = require('express')
const router = express.Router()

const { generateOTP } = require('../controllers/message.js')

router.get('/generateOTP', generateOTP)


module.exports = router;