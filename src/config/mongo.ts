import mongoose from 'mongoose'

export default function connectToDB(): void {
  const { MONGO_HOST, MONGO_PORT, MONGO_DB } = process.env
  const DB_URI = [[MONGO_HOST, MONGO_PORT].join(':'), MONGO_DB].join('/')

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

  try {
    mongoose.connect(DB_URI, options)
    console.log('db connected')
  } catch {
    console.error('db connect prob')
    process.exit(1)
  }
}
