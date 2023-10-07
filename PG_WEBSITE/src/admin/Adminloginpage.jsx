import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from "react-bootstrap/Form"
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserData } from "../reducer/userdata.slice"
import Spinner from "react-bootstrap/Spinner"
// images
import logo from "../images/logo.png"
import useUserLoggedIn from '../hooks/useUserLoggedIn'

const Adminloginpage = () => {

    const navigator = useNavigate()

    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState("password")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [userData, isLoggedIn, hasFetched] = useUserLoggedIn(`${process.env.REACT_APP_BACKEND_URL}/api/user/profile`)

    function showPasswordHandel(event) {
        if (showPassword === "password")
            setShowPassword('text')
        else
            setShowPassword('password')
    }

    useEffect(() => {
        if (isLoggedIn === true) {
            dispatch(setUserData(userData))
            navigator("/admin/dashboard")
        }
    }, [isLoggedIn])

    async function loginFormHandel(event) {
        event.preventDefault()
        // request for login
        const requestBody = {
            email,
            password
        }
        let response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/login`, {
            method: "POST",
            credentials: 'include',
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json"
            }
        })
        response = await response.json()
        // save data to reducer
        // save the data and navigate to the pages also show the login sucessfull alert
        dispatch(setUserData(response))
        navigator("/admin/dashboard")
    }

    return (
        <>
            <section>
                <div className='m-auto min-w-[17rem] flex w-[30%] items-center h-[90vh]'>
                    <div className='backgroundgradient w-full p-3 rounded-md shadow-md'>
                        <div>
                            <div className='flex justify-center' >
                                <img src={logo} alt="pg-logo" height={360} width={360} />
                            </div>
                        </div>
                        <Form onSubmit={loginFormHandel} className='flex flex-col gap-4 ' >
                            {hasFetched ? <><Form.Group>
                                <Form.Control type='text' placeholder='Email' value={email} onChange={(event) => {
                                    setEmail(event.target.value)
                                }} />
                            </Form.Group>
                                <Form.Group className='flex'>
                                    <Form.Control type={showPassword} placeholder='Password' value={password} className='!rounded-r-none' onChange={(event) => {
                                        setPassword(event.target.value)
                                    }} />
                                    <Button variant='light' className='!rounded-l-none text-gray' onClick={showPasswordHandel}>
                                        {showPassword === "password" ? <AiFillEye /> : <AiTwotoneEyeInvisible />}
                                    </Button>
                                </Form.Group>
                                <Form.Group className='flex justify-center'>
                                    <Button type='submit'>
                                        Login
                                    </Button>
                                </Form.Group></> :
                                <div className='flex w-full h-full justify-center items-center'>
                                    <Spinner animation="border" variant='primary' />
                                </div>
                            }
                        </Form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Adminloginpage