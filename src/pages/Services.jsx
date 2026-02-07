import { Link } from 'react-router-dom'
import {
    BookOpen,
    Settings,
    Briefcase,
    CheckCircle,
    ArrowRight,
    Clock,
    Users,
    Award,
    Target,
    Zap,
    Code,
    Database,
    Cloud,
    Smartphone,
    BarChart,
    MessageSquare,
    Star,
    Calendar
} from 'lucide-react'
import './Services.css'

const Services = () => {
    const trainingPrograms = [
        {
            icon: Code,
            title: 'Full Stack Development',
            duration: '12 weeks',
            description: 'Master both frontend and backend technologies with hands-on projects.',
            features: ['React, Node.js, MongoDB', 'Real-world projects', 'Industry mentorship']
        },
        {
            icon: Database,
            title: 'Data Science & Analytics',
            duration: '10 weeks',
            description: 'Learn data analysis, machine learning, and visualization techniques.',
            features: ['Python, Pandas, ML', 'Statistical analysis', 'Business intelligence']
        },
        {
            icon: Cloud,
            title: 'Cloud Computing',
            duration: '8 weeks',
            description: 'Master cloud platforms and DevOps practices.',
            features: ['AWS, Azure, GCP', 'DevOps tools', 'Cloud architecture']
        },
        {
            icon: Smartphone,
            title: 'Mobile App Development',
            duration: '10 weeks',
            description: 'Build cross-platform mobile applications.',
            features: ['React Native, Flutter', 'iOS & Android', 'App deployment']
        },
        {
            icon: BarChart,
            title: 'Digital Marketing',
            duration: '6 weeks',
            description: 'Learn SEO, social media, and performance marketing.',
            features: ['SEO & SEM', 'Social media strategy', 'Analytics & reporting']
        },
        {
            icon: MessageSquare,
            title: 'Project Management',
            duration: '6 weeks',
            description: 'Develop leadership and project management skills.',
            features: ['Agile & Scrum', 'Team leadership', 'Risk management']
        }
    ]

    const workshops = [
        {
            title: 'React Masterclass',
            date: 'Every Saturday',
            duration: '4 hours',
            level: 'Intermediate'
        },
        {
            title: 'AI & Machine Learning Bootcamp',
            date: 'Monthly',
            duration: '2 days',
            level: 'Advanced'
        },
        {
            title: 'UI/UX Design Sprint',
            date: 'Bi-weekly',
            duration: '6 hours',
            level: 'Beginner'
        },
        {
            title: 'Communication Skills Workshop',
            date: 'Weekly',
            duration: '3 hours',
            level: 'All levels'
        }
    ]

    const internshipBenefits = [
        {
            icon: Target,
            title: 'Real-World Projects',
            description: 'Work on actual industry projects that add value to your portfolio.'
        },
        {
            icon: Users,
            title: 'Mentorship Support',
            description: 'Get guidance from experienced professionals throughout your internship.'
        },
        {
            icon: Award,
            title: 'Certification',
            description: 'Receive an internship certificate and recommendation letter upon completion.'
        },
        {
            icon: Briefcase,
            title: 'Career Opportunities',
            description: 'Top performers get opportunities for full-time positions.'
        }
    ]

    const pricingPlans = [
        {
            name: 'Basic',
            price: '₹15,000',
            duration: 'Per course',
            features: [
                'Access to course materials',
                'Online sessions',
                'Certificate upon completion',
                'Email support'
            ],
            popular: false
        },
        {
            name: 'Professional',
            price: '₹35,000',
            duration: 'Per program',
            features: [
                'All Basic features',
                'Live project work',
                'Mentorship sessions',
                'Career counseling',
                'Interview preparation'
            ],
            popular: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            duration: 'For corporates',
            features: [
                'All Professional features',
                'Customized curriculum',
                'On-site training',
                'Dedicated account manager',
                'Bulk discounts'
            ],
            popular: false
        }
    ]

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="services-hero-bg">
                    <div className="services-hero-gradient"></div>
                    <div className="services-hero-pattern"></div>
                </div>
                <div className="container">
                    <div className="services-hero-content">
                        <span className="section-label">Our Services</span>
                        <h1>Transform Your Career with Industry-Ready Skills</h1>
                        <p>
                            Comprehensive training programs, hands-on workshops, and real-world internships
                            designed to prepare you for success in the tech and management industry.
                        </p>
                    </div>
                </div>
            </section>

            {/* Training Programs */}
            <section id="training" className="training-section section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-header-content">
                            <span className="section-label">Training Programs</span>
                            <h2>🧠 Technical & Management Training</h2>
                            <p>Industry-focused programs designed to build practical skills that employers value.</p>
                        </div>
                    </div>

                    <div className="training-grid">
                        {trainingPrograms.map((program, index) => (
                            <div key={index} className="training-card">
                                <div className="training-card-header">
                                    <div className="training-icon">
                                        <program.icon size={28} />
                                    </div>
                                    <div className="training-meta">
                                        <Clock size={16} />
                                        <span>{program.duration}</span>
                                    </div>
                                </div>
                                <h3>{program.title}</h3>
                                <p>{program.description}</p>
                                <ul className="training-features">
                                    {program.features.map((feature, i) => (
                                        <li key={i}>
                                            <CheckCircle size={16} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="training-link">
                                    Enroll Now <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workshops */}
            <section id="workshops" className="workshops-section section">
                <div className="container">
                    <div className="workshops-layout">
                        <div className="workshops-content">
                            <span className="section-label">Workshops</span>
                            <h2>🛠 Hands-on Workshops</h2>
                            <div className="divider" style={{ margin: 'var(--space-4) 0 var(--space-8)' }}></div>
                            <p>
                                Short-term, intensive workshops led by industry experts. Get hands-on experience
                                with the latest technologies and methodologies.
                            </p>
                            <ul className="workshops-benefits">
                                <li>
                                    <Zap size={20} />
                                    <span>Interactive live sessions with industry experts</span>
                                </li>
                                <li>
                                    <Target size={20} />
                                    <span>Practical exercises and real-world case studies</span>
                                </li>
                                <li>
                                    <Award size={20} />
                                    <span>Workshop participation certificate</span>
                                </li>
                                <li>
                                    <Users size={20} />
                                    <span>Available for colleges and corporates</span>
                                </li>
                            </ul>
                            <Link to="/contact" className="btn btn-primary">
                                Request Workshop
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="workshops-list">
                            {workshops.map((workshop, index) => (
                                <div key={index} className="workshop-card">
                                    <div className="workshop-info">
                                        <h4>{workshop.title}</h4>
                                        <div className="workshop-meta">
                                            <span><Calendar size={14} /> {workshop.date}</span>
                                            <span><Clock size={14} /> {workshop.duration}</span>
                                        </div>
                                    </div>
                                    <span className="workshop-level">{workshop.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Internships */}
            <section id="internships" className="internships-section section">
                <div className="container">
                    <span className="section-label center">Internships</span>
                    <h2 className="section-title">🎓 Real-World Internships</h2>
                    <p className="section-subtitle">
                        Gain practical experience through mentored internship programs with real industry projects.
                    </p>

                    <div className="internship-benefits-grid">
                        {internshipBenefits.map((benefit, index) => (
                            <div key={index} className="internship-benefit-card">
                                <div className="benefit-icon">
                                    <benefit.icon size={28} />
                                </div>
                                <h4>{benefit.title}</h4>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="internship-cta">
                        <div className="internship-cta-content">
                            <h3>Ready to Kickstart Your Career?</h3>
                            <p>Apply for our internship program and gain hands-on industry experience.</p>
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Apply for Internship
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="pricing-section section">
                <div className="container">
                    <span className="section-label center">Pricing</span>
                    <h2 className="section-title">Investment in Your Future</h2>
                    <p className="section-subtitle">
                        Choose a plan that suits your learning goals and career aspirations.
                    </p>

                    <div className="pricing-grid">
                        {pricingPlans.map((plan, index) => (
                            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                                {plan.popular && <span className="popular-badge">Most Popular</span>}
                                <h3>{plan.name}</h3>
                                <div className="pricing-price">
                                    <span className="price">{plan.price}</span>
                                    <span className="duration">{plan.duration}</span>
                                </div>
                                <ul className="pricing-features">
                                    {plan.features.map((feature, i) => (
                                        <li key={i}>
                                            <CheckCircle size={18} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to="/contact"
                                    className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-full`}
                                >
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="faq-section section">
                <div className="container">
                    <div className="faq-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Have questions? We've got answers.</p>
                    </div>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>What are the prerequisites for training programs?</h4>
                            <p>Most programs are designed for beginners, though some advanced courses require basic knowledge. Check individual program descriptions for specific requirements.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Do you provide placement assistance?</h4>
                            <p>Yes! We offer comprehensive placement assistance including resume building, interview preparation, and connections with our industry partners.</p>
                        </div>
                        <div className="faq-item">
                            <h4>What is the duration of internships?</h4>
                            <p>Our internships typically range from 4 to 12 weeks, depending on the program and project requirements.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Can I get a refund if I'm not satisfied?</h4>
                            <p>We offer a 7-day money-back guarantee for all our training programs if you're not satisfied with the quality.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="services-cta">
                <div className="services-cta-bg">
                    <div className="services-cta-pattern"></div>
                </div>
                <div className="container">
                    <div className="services-cta-content">
                        <h2>Not Sure Which Program is Right for You?</h2>
                        <p>Our career counselors can help you choose the perfect learning path based on your goals.</p>
                        <Link to="/contact" className="btn btn-white btn-lg">
                            Schedule a Free Consultation
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
