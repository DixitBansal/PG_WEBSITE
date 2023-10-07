import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAlert, unsetAlert } from '../reducer/alertslice'
import Form from "react-bootstrap/Form"
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import uploadAvatar from "../images/upload_sample.svg"

const Adminpostform = ({ registerPostHandel, t, d, img }) => {

    /**
     * @param registerPostHandel - function to call for registering
     * @param title - title of news
     * @param description - description of description
     */

    const dispatch = useDispatch()

    const [description, setDescription] = useState(d)
    const [image, setNewsImg] = useState(null)
    const [title, setTitle] = useState(t)
    const [imageurl, setImageUrl] = useState(uploadAvatar)
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if (img) {
            setImageUrl(img)
        }
    }, [])

    async function registerPost(event) {

        /**
         * work when form is submitted
         * call the resisterPostHandel and save the response based of the response status
         * then update the setTitle accordingly
         */

        event.preventDefault()
        setIsSubmitting(true)

        const resp = await registerPostHandel(title, description, image)
        if (resp[0] === 200) {
            setTitle("")
            setDescription("")
            dispatch(setAlert({
                variant: "success",
                message: "News Registered Successfully"
            }))
            setNewsImg(null)
        }
        else {
            dispatch(setAlert({
                variant: "error",
                message: "Something went wrong!"
            }))
        }
        setTimeout(() => {
            dispatch(unsetAlert())
        }, 3000)
        setIsSubmitting(false)
    }

    return (
        <>
            <Form onSubmit={registerPost} className='flex flex-col gap-3'>
                <Form.Group>
                    <Form.Control placeholder='Title' value={title} onChange={(event) => {
                        setTitle(event.target.value)
                    }} />
                </Form.Group>
                <Form.Group className='h-[12rem]'>
                    <ReactQuill className='h-[9rem]' theme="snow" value={description} onChange={(value, delta, source, editor) => {
                        setDescription(editor.getHTML())
                    }} />
                </Form.Group>
                <Form.Group className='flex flex-col overflow-hidden justify-between gap-1 p-2'>
                    <Form.Control type='file' className='flex flex-col' onChange={(event) => {
                        if (event.target.files.length !== 0)
                            setNewsImg(event.target.files[0])
                        else
                            setNewsImg(null)
                    }} />
                    <div className='flex justify-center'>
                        <img src={image === null ? imageurl : (() => {
                            const imageurl = URL.createObjectURL(image)
                            // setImageUrl(imageurl)
                            return imageurl
                        })()} className='h-[15rem]' />
                    </div>
                </Form.Group>
                <div className='flex justify-end'>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? <Spinner variant='secondary' animation='border' /> : "Register"}
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default Adminpostform