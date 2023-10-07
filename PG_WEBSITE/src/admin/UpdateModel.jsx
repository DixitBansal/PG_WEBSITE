import React from 'react'
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { useDispatch } from 'react-redux'
import { toggleUpdateModel } from '../reducer/updateModel.slice'
import Adminpostform from './Adminpostform'
import { updateNews } from '../reducer/newsdata.slice'

const UpdateModel = ({ show, originalData }) => {

    const dispatch = useDispatch()

    async function updatePostHandel(title, description, image) {
        const updateForm = new FormData()
        updateForm.append('title', title)
        updateForm.append('description', description)
        updateForm.append('news-img', image)
        updateForm.append('post_id', originalData._id)
        updateForm.append('image_url', originalData.image_url)
        let response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/news/update`, {
            method: "PUT",
            body: updateForm,
            credentials: "include"
        })
        if (response.status === 200) {
            response = await response.json()
            dispatch(toggleUpdateModel())
            dispatch(updateNews({ data: response.data, post_id: originalData._id }))
            return [200, response]
        }
        return [response.status]
    }

    function handleClose() {
        dispatch(toggleUpdateModel())
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <div className='flex flex-col'>
                        <Modal.Title>Update News Post</Modal.Title>
                        <p className='p-0 m-0'><span className='font-bold'>Post ID </span> {originalData._id}</p>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <Adminpostform registerPostHandel={updatePostHandel} t={originalData.title} d={originalData.description} img={originalData.image_url} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateModel