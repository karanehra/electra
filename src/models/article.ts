import { Schema, model, Document } from 'mongoose'

interface IArticle extends Document {
  title: string
  description: string
  url: string
  tags?: string[]
}

const ArticleSchema = new Schema({
  title: String,
  description: String,
  url: String,
  tags: [String]
})

const Article = model<IArticle>('articles', ArticleSchema)

export default Article
