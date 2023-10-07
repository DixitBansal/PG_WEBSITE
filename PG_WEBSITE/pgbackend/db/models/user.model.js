import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    contact: String,
    email: String,
    permissions: { type: String, default: "admin" }
})

export const usermodel = mongoose.model('user', userSchema)