import { Schema, model } from "mongoose"

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
  }
})

const User = model("user", UserSchema)

export default User
