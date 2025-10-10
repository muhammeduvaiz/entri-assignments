import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul style={{ display: 'flex',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        
                        listStyleType: 'none', 
                        padding: 0, 
                        margin: '10px', 
                        backgroundColor: '#f8f9fa', 
                        borderBottom: '1px solid #dee2e6', 
                        fontFamily: 'Arial, sans-serif', 
                        fontSize: '16px', 
                        color: '#343a40', 
                        margin: '10px' }}>
                        <li style={{marginRight: '20px'}}><Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontSize: '25px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Home</Link></li>
                        <li style={{marginRight: '20px'}}><Link to="/about" style={{ textDecoration: 'none', color: 'inherit', fontSize: '25px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>About</Link></li>
                        <li style={{marginRight: '20px'}}><Link to="/user" style={{ textDecoration: 'none', color: 'inherit', fontSize: '25px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>User</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa', borderTop: '1px solid #dee2e6', fontFamily: 'Arial, sans-serif', fontSize: '20px', color: '#343a40' }}> &nbsp; &copy;2025 </p>
            </footer>
        </div>
    )
}

export default Layout