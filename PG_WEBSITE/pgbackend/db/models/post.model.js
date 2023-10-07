import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    admin_id: mongoose.ObjectId,
    image_url: String,
    image_mimeType: String,
}, {timestamps : true})

export const postModel = mongoose.model('post', postSchema)