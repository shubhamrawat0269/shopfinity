require('dotenv').config()
const cors = require('cors')
const express = require('express')
const cookiesParser = require('cookie-parser')

const app = express()
const connectToDb = require('./db/connectToDb')
const { corsOptions } = require('./utils/common.util')

// const userRoutes = require('./routes/user.route')

app.use(cors(corsOptions))

app.use(express.json())
app.use(cookiesParser())
app.use(express.urlencoded({ extended: true }))

// app.use('/api/v1/user', userRoutes)

connectToDb()

const PORT = process.env.PORT || 8082

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
