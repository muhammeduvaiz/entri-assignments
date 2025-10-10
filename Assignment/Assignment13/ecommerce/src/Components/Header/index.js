import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ cart, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('')
    
    const handleSearch = (e) => {
        e.preventDefault()
        onSearch(searchTerm)
    }
    
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }
    
    const handleHomeClick = () => {
        setSearchTerm('')
        onSearch('')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={handleHomeClick}>E-Commerce Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" onClick={handleHomeClick}>Home</Link>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center">
                            <form className="d-flex me-3" role="search" onSubmit={handleSearch}>
                                <input 
                                    className="form-control me-2" 
                                    type="search" 
                                    placeholder="Search products..." 
                                    aria-label="Search"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                            <Link className="btn btn-outline-success" to="/cart" role="button">
                                <i className="bi bi-cart"></i> Cart ({cart.length})
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header