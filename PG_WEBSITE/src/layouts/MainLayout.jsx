import React from 'react'
import { Outlet } from 'react-router-dom'
// components
import Navbar from '../components/header/Navbar'
import Footer from "../components/header/Footer"

export default function MainLayout() {
    return (
        <section>
            <Navbar />
            <Outlet />
            <Footer />
        </section>
    )
}
