import { useState } from 'react'
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Clock,
    MessageCircle,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    CheckCircle,
    User,
    FileText,
    ArrowRight
} from 'lucide-react'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        }, 1500)
    }

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Us',
            primary: 'info@smarttech.com',
            secondary: 'support@smarttech.com'
        },
        {
            icon: Phone,
            title: 'Call Us',
            primary: '+91 98765 43210',
            secondary: '+91 98765 43211'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            primary: '123 Tech Park, Whitefield',
            secondary: 'Bangalore, Karnataka 560066'
        },
        {
            icon: Clock,
            title: 'Working Hours',
            primary: 'Mon - Fri: 9:00 AM - 6:00 PM',
            secondary: 'Sat: 10:00 AM - 2:00 PM'
        }
    ]

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' }
    ]

    const subjects = [
        'General Inquiry',
        'Training Programs',
        'Workshop Inquiry',
        'Internship Application',
        'Corporate Training',
        'Partnership Opportunity',
        'Other'
    ]

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-bg">
                    <div className="contact-hero-gradient"></div>
                    <div className="contact-hero-pattern"></div>
                </div>
                <div className="container">
                    <div className="contact-hero-content">
                        <span className="section-label">Contact Us</span>
                        <h1>Get in Touch</h1>
                        <p>
                            Have questions about our programs? Want to learn more about how we can help you?
                            We'd love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="contact-info-section">
                <div className="container">
                    <div className="contact-info-grid">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="contact-info-card">
                                <div className="contact-info-icon">
                                    <info.icon size={24} />
                                </div>
                                <h4>{info.title}</h4>
                                <p>{info.primary}</p>
                                <span>{info.secondary}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Form */}
                        <div className="contact-form-wrapper">
                            <div className="contact-form-header">
                                <h2>Send us a Message</h2>
                                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
                            </div>

                            {isSubmitted ? (
                                <div className="form-success">
                                    <div className="success-icon">
                                        <CheckCircle size={48} />
                                    </div>
                                    <h3>Message Sent Successfully!</h3>
                                    <p>Thank you for reaching out. We'll get back to you soon.</p>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => setIsSubmitted(false)}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="name">
                                                <User size={16} />
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-input"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="email">
                                                <Mail size={16} />
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-input"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="phone">
                                                <Phone size={16} />
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="form-input"
                                                placeholder="Enter your phone number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="subject">
                                                <FileText size={16} />
                                                Subject *
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                className="form-input"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select a subject</option>
                                                {subjects.map((subject, index) => (
                                                    <option key={index} value={subject}>{subject}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="message">
                                            <MessageCircle size={16} />
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="form-textarea"
                                            placeholder="Tell us about your inquiry..."
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg btn-submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner"></span>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send size={20} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="contact-sidebar">
                            {/* Quick Contact */}
                            <div className="sidebar-card">
                                <h3>Quick Contact</h3>
                                <p>Prefer to reach out directly? Here's how you can contact us.</p>

                                <div className="quick-contact-list">
                                    <a href="mailto:info@smarttech.com" className="quick-contact-item">
                                        <Mail size={20} />
                                        <span>info@smarttech.com</span>
                                    </a>
                                    <a href="tel:+919876543210" className="quick-contact-item">
                                        <Phone size={20} />
                                        <span>+91 98765 43210</span>
                                    </a>
                                    <a
                                        href="https://wa.me/919876543210"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="quick-contact-item whatsapp"
                                    >
                                        <MessageCircle size={20} />
                                        <span>Chat on WhatsApp</span>
                                    </a>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="sidebar-card">
                                <h3>Follow Us</h3>
                                <p>Stay connected and get the latest updates.</p>
                                <div className="social-links">
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

                            {/* FAQ Hint */}
                            <div className="sidebar-card faq-hint">
                                <h3>Common Questions</h3>
                                <p>Check our FAQ section for quick answers to common questions about our programs.</p>
                                <a href="/services#faq" className="sidebar-link">
                                    View FAQ
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="container">
                    <div className="map-wrapper">
                        <div className="map-overlay">
                            <div className="map-info">
                                <MapPin size={24} />
                                <div>
                                    <h4>Our Office</h4>
                                    <p>123 Tech Park, Whitefield<br />Bangalore, Karnataka 560066</p>
                                </div>
                            </div>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Get Directions
                                <ArrowRight size={18} />
                            </a>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3285478666!2d77.7173!3d12.9698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzExLjMiTiA3N8KwNDMnMDIuMyJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="SmartTech Location"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="contact-cta section">
                <div className="container">
                    <div className="contact-cta-content">
                        <h2>Ready to Start Your Journey?</h2>
                        <p>Take the first step towards your dream career. Explore our programs and find the perfect fit for you.</p>
                        <a href="/services" className="btn btn-primary btn-lg">
                            Explore Programs
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
