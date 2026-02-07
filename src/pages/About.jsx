import { Link } from 'react-router-dom'
import {
    Target,
    Eye,
    Heart,
    Users,
    Award,
    BookOpen,
    Briefcase,
    CheckCircle,
    ArrowRight,
    Zap,
    Shield,
    Clock
} from 'lucide-react'
import './About.css'

const About = () => {
    const values = [
        {
            icon: Target,
            title: 'Excellence',
            description: 'We strive for excellence in everything we do, from curriculum design to student support.'
        },
        {
            icon: Heart,
            title: 'Integrity',
            description: 'We maintain the highest standards of integrity and transparency in all our operations.'
        },
        {
            icon: Users,
            title: 'Collaboration',
            description: 'We believe in the power of collaboration between students, trainers, and industry partners.'
        },
        {
            icon: Zap,
            title: 'Innovation',
            description: 'We continuously innovate our programs to stay ahead of industry trends and technologies.'
        }
    ]

    const milestones = [
        { year: '2019', title: 'Foundation', description: 'SmartTech Management Service was founded with a vision to bridge the education-industry gap.' },
        { year: '2020', title: 'First 100 Students', description: 'Reached our first milestone of training 100 students in technical and management skills.' },
        { year: '2021', title: 'Industry Partnerships', description: 'Established partnerships with leading tech companies for internship programs.' },
        { year: '2022', title: 'Expansion', description: 'Expanded our services to include certification programs and corporate training.' },
        { year: '2023', title: '500+ Success Stories', description: 'Celebrated 500+ successful placements and career transformations.' },
        { year: '2024', title: 'National Recognition', description: 'Recognized as one of the leading skill development organizations in the region.' }
    ]

    const team = [
        {
            name: 'Rajesh Kumar',
            role: 'Founder & CEO',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
            bio: '15+ years in tech industry with experience at leading companies.'
        },
        {
            name: 'Priya Menon',
            role: 'Head of Training',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop',
            bio: 'Education expert with passion for practical learning methodologies.'
        },
        {
            name: 'Amit Sharma',
            role: 'Industry Relations',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop',
            bio: 'Building bridges between academia and industry for 10+ years.'
        },
        {
            name: 'Sneha Patel',
            role: 'Career Counselor',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
            bio: 'Dedicated to helping students find their perfect career path.'
        }
    ]

    const achievements = [
        { icon: Users, value: '500+', label: 'Students Trained' },
        { icon: Award, value: '95%', label: 'Placement Rate' },
        { icon: Briefcase, value: '30+', label: 'Industry Partners' },
        { icon: BookOpen, value: '50+', label: 'Programs' }
    ]

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-bg">
                    <div className="about-hero-gradient"></div>
                    <div className="about-hero-pattern"></div>
                </div>
                <div className="container">
                    <div className="about-hero-content">
                        <span className="section-label">About Us</span>
                        <h1>Building Future-Ready Professionals</h1>
                        <p>
                            SmartTech Management Service is committed to bridging the gap between
                            education and industry through practical, hands-on learning experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="story-section section">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-content">
                            <span className="section-label">Our Story</span>
                            <h2>From Vision to Reality</h2>
                            <div className="divider" style={{ margin: 'var(--space-4) 0 var(--space-8)' }}></div>
                            <p>
                                SmartTech Management Service was founded with a simple yet powerful vision:
                                to create a learning environment where students can gain practical,
                                industry-relevant skills that prepare them for successful careers.
                            </p>
                            <p>
                                We noticed a significant gap between what is taught in traditional educational
                                institutions and what the industry actually requires. This realization drove us
                                to create programs that focus on hands-on learning, real-world projects, and
                                direct industry exposure.
                            </p>
                            <p>
                                Today, we are proud to have helped hundreds of students and professionals
                                transform their careers through our training programs, workshops, and
                                internship opportunities.
                            </p>
                        </div>
                        <div className="story-image">
                            <div className="story-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop"
                                    alt="Team meeting"
                                />
                                <div className="story-stats">
                                    <div className="story-stat">
                                        <span className="stat-number">5+</span>
                                        <span className="stat-text">Years of Excellence</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mission-section section">
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-card">
                            <div className="mission-icon">
                                <Target size={32} />
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To bridge the gap between education and industry by providing practical
                                learning experiences in technology and management. We aim to equip students
                                and professionals with skills that are directly applicable in real-world scenarios.
                            </p>
                        </div>
                        <div className="mission-card">
                            <div className="mission-icon">
                                <Eye size={32} />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To become the leading skill development organization that transforms aspiring
                                professionals into industry-ready talents. We envision a future where every
                                learner has access to quality, practical education.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section section">
                <div className="container">
                    <span className="section-label center">What We Believe</span>
                    <h2 className="section-title">Our Core Values</h2>
                    <p className="section-subtitle">
                        The principles that guide everything we do at SmartTech Management Service.
                    </p>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon">
                                    <value.icon size={28} />
                                </div>
                                <h4>{value.title}</h4>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="achievements-section">
                <div className="container">
                    <div className="achievements-grid">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="achievement-card">
                                <achievement.icon size={32} />
                                <span className="achievement-value">{achievement.value}</span>
                                <span className="achievement-label">{achievement.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="timeline-section section">
                <div className="container">
                    <span className="section-label center">Our Journey</span>
                    <h2 className="section-title">Milestones</h2>
                    <p className="section-subtitle">
                        Key moments in our journey of empowering careers and transforming lives.
                    </p>

                    <div className="timeline">
                        {milestones.map((milestone, index) => (
                            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="timeline-content">
                                    <span className="timeline-year">{milestone.year}</span>
                                    <h4>{milestone.title}</h4>
                                    <p>{milestone.description}</p>
                                </div>
                                <div className="timeline-marker">
                                    <div className="timeline-dot"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section section">
                <div className="container">
                    <span className="section-label center">Meet the Team</span>
                    <h2 className="section-title">Our Leadership</h2>
                    <p className="section-subtitle">
                        Passionate professionals dedicated to your success.
                    </p>

                    <div className="team-grid">
                        {team.map((member, index) => (
                            <div key={index} className="team-card">
                                <div className="team-image">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className="team-info">
                                    <h4>{member.name}</h4>
                                    <span className="team-role">{member.role}</span>
                                    <p>{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Trust Us */}
            <section className="trust-section section">
                <div className="container">
                    <div className="trust-grid">
                        <div className="trust-content">
                            <span className="section-label">Why Students Trust Us</span>
                            <h2>Committed to Your Success</h2>
                            <div className="divider" style={{ margin: 'var(--space-4) 0 var(--space-8)' }}></div>
                            <ul className="trust-list">
                                <li>
                                    <CheckCircle size={20} />
                                    <div>
                                        <strong>Industry-Oriented Curriculum</strong>
                                        <p>Programs designed with direct input from industry experts</p>
                                    </div>
                                </li>
                                <li>
                                    <CheckCircle size={20} />
                                    <div>
                                        <strong>Experienced Trainers</strong>
                                        <p>Learn from professionals with real industry experience</p>
                                    </div>
                                </li>
                                <li>
                                    <CheckCircle size={20} />
                                    <div>
                                        <strong>Hands-on Learning</strong>
                                        <p>Work on real projects and build your portfolio</p>
                                    </div>
                                </li>
                                <li>
                                    <CheckCircle size={20} />
                                    <div>
                                        <strong>Career Support</strong>
                                        <p>Dedicated placement assistance and career counseling</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="trust-image">
                            <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=500&fit=crop"
                                alt="Students learning"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="about-cta section">
                <div className="container">
                    <div className="about-cta-content">
                        <h2>Ready to Transform Your Career?</h2>
                        <p>Join our community of successful professionals and take the first step towards your dream career.</p>
                        <div className="about-cta-buttons">
                            <Link to="/services" className="btn btn-primary btn-lg">
                                Explore Programs
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-lg">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
