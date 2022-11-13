const express = require('express')
const router = express.Router()

const { generateOTP, sendSMS, getSMS, getSingleMessage } = require('../controllers/message.js')

router.get('/generateOTP', generateOTP)
router.post('/sendSMS', sendSMS)
router.get('/getSMS', getSMS)
router.get('/getSMS/:id', getSingleMessage)



module.exports = router;