exports.generateOTP = async (req, res) => {
    let min = 100000;
    let max = 999999
    let otp = Math.floor(Math.random() * (max - min + 1) + min)
    res.send({ error: false, otp })
}