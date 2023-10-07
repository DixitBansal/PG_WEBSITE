import React from 'react'
import { Outlet } from 'react-router-dom'
// components
import Navbar from '../components/header/Navbar'

const NewsLayout = () => {
    return (
        <section>
            <Navbar />
            <Outlet />
        </section>
    )
}

export default NewsLayout