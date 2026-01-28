import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Eye, CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useState, useEffect, useRef } from 'react'
import '../styles/projects.css'
import Navbar from "@/components/Navbar.jsx"
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 }
  }
}

import theVifMockup from '../assets/Books Template/TheVIF Product Mockup.webp'
import yamconMockup from '../assets/Books Template/Yamcon Product Mockup.webp'
import smsMockup from '../assets/Books Template/SMS Product Mockup.webp'

// Digital Services data
const digitalServices = [
  {
    id: 'e-invitation',
    name: 'E-Invitation',
    icon: '✉️',
    description: 'Modern digital invitations for weddings, events, and special occasions. Beautifully designed, eco-friendly, and easy to share.',
    features: ['Custom Designs', 'RSVP Tracking', 'Template Options'],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&q=80',
    link: 'https://e-invitation.online',
    color: '#e21d48',
    gradient: '#e21d48'
  },  {
    id: 'identity-verification',
    name: 'Identity Verification',
    icon: '🆔',
    description: 'AI-powered identity verification using ID documents and selfie recognition. Secure, fast, and accurate user authentication.',
    features: ['AI Recognition', 'Document Verification', 'Liveness Detection'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&q=80',
    link: 'https://verify.logica.ph',
    color: '#0B3D91',
    gradient: '#0B3D91',
    disabled: true
  },  // More services can be added here
]

// Project data - 4 in-progress projects with Adobe-style cube colors
const projects = [
  {
    slug: 'the-vif',
    name: 'The VIF',
    letter: 'Vf',
    description: 'A modern job portal platform connecting employers with talented professionals.',
    status: 'In Progress',
    category: 'Web Platform',
    image: theVifMockup,
    cubeColor: '#E34F26', // Red-orange
    cubeGradient: 'linear-gradient(145deg, #FF6B4A 0%, #E34F26 50%, #B8391A 100%)'
  },
  {
    slug: 'yamcon',
    name: 'Yamcon',
    letter: 'Ym',
    description: 'Conference and event management system for seamless organization.',
    status: 'In Progress',
    category: 'Event Management',
    image: yamconMockup,
    cubeColor: '#10B981', // Green
    cubeGradient: 'linear-gradient(145deg, #34D399 0%, #10B981 50%, #059669 100%)'
  },
  {
    slug: 'school-management',
    name: 'School Management System',
    letter: 'Sm',
    description: 'Full-stack school management web app for enrollment, payments, grades, schedules, role-based auth, and real-time messaging.',
    status: 'Template Available',
    category: 'Education / Template',
    image: smsMockup,
    cubeColor: '#0B3D91', // Indigo
    cubeGradient: 'linear-gradient(145deg, #2563EB 0%, #0B3D91 50%, #072A6B 100%)'
  },
  // {
  //   slug: 'katindahan',
  //   name: 'Katindahan',
  //   letter: 'Kt',
  //   description: 'E-commerce marketplace empowering local businesses and entrepreneurs.',
  //   status: 'In Progress',
  //   category: 'E-commerce',
  //   image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=900&fit=crop&q=80',
  //   cubeColor: '#06B6D4', // Cyan/teal
  //   cubeGradient: 'linear-gradient(145deg, #22D3EE 0%, #06B6D4 50%, #0891B2 100%)'
  // },
  // {
  //   slug: 'bazz',
  //   name: 'BAzz',
  //   letter: 'Bz',
  //   description: 'Social networking app for community building and engagement.',
  //   status: 'In Progress',
  //   category: 'Mobile App',
  //   image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=900&fit=crop&q=80',
  //   cubeColor: '#8B5CF6', // Purple
  //   cubeGradient: 'linear-gradient(145deg, #A78BFA 0%, #8B5CF6 50%, #7C3AED 100%)'
  // }
]

export default function Projects() {
  const [selected, setSelected] = useState(projects[0])
  const [deviceSrc, setDeviceSrc] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const itemRefs = useRef([])
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  const servicesScrollRef = useRef(null)

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Intersection Observer for mobile scroll-based highlighting
  useEffect(() => {
    if (!isMobile) return

    const observerCallback = (entries) => {
      // Find the entry that is most in view (closest to center)
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = itemRefs.current.indexOf(entry.target)
          if (index !== -1 && entry.intersectionRatio >= 0.4) {
            setActiveIndex(index)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-25% 0px -25% 0px',
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    })

    // Small delay to ensure refs are assigned
    const timer = setTimeout(() => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref)
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [isMobile])

  useEffect(() => {
    let mounted = true
    async function loadMockup() {
      // Try the exact filename user provided, then a common fallback name.
      const candidates = [
        '../assets/TheVIF mockup 3d devices.webp',
        '../assets/devices-mockup.webp'
      ]

      for (const path of candidates) {
        try {
          const mod = await import(/* @vite-ignore */ path)
          if (mounted) {
            setDeviceSrc(mod.default || mod)
            return
          }
        } catch (e) {
          // continue to next candidate
        }
      }

      // Final fallback: simple SVG data URL placeholder
      const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='500' viewBox='0 0 1200 500'><rect fill='#0f172a' width='100%' height='100%'/><g fill='#fff' font-family='sans-serif'><text x='50%' y='45%' font-size='28' text-anchor='middle' fill='#cbd5e1'>Device mockup placeholder</text><text x='50%' y='60%' font-size='18' text-anchor='middle' fill='#94a3b8'>Add TheVIF mockup 3d devices.png to src/assets</text></g></svg>`
      const url = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg)
      if (mounted) setDeviceSrc(url)
    }

    loadMockup()
    return () => { mounted = false }
  }, [])

  // Handle carousel scroll with boundaries
  const handleServiceScroll = (direction) => {
    const container = servicesScrollRef.current
    if (!container) return

    const cardWidth = container.querySelector('.service-card')?.offsetWidth || 0
    const gap = 32 // 2rem gap
    const scrollAmount = cardWidth + gap
    const maxScroll = container.scrollWidth - container.clientWidth

    let targetScroll
    if (direction === 'next') {
      targetScroll = Math.min(container.scrollLeft + scrollAmount, maxScroll)
    } else {
      targetScroll = Math.max(container.scrollLeft - scrollAmount, 0)
    }

    container.scrollTo({ left: targetScroll, behavior: 'smooth' })
  }

  // Update current index on scroll with debouncing
  useEffect(() => {
    const container = servicesScrollRef.current
    if (!container) return

    let scrollTimeout
    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        const scrollLeft = container.scrollLeft
        const cardWidth = container.querySelector('.service-card')?.offsetWidth || 0
        const gap = 32
        const index = Math.round(scrollLeft / (cardWidth + gap))
        setCurrentServiceIndex(Math.min(index, digitalServices.length - 1))
      }, 50)
    }

    // Prevent overscroll
    const preventOverscroll = (e) => {
      const maxScroll = container.scrollWidth - container.clientWidth
      if (container.scrollLeft <= 0 && e.deltaX < 0) {
        e.preventDefault()
      } else if (container.scrollLeft >= maxScroll && e.deltaX > 0) {
        e.preventDefault()
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    container.addEventListener('wheel', preventOverscroll, { passive: false })
    
    return () => {
      clearTimeout(scrollTimeout)
      container.removeEventListener('scroll', handleScroll)
      container.removeEventListener('wheel', preventOverscroll)
    }
  }, [digitalServices.length])

  return (
    <div id="projects-page">
      <Navbar />
      {/* ===== SHOWCASE STAGE SECTION ===== */}
      <section className="showcase-stage">
        {/* Layer 0: Base background */}
        <div className="stage-bg-base" />
        
        {/* Layer 1: Radial gradient overlay */}
        <div className="stage-bg-gradient" />
        
        {/* Layer 2: Pattern grid */}
        <div className="stage-pattern-grid" />

        {/* Layer 4: Vignette overlay */}
        <div className="stage-vignette" />


        {/* Header */}
        <header className="stage-header">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="header-content"
          >
            <span className="header-eyebrow">Our Portfolio</span>
            <h1 className="header-title">Projects</h1>
          </motion.div>
        </header>

        {/* ===== PHONE + CUBE LINEUP ===== */}
        <div className="lineup-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="lineup-row"
          >
            {projects.map((project, index) => (
              <div
                key={project.slug}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`showcase-item-wrapper ${isMobile && activeIndex === index ? 'is-active' : ''}`}
              >
                <motion.article
                  variants={fadeInUp}
                  className="showcase-item"
                  style={{
                    '--cube-color': project.cubeColor,
                    '--cube-gradient': project.cubeGradient,
                    '--item-index': index
                  }}
                >
                <Link
                  to={`/projects/${project.slug}`}
                  className="item-link"
                  aria-label={`View ${project.name} project`}
                >
                  {/* Phone mockup (BEHIND - Layer 6) */}
                  <img
                    src={project.image}
                    alt={`${project.name} app screen`}
                    className="screen-image"
                    loading="lazy"
                  />

                  {/* Project name label */}
                  <div className="item-label">
                    <span className="label-name">{project.name}</span>
                    <span className="label-status">{project.status}</span>
                  </div>

                  {/* Mobile tap indicator */}
                  <div className="mobile-tap-hint">
                    <ArrowRight size={14} weight="bold" />
                  </div>
                </Link>
              </motion.article>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== DIGITAL SERVICES SECTION ===== */}
      <section className="digital-services">
        <div className="services-bg" />
        <div className="services-pattern" />
        
        <div className="services-container">
          <motion.header
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="services-header"
          >
            <h2 className="services-title">Digital Services</h2>
            <p className="services-subtitle">
              Tailored digital solutions to elevate your brand and streamline your events
            </p>
          </motion.header>

          {/* Carousel Navigation */}
          <div className="carousel-controls">
            <button
              onClick={() => handleServiceScroll('prev')}
              className="carousel-arrow carousel-arrow-prev"
              aria-label="Previous service"
              disabled={currentServiceIndex === 0}
            >
              <CaretLeft size={24} weight="bold" />
            </button>
            <button
              onClick={() => handleServiceScroll('next')}
              className="carousel-arrow carousel-arrow-next"
              aria-label="Next service"
              disabled={currentServiceIndex >= digitalServices.length - 1}
            >
              <CaretRight size={24} weight="bold" />
            </button>
          </div>

          {/* Horizontal Scroll Container */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="services-carousel"
            ref={servicesScrollRef}
          >
            {digitalServices.map((service, index) => (
              <motion.article
                key={service.id}
                variants={fadeInUp}
                className="service-card"
                style={{
                  '--service-color': service.color,
                  '--service-gradient': service.gradient
                }}
              >
                <div className="service-card-glow" />
                
                {/* Service Image */}
                <div className="service-image-wrapper">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="service-image"
                    loading="lazy"
                  />
                  <div className="service-overlay" />
                </div>

                {/* Content Overlay */}
                <div className="service-content-overlay">
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-description">{service.description}</p>

                  {service.disabled ? (
                    <button 
                      className="service-link service-link-disabled"
                      disabled
                    >
                      <span>Coming Soon</span>
                    </button>
                  ) : (
                    <a 
                      href={service.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="service-link"
                    >
                      <span>Visit Now</span>
                      <ArrowRight size={16} weight="bold" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Progress Indicators */}
          <div className="carousel-indicators">
            {digitalServices.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = servicesScrollRef.current
                  if (container) {
                    const cardWidth = container.querySelector('.service-card')?.offsetWidth || 0
                    const gap = 32
                    const targetScroll = index * (cardWidth + gap)
                    const maxScroll = container.scrollWidth - container.clientWidth
                    
                    container.scrollTo({
                      left: Math.min(targetScroll, maxScroll),
                      behavior: 'smooth'
                    })
                    setCurrentServiceIndex(index)
                  }
                }}
                className={`indicator-dot ${currentServiceIndex === index ? 'active' : ''}`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="projects-cta">
        <div className="cta-bg" />
        <div className="cta-pattern" />
        <div className="cta-glow" />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="cta-content"
        >
          <h2 className="cta-title">Have a Project in Mind?</h2>
          <p className="cta-text">
            Let's collaborate and bring your vision to life with Logica.
          </p>
          <Link to="/contact" className="cta-button">
            <span>Start Your Project</span>
            <ArrowRight size={20} weight="bold" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

