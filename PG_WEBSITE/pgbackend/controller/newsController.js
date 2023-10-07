import { fileuploadService, registerPost, getPostService, deletePostService, getNewsByIDService, fileDeleteService, updatePostService } from "../services/news.services.js"
import fs from "fs/promises"

export async function registerController(req, res, next) {
    /**
     * a controller function
     * 1. upload image to the s3 bucket
     * 2. on uploading of the image upload the data to the mongodb server
     * 3. send the success response to the client
     */

    if (req.userdata === null)
        return res.status(403).json({ msg: "fail", data: null })

    const image = Uint8Array.from(await fs.readFile(req.file.path))
    const BUCKET = process.env.BUCKET
    const imageUploadResult = await fileuploadService(req.file.filename, BUCKET, image, req.file.mimetype)
    await fs.unlink(req.file.path)
    // create the admin id for the users and add it here

    const newPostData = {
        title: req.body.title,
        description: req.body.description,
        image_url: imageUploadResult,
        admin_id: req.userdata,
        image_mimeType: req.file.mimetype
    }
    const post = await registerPost(newPostData)

    return res.json({ msg: "success", data: post })
}

export async function updateController(req, res, next) {
    /**
     * upload the new image
     * delete exisiting image
     * update the posts data
     * return the updated post
    */
    let updatedpost = {
        title: req.body.title,
        description: req.body.description,
    }
    if (req.file) {
        const image = Uint8Array.from(await fs.readFile(req.file.path))
        const BUCKET = process.env.BUCKET
        const imageUploadResult = await fileuploadService(req.file.filename, BUCKET, image, req.file.mimetype)
        updatedpost.image_url = imageUploadResult
        updatedpost.mimetype = req.file.mimetype
        await fs.unlink(req.file.path)
        const imagedeleteresp = await fileDeleteService(req.body.image_url.split("/")[3], process.env.BUCKET)
    }
    const update = await updatePostService(req.body.post_id, updatedpost)
    return res.json({
        "msg": "success",
        data: updatedpost
    })
}

export async function deleteController(req, res, next) {
    /**
     * req.body contains posts ids that has to be deleted
     */
    const postdelete = await deletePostService(req.body.post_ids, req.body.image_url)
    return res.json({
        postdelete
    })
}

export async function getController(req, res, next) {
    const posts = await getPostService({ page: req.params.page, limit: req.params.limit })
    return res.json({ msg: "successfull", data: posts })
}

export async function getByIdController(req, res, next) {
    const post = await getNewsByIDService(req.params.id)
    return res.json({ msg: "successfull", data: post })
}