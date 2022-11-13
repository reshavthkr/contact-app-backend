require('dotenv').config()
const { Message } = require('../models/message')



exports.generateOTP = async (req, res) => {
    let min = 100000;
    let max = 999999
    let otp = Math.floor(Math.random() * (max - min + 1) + min)
    res.send({ error: false, otp })
}
exports.sendSMS = async (req, res) => {
    try {
        const { name, otp, message, phoneNo } = req.body
        const accountSid = process.env.Account_SSID;
        const authToken = process.env.Auth_Token;
        const client = require('twilio')(accountSid, authToken);
        let messageDetails = await client.messages.create({
            body: `${message}`, from: '+13023034887', to: `${phoneNo}`
        })
        console.log(messageDetails.dateUpdated)
        let time = messageDetails.dateUpdated
        let newMessage = await new Message({ name, otp, message, phoneNo, time })
        let resp = await newMessage.save()
        res.send({ error: false, data: resp })
    }
    catch (err) {
        res.send(err)
    }


}
exports.getSMS = async (req, res) => {
    try {
        const messages = await Message.find().sort({ time: -1 })
        res.send({ error: false, messages })
    } catch (err) {
        res.send({ error: true, err })
    }

}
exports.getSingleMessage = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        let message = await Message.findById(id).exec()
        res.send({ error: false, message })
    }
    catch (err) {
        res.send({ error: true, err })
    }
}