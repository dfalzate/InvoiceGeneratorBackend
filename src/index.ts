import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())

const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
    console.log(`🚀 Server started on http://localhost:${PORT}`)
})
server.on('error', (err) => {
    console.log(err)
})
