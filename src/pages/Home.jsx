import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
    ArrowRight,
    BookOpen,
    Users,
    Award,
    Briefcase,
    GraduationCap,
    Target,
    Zap,
    CheckCircle,
    Star,
    TrendingUp,
    Code,
    Settings,
    Rocket
} from 'lucide-react'
import './Home.css'

const Counter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0)
    const countRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (countRef.current) {
            observer.observe(countRef.current)
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current)
            }
        }
    }, [])

    useEffect(() => {
        if (!isVisible) return

        let startTime = null
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)

            setCount(Math.floor(progress * end))

            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }, [isVisible, end, duration])

    return (
        <span ref={countRef}>
            {count}{suffix}
        </span>
    )
}

const Home = () => {
    const services = [
        {
            icon: BookOpen,
            title: 'Training Programs',
            description: 'Industry-focused technical and management training with hands-on experience and expert guidance.',
            features: ['Technical Skills', 'Management Training', 'Certification Courses']
        },
        {
            icon: Settings,
            title: 'Workshops',
            description: 'Short-term, intensive workshops led by industry experts with live sessions and practical exercises.',
            features: ['Hands-on Learning', 'Industry Experts', 'Live Sessions']
        },
        {
            icon: Briefcase,
            title: 'Internships',
            description: 'Real-world project experience with mentorship support and professional recommendations.',
            features: ['Real Projects', 'Mentorship', 'Certificates']
        }
    ]

    const stats = [
        { value: 500, suffix: '+', label: 'Students Trained', icon: GraduationCap },
        { value: 50, suffix: '+', label: 'Programs Offered', icon: BookOpen },
        { value: 95, suffix: '%', label: 'Placement Rate', icon: TrendingUp },
        { value: 30, suffix: '+', label: 'Industry Partners', icon: Briefcase }
    ]

    const whyChooseUs = [
        { icon: Target, title: 'Industry-Oriented Curriculum', text: 'Our programs are designed in collaboration with industry experts to ensure relevance.' },
        { icon: Zap, title: 'Practical Learning Approach', text: 'Learn by doing with hands-on projects and real-world case studies.' },
        { icon: Users, title: 'Experienced Trainers', text: 'Learn from professionals with years of industry experience.' },
        { icon: Rocket, title: 'Career-Focused Internships', text: 'Get real work experience that prepares you for your dream job.' }
    ]

    const testimonials = [
        {
            name: 'Priya Sharma',
            role: 'Software Developer at Google',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
            text: 'The training program at SmartTech completely transformed my career. The practical approach and industry exposure helped me land my dream job.'
        },
        {
            name: 'Rahul Verma',
            role: 'Project Manager at Microsoft',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
            text: 'The management workshops were incredibly insightful. I learned skills that I use every day in my role as a project manager.'
        },
        {
            name: 'Ananya Patel',
            role: 'Data Analyst at Amazon',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
            text: 'My internship experience at SmartTech gave me the confidence and skills to excel in the tech industry. Highly recommended!'
        }
    ]

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="hero-gradient"></div>
                    <div className="hero-pattern"></div>
                    <div className="hero-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                    </div>
                </div>

                <div className="container hero-container">
                    <div className="hero-content">
                        <div className="hero-badge animate-fade-in">
                            <Star size={14} />
                            <span>Trusted by 500+ Professionals</span>
                        </div>
                        <h1 className="hero-title animate-fade-in-up">
                            Empowering Careers Through{' '}
                            <span className="gradient-text">Smart Technology</span>
                            {' '}& Management
                        </h1>
                        <p className="hero-subtitle animate-fade-in-up">
                            Training, Workshops & Internship Programs for Future-Ready Professionals.
                            Build practical skills with industry experts and launch your career.
                        </p>
                        <div className="hero-buttons animate-fade-in-up">
                            <Link to="/services" className="btn btn-primary btn-lg">
                                Explore Our Programs
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-lg">
                                Contact Us
                            </Link>
                        </div>
                        <div className="hero-features animate-fade-in">
                            <div className="hero-feature">
                                <CheckCircle size={18} />
                                <span>Industry Experts</span>
                            </div>
                            <div className="hero-feature">
                                <CheckCircle size={18} />
                                <span>Hands-on Training</span>
                            </div>
                            <div className="hero-feature">
                                <CheckCircle size={18} />
                                <span>Career Support</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual animate-slide-in-right">
                        <div className="hero-card hero-card-main">
                            <div className="hero-card-icon">
                                <Code size={32} />
                            </div>
                            <h3>Learn. Build. Grow.</h3>
                            <p>Start your journey to becoming a future-ready professional</p>
                        </div>
                        <div className="hero-card hero-card-float-1 animate-float">
                            <GraduationCap size={24} />
                            <span>500+ Graduates</span>
                        </div>
                        <div className="hero-card hero-card-float-2 animate-float" style={{ animationDelay: '1s' }}>
                            <Award size={24} />
                            <span>95% Success Rate</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="stat-icon">
                                    <stat.icon size={28} />
                                </div>
                                <div className="stat-value">
                                    <Counter end={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="about-preview section">
                <div className="container">
                    <div className="about-preview-grid">
                        <div className="about-preview-content">
                            <span className="section-label">About Us</span>
                            <h2>Building Future-Ready Professionals</h2>
                            <div className="divider" style={{ margin: 'var(--space-4) 0 var(--space-8)' }}></div>
                            <p className="about-preview-text">
                                SmartTech Management Service provides industry-focused training, hands-on workshops,
                                and real-world internship opportunities to help students and professionals build practical skills.
                            </p>
                            <p className="about-preview-text">
                                Our mission is to bridge the gap between education and industry by providing practical
                                learning experiences in technology and management.
                            </p>
                            <Link to="/about" className="btn btn-primary">
                                Learn More About Us
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="about-preview-visual">
                            <div className="about-image-wrapper">
                                <div className="about-image-bg"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                                    alt="Team collaboration"
                                    className="about-image"
                                />
                                <div className="about-experience-badge">
                                    <span className="exp-years">5+</span>
                                    <span className="exp-text">Years of Excellence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section section">
                <div className="container">
                    <span className="section-label center">What We Offer</span>
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        Comprehensive programs designed to equip you with the skills and experience needed to excel in your career.
                    </p>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.15}s` }}>
                                <div className="service-icon-wrapper">
                                    <service.icon size={32} />
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, i) => (
                                        <li key={i}>
                                            <CheckCircle size={16} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/services" className="service-link">
                                    Learn More <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-section section">
                <div className="container">
                    <div className="why-grid">
                        <div className="why-content">
                            <span className="section-label">Why SmartTech</span>
                            <h2>Why Choose Us?</h2>
                            <div className="divider" style={{ margin: 'var(--space-4) 0 var(--space-8)' }}></div>
                            <p>
                                We are committed to providing the best learning experience with industry-relevant
                                curriculum and practical training methods.
                            </p>
                        </div>
                        <div className="why-cards">
                            {whyChooseUs.map((item, index) => (
                                <div key={index} className="why-card" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="why-card-icon">
                                        <item.icon size={24} />
                                    </div>
                                    <div className="why-card-content">
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials-section section">
                <div className="container">
                    <span className="section-label center">Testimonials</span>
                    <h2 className="section-title">What Our Students Say</h2>
                    <p className="section-subtitle">
                        Hear from professionals who have transformed their careers through our programs.
                    </p>

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card" style={{ animationDelay: `${index * 0.15}s` }}>
                                <div className="testimonial-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <div className="testimonial-author">
                                    <img src={testimonial.image} alt={testimonial.name} />
                                    <div>
                                        <h4>{testimonial.name}</h4>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-bg">
                    <div className="cta-pattern"></div>
                </div>
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Start Your Journey?</h2>
                        <p>Join thousands of professionals who have transformed their careers with SmartTech.</p>
                        <div className="cta-buttons">
                            <Link to="/services" className="btn btn-white btn-lg">
                                Explore Programs
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className="btn btn-outline-white btn-lg">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
