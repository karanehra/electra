import { Schema, model, Document } from 'mongoose'

interface IUser extends Document {
  firstName: string
  lastName: string
  username: string
  password: string
  subscriptions?: Array<String>
}

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    validate: /[a-zA-z]/
  },
  lastName: {
    type: String,
    required: true,
    validate: /[a-zA-z]/
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  subscriptions: {
    type: [String]
  }
})

const User = model<IUser>('user', UserSchema)

export default User
