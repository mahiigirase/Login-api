const express = require('express')

const mongoose  = require('mongoose')

const teacherRoute = require('./Route/teacherRoute')
const studRoute = require('./Route/studRoute')
const fieldRoute = require ('./Route/fieldRoute')
require('dotenv/config')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("this is home")
})

app.use('/api/teacher',teacherRoute)

app.use('/api/student',studRoute)

app.use('/api/field',fieldRoute)

app.listen(process.env.PORT)

async function demo(){
    try {
        const data = await mongoose.connect(process.env.DB)
        console.log(data.default.STATES.connected)
    } catch (error) {
        console.log(error.message)
    }
}
demo()