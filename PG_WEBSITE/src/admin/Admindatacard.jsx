import React, { useState } from 'react'
import Button from "react-bootstrap/Button"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { unSetUserData } from '../reducer/userdata.slice'
import { RxAvatar } from "react-icons/rx"

const Admininfobutton = () => {

    const [showdata, setshowdata] = useState(false)
    const userData = useSelector((state) => state.userData)

    const showinfocardHandel = (event) => {
        setshowdata((prev) => { return !prev })
        const remover = (event) => {
            setshowdata(false)
            document.removeEventListener('click', remover)
        }
        setTimeout(() => {
            document.addEventListener('click', remover)
        }, 500)
    }

    return (
        <>
            {
                Object.keys(userData).length !== 0 ? <div className='relative flex justify-center'>
                    <div className='flex justify-center items-center'>
                        <RxAvatar className='h-[2rem] w-[2rem]' onClick={showinfocardHandel} />
                    </div>
                    {showdata ? <div className='z-[100] absolute right-0 top-full flex justify-center mt-3'>
                        <Admindatacard />
                    </div> : null}
                </div> : null
            }
        </>
    )
}

export default Admininfobutton


const Admindatacard = () => {

    const userDataRed = useSelector((state) => { return state.userData })
    const navigator = useNavigate()
    const dispatch = useDispatch()

    async function logoutHandel(event) {
        let response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/logout`, {
            credentials: "include",
            method: "DELETE"
        })
        response = await response.json()
        dispatch(unSetUserData())
        navigator("/admin/")
    }

    return (
        <div className='flex justify-center flex-col shadow-md p-2 rounded-md bg-white'>
            <p className='flex ml-3 items-center gap-3 text-gray'><span className='text-primary-purple text-subtitle-size font-bold'>Name </span>{userDataRed.username}</p>
            <p className='flex ml-3 items-center gap-3 text-gray'><span className='text-primary-purple text-subtitle-size font-bold'>Email </span>{userDataRed.email}</p>
            <p className='flex ml-3 items-center gap-3 text-gray'><span className='text-primary-purple text-subtitle-size font-bold'>Contact </span>{userDataRed.contact}</p>
            <Button variant='danger' type='button' onClick={logoutHandel}>
                Logout
            </Button>
        </div>
    )
}
