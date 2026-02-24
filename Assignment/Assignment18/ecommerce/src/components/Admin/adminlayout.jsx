import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from './AdminNav/adminnav'
import './adminlayout.css'

const Adminlayout = () => {
    return (
        <div className="admin-container">
            <AdminNav />
            <main className="admin-content">
                <Outlet />
            </main>
        </div>
    )
}

export default Adminlayout