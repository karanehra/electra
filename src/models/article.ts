import { Schema, model, Document } from 'mongoose'

interface IArticle extends Document {
  title: string
  description: string
  url: string
  tags?: string[]
  feedTitle?: string
  updated: string
  created: string
  URL: string
  urlHash: string
  feedDescription: string
  feedURL: string
  content: string
  createdAt: string
}

const ArticleSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
  feedTitle: String,
  updated: String,
  created: String,
  URL: String,
  urlHash: String,
  feedDescription: String,
  feedURL: String,
  content: String,
  createdAt: String
})

const Article = model<IArticle>('articles', ArticleSchema)

export default Article
