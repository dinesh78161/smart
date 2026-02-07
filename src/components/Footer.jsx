import { Link } from 'react-router-dom'
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    ArrowRight,
    Send
} from 'lucide-react'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ]

    const services = [
        { name: 'Training Programs', path: '/services#training' },
        { name: 'Workshops', path: '/services#workshops' },
        { name: 'Internships', path: '/services#internships' },
        { name: 'Certifications', path: '/services#training' },
    ]

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' },
    ]

    return (
        <footer className="footer">
            {/* Top Wave */}
            <div className="footer-wave">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 50L48 45.8C96 41.7 192 33.3 288 35.8C384 38.3 480 51.7 576 56.7C672 61.7 768 58.3 864 51.7C960 45 1056 35 1152 33.3C1248 31.7 1344 38.3 1392 41.7L1440 45V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="currentColor" />
                </svg>
            </div>

            <div className="footer-content">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Column */}
                        <div className="footer-brand">
                            <Link to="/" className="footer-logo">
                                <img src="/smart.png" alt="SmartTech Management Service" className="footer-logo-image" />
                            </Link>
                            <p className="footer-description">
                                Empowering careers through smart technology and management.
                                Building future-ready professionals with practical skills and real-world experience.
                            </p>
                            <div className="footer-social">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="social-link"
                                        aria-label={social.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-column">
                            <h4 className="footer-heading">Quick Links</h4>
                            <ul className="footer-links">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path} className="footer-link">
                                            <ArrowRight size={14} />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-column">
                            <h4 className="footer-heading">Our Services</h4>
                            <ul className="footer-links">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <Link to={service.path} className="footer-link">
                                            <ArrowRight size={14} />
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-column">
                            <h4 className="footer-heading">Contact Us</h4>
                            <ul className="footer-contact">
                                <li>
                                    <Mail size={18} />
                                    <a href="mailto:info@smarttech.com">info@smarttech.com</a>
                                </li>
                                <li>
                                    <Phone size={18} />
                                    <a href="tel:+919876543210">+91 98765 43210</a>
                                </li>
                                <li>
                                    <MapPin size={18} />
                                    <span>Bangalore, Karnataka, India</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-newsletter">
                        <div className="newsletter-content">
                            <div className="newsletter-text">
                                <h4>Subscribe to Our Newsletter</h4>
                                <p>Get the latest updates on programs, workshops, and career opportunities.</p>
                            </div>
                            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="newsletter-input"
                                    required
                                />
                                <button type="submit" className="newsletter-btn">
                                    <Send size={18} />
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p>&copy; {currentYear} SmartTech Management Service. All rights reserved.</p>
                        <div className="footer-bottom-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
