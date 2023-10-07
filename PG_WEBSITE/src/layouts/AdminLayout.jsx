import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Link } from 'react-router-dom'
import Admindatacard from '../admin/Admindatacard'
import Alert from 'react-bootstrap/Alert'

const AdminLayout = () => {

    const alertdata = useSelector(state => state.sliceData)

    return (
        <>
            {alertdata.variant !== "" ? <Alert className='!fixed top-[2%] right-[1%] z-[100]' variant={alertdata.variant}>{alertdata.message}</Alert> : null}
            <header className=' bg-primary-purple text-base-white'>
                <div className='flex justify-between px-3'>
                    <Link className='no-underline text-base-white' to="/"><h1 className='text-[1.25rem] py-2 m-0'>Nandani Girls PG's</h1></Link>
                    <Admindatacard />
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default AdminLayout