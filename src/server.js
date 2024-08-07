require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const usersRouter = require('./routes/users.routes')
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 3000
const hostname = process.env.HOST_NAME

// config req.body
app.use(express.json()) // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })) //Parse URL-encoded bodies

configViewEngine(app)

// routes
app.use('/v1/api', usersRouter)
;(async () => {
    try {
        await connection()
        app.listen(port, hostname.replace, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log('>>> Error connect to Database', error)
    }
})()
