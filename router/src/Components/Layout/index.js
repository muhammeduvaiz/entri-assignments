import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Layout() {
    return (
        <div>
            <header>
                <nav>
                    <ul style={{
                        display: 'flex', listStyleType: 'none', padding: 0,
                        margin: 0, backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6',
                        fontFamily: 'Arial, sans-serif', fontSize: '16px', color: '#343a40', margin: '10px'
                    }}>

                        <li style={{ marginRight: '20px' }}>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>

                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer style={{
                textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa',
                borderTop: '1px solid #dee2e6', fontFamily: 'Arial, sans-serif', fontSize: '16px', color: '#343a40'
            }}>
                <p>Footer content goes here</p>
            </footer>
        </div>
    )
}

export default Layout