import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Products = () => {
    return (
        <div className='container mt-5'>
            <h1>Our Products</h1>
            <p>Explore our exclusive collection.</p>
            <Link to="/" className="btn btn-secondary">Back to Home</Link>
        </div>
    )
}

export default Products
