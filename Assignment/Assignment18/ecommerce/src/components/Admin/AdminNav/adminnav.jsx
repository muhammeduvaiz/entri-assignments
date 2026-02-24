import React from 'react'
import { Link } from 'react-router-dom'
import './adminnav.css'

const AdminNav = () => {
  return (
    <div className='admin-nav'>
        
        <ul>
            <li><Link to="/adminhome">Products</Link></li>
            <li><Link to="/adminhome">Orders</Link></li>
            <li><Link to="/adminhome">Users</Link></li>
        </ul>
    </div>
  )
}

export default AdminNav