import { postModel } from "../db/models/post.model.js"
import { s3Client } from "../db/imageDBclient.js"
import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3"
import mongoose from "mongoose"

export async function fileuploadService(key, bucket, body, contentType) {
    /**
     * function to upload the file to the s3 bucket
     * @param key - name of the file
     * @param bucket - name of the bucket to which file has to be uploaded
     * @param body - image content
     * @return objectURL - the url to public access of the object
     */
    const client = s3Client()
    const params = {
        Key: key,
        Bucket: bucket,
        Body: body,
        ContentType: contentType
    }
    const results = await client.send(new PutObjectCommand(params));
    const objectURL = `https://${bucket}.s3.ap-south-1.amazonaws.com/${key}`
    return objectURL
}

export async function fileDeleteService(key, bucket) {
    const input = { // DeleteObjectRequest
        Bucket: bucket, // required
        Key: key // required
    };
    const client = s3Client()
    const deleteObject = new DeleteObjectCommand(input)
    const response = await client.send(deleteObject)
    return response
}

export async function registerPost(postdata) {
    /**
     * register the post to the mongodb database
     * 
        {
            title: String,
            description: String,
            admin_id: mongoose.ObjectId,
            image_url: mongoose.ObjectId,
            image_mimeType: String
        }
    @param postdata contain the object of above description
    @return post object recived after registering the post
     */
    let post = new postModel(postdata)
    post = await post.save()
    return post
}

export async function getPostService({ page, limit }) {
    /**
     * return the post in the paginated format
     * sorted by the latest uploaded post
     * @return array of posts
     */
    let posts = postModel.find()
    posts = pagination(posts, { page, limit })
    posts.sort('-createdAt')
    posts = await posts.exec()
    return posts
}

export async function deletePostService(post_ids, image_url) {
    post_ids = post_ids.map((element) => {
        return new mongoose.Types.ObjectId(element)
    })
    const key = image_url.split("/")[3]
    const imgdeleteresp = await fileDeleteService(key, process.env.BUCKET)
    let deletePosts = postModel.deleteMany({ '_id': { '$in': post_ids } })
    deletePosts = await deletePosts.exec()
    return deletePosts
}

export async function updatePostService(post_id, updatedpost) {
    return await postModel.updateOne({ _id: post_id }, updatedpost)
}

export async function getNewsByIDService(post_id) {
    let post = postModel.findById(post_id)
    post = await post.exec()
    return post
}

function pagination(posts, { page = 1, limit = 2 }) {

    const skip = limit * (page - 1)
    return posts.skip(skip).limit(limit)
}
