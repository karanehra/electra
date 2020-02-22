import { Schema, model, Document } from 'mongoose'

interface IFeed extends Document {
  title: string
  description: string
  url: string
  tags?: string[]
}

const FeedSchema = new Schema({
  title: String,
  description: String,
  url: String,
  tags: [String]
})

const Feed = model<IFeed>('feeds', FeedSchema)

export default Feed
