import React from 'react'
import { Link } from 'react-router-dom'
import './adminLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
const AdminLogin = () => {
    return (
        <>
            <div className="login-container">
                <nav className="custom-navbar">
                    <div className="custom-navbar-brand">Urban Threads</div>
                    <div className="navbar-links">
                        <Link to="/" className="nav-link">Home</Link>
                    </div>
                </nav>
                <div className="login-card">
                    <h2 className="login-title">Welcome Back</h2>
                    <p className="login-subtitle">Sign in to your account</p>

                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" className="form-input" placeholder="name@example.com" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="form-input" placeholder="Enter your password" />
                        </div>

                        {/* <div className="form-actions">
                            <div className="remember-me">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <a href="#!" className="forgot-password">Forgot password?</a>
                        </div> */}

                        <button type="button" className="login-submit-btn">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminLogin