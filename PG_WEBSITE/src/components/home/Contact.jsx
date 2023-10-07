import React, { useRef, useState } from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"
import Alert from "react-bootstrap/Alert"
import emailjs from "@emailjs/browser"

const Contact = ({ showmap = true }) => {

    const [showAlert, setShowAlert] = useState(false)
    const [submitButtonDisable, setSubmitButtonDisable] = useState(false)
    const [alertVarient, setAlertVarient] = useState("success")
    const [alertMessage, setAlertMessage] = useState("")
    const SERVICE_ID = "service_06y6ti3"
    const PUBLIC_KEY = "QakuaMXQx9sg7AmQQ"
    const TEMPLATE_ID = "template_m1r52jn"

    function clearQuerySubmission() {
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 6000)
        // clear all the fields
    }

    async function querySubmission(event) {
        try {
            const form = document.getElementById("queryform")
            // disable the submit button
            setSubmitButtonDisable((prev) => true)
            event.preventDefault()
            const resp = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
            // alert for the query registeration
            setSubmitButtonDisable((prev) => false)
            setAlertVarient("success")
            setAlertMessage("Your Query is submitted successfully. We will surly contact you in 1 to 2 days possible. Thank you.")
            clearQuerySubmission()
        }
        catch (err) {
            // alert for the unablity to register query
            console.log(err)
            setSubmitButtonDisable((prev) => false)
            setAlertVarient("danger")
            setAlertMessage("Sorry! due to some error we are not able to register your query. Please try again later.")
            clearQuerySubmission()
        }
    }

    return (
        <section>
            {showmap ? <div className='flex justify-center py-5'>
                <h2 className='text-primary-purple heading'>For Further Queries...</h2>
            </div> : null}
            <div className='flex flex-col lg:flex-row'>
                {showmap ? <div className='w-[100%]'>
                    <iframe title="pg-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.492651245874!2d75.7931808!3d26.824278699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dcb2ff4b9e9f1%3A0xa48ffae0bde402a2!2sNandini%20girls%20PG%20Sanganer!5e0!3m2!1sen!2sin!4v1694670792893!5m2!1sen!2sin" className='w-full h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div> : null}
                <div className='p-3 lg:w-[100%]'>
                    <Alert show={showAlert} className='!fixed top-[10px]' variant={alertVarient}>
                        {alertMessage}
                    </Alert>
                    <Form id={"queryform"} onSubmit={(event) => {
                        querySubmission(event)
                    }} className='bg-base-white p-4 rounded-md shadow-sm text-gray'>
                        <Form.Group className='pt-3'>
                            <Form.Control type="text" placeholder='Name' name='from_name' />
                        </Form.Group>
                        <Form.Group className='pt-3'>
                            <Form.Control type='number' placeholder='Contact' name='contact_num' />
                        </Form.Group>
                        <Form.Group className='pt-3'>
                            <Form.Control type='text' placeholder='Email' name='reply_to' />
                        </Form.Group>
                        <Form.Group className='py-3'>
                            <Form.Control
                                name='message'
                                as="textarea"
                                placeholder="Leave a comment/query here"
                                style={{ height: '100px' }}
                            />
                        </Form.Group>
                        <div className='flex justify-end mt-2'>
                            <Button className='' type='submit' disabled={submitButtonDisable}>
                                {submitButtonDisable ?
                                    <Spinner variant='light' animation='border' />
                                    :
                                    "Submit"}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default Contact