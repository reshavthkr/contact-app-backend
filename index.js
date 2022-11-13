const express = require('express')
const message = require('./routes/message')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config()



const app = express()
app.use(express.json());
app.use(cors());

//---- Mongodb Connectivity--------//
const url = process.env.Mongo_DB_URL;
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams).then(() => {
    console.log("connected to the database")
}).catch((err) => {
    console.error(`Error connecting to the database. n${err}`)
})


app.use('/api', message)

const port = process.env.PORT || 8080




app.listen(port, () => console.log(`server is up and running on port : ${port}`))