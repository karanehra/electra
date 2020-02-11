import { Schema, model, Document } from 'mongoose'

interface IUser extends Document {
  firstName: string
  lastName: string
  username: string
  password: string
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
  }
})

const User = model<IUser>('user', UserSchema)

export default User
