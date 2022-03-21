import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(<string>process.env.MONGO_URI)

mongoose.connection.once('open', () => {
    console.log('✔️ ️Connected to the database!')
})
mongoose.connection.on('error', (err) => {
    console.log(err)
})

export default mongoose.connection
