
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
    return (
        <div className="home-container">
            <nav className="custom-navbar">
                <div className="custom-navbar-brand">Urban Threads</div>
                <div className="navbar-links">
                    <Link to="/login" className="login-btn">Login</Link>
                </div>

            </nav>
            <main className="hero-section">
                <h1 className="store-name">Urban Threads</h1>
                <p className="store-description">
                    Elevate your style with our curated collection of premium men's clothing.
                    Quality, comfort, and sophistication in every stitch.
                </p>
                <Link to="/products" className="shop-now-btn">
                    Shop Now
                </Link>
            </main>
        </div>
    )
}

export default Home