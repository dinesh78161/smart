import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ]

    const isActive = (path) => location.pathname === path

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <img src="/smart.png" alt="SmartTech Management Service" className="logo-image" />
                </Link>

                {/* Desktop Navigation */}
                <ul className="navbar-links">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                            >
                                {link.name}
                                <span className="nav-link-underline"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <Link to="/contact" className="navbar-cta btn btn-primary">
                    Get Started
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-links">
                    {navLinks.map((link, index) => (
                        <li key={link.path} style={{ animationDelay: `${index * 0.1}s` }}>
                            <Link
                                to={link.path}
                                className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li style={{ animationDelay: '0.4s' }}>
                        <Link to="/contact" className="btn btn-primary mobile-cta">
                            Get Started
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
