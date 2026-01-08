import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Eye } from '@phosphor-icons/react'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
}

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
}

// Project data - 4 projects with book colors matching Ref A
const projects = [
  {
    slug: 'aladain-jobs',
    name: 'Aladain Jobs',
    code: 'Aj',
    description: 'A modern job portal platform connecting employers with talented professionals.',
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=900&fit=crop&q=80',
    // Warm orange like Ref A
    bookColor: '#F97316',
    bookColorLight: '#FB923C',
    bookColorDark: '#C2410C'
  },
  {
    slug: 'yamcon',
    name: 'Yamcon',
    code: 'Ym',
    description: 'Conference and event management system for seamless organization.',
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=900&fit=crop&q=80',
    // Green like Ref B (Accounting Monitoring)
    bookColor: '#10B981',
    bookColorLight: '#34D399',
    bookColorDark: '#047857'
  },
  {
    slug: 'katindahan',
    name: 'Katindahan',
    code: 'Kt',
    description: 'E-commerce marketplace empowering local businesses and entrepreneurs.',
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=900&fit=crop&q=80',
    // Cyan/teal
    bookColor: '#06B6D4',
    bookColorLight: '#22D3EE',
    bookColorDark: '#0891B2'
  },
  {
    slug: 'bazz',
    name: 'BAzz',
    code: 'Bz',
    description: 'Social networking app for community building and engagement.',
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=900&fit=crop&q=80',
    // Purple/violet
    bookColor: '#8B5CF6',
    bookColorLight: '#A78BFA',
    bookColorDark: '#7C3AED'
  }
]

export default function Projects() {
  return (
    <div id="projects-page">
      {/* ===== GALAXY STAGE SECTION ===== */}
      <section className="galaxy-stage">
        {/* Background layers */}
        <div className="bg-base" />
        <div className="bg-stars" aria-hidden="true">
          {Array.from({ length: 100 }).map((_, i) => (
            <span
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 80}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${2 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        <div className="bg-nebula bg-nebula-1" />
        <div className="bg-nebula bg-nebula-2" />
        <div className="bg-vignette" />
        <div className="bg-stage-glow" />
        
        {/* Header */}
        <header className="page-header">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="header-inner"
          >
            <span className="header-tag">Our Portfolio</span>
            <h1 className="header-title">Projects</h1>
            <p className="header-desc">In Progress Builds</p>
          </motion.div>
        </header>
        
        {/* ===== BOOK + PHONE GRID ===== */}
        <div className="projects-grid-wrapper">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="projects-grid"
          >
            {projects.map((project) => (
              <motion.article
                key={project.slug}
                variants={fadeInUp}
                className="project-tile"
                style={{ 
                  '--book-main': project.bookColor,
                  '--book-light': project.bookColorLight,
                  '--book-dark': project.bookColorDark
                }}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="tile-link"
                  aria-label={`View ${project.name} project details`}
                >
                  {/* ========== PHONE MOCKUP (BACK LAYER) ========== */}
                  <div className="phone-wrapper">
                    <div className="phone-device">
                      {/* Phone frame */}
                      <div className="phone-bezel">
                        <div className="phone-notch" />
                      </div>
                      {/* Phone screen with Ref C styling */}
                      <div className="phone-screen">
                        <img 
                          src={project.image} 
                          alt={`${project.name} app interface`}
                          className="screen-img"
                          loading="lazy"
                        />
                        {/* Dark gradient overlay for text (Ref C style) */}
                        <div className="screen-overlay" />
                        {/* Project title on screen (Ref C style) */}
                        <div className="screen-text">
                          <span className="screen-title">{project.name}</span>
                        </div>
                        {/* Screen glare */}
                        <div className="screen-glare" />
                      </div>
                    </div>
                    {/* Phone shadow */}
                    <div className="phone-shadow" />
                  </div>
                  
                  {/* ========== 3D BOOK (Modern Realistic Design) ========== */}
                  <div className="book-3d">
                    {/* Book binding/spine (left side) */}
                    <div className="book-binding">
                      <div className="binding-lines" />
                    </div>
                    {/* Book pages edge (right side - paper stack) */}
                    <div className="book-pages">
                      <div className="pages-texture" />
                    </div>
                    {/* Book front cover */}
                    <div className="book-cover">
                      {/* Top label banner */}
                      <div className="cover-label">
                        <span className="label-text">{project.name.split(' ')[0].toUpperCase()}</span>
                      </div>
                      {/* Main content */}
                      <div className="cover-content">
                        <span className="book-code">{project.code}</span>
                      </div>
                      {/* Bottom hexagon icon */}
                      <div className="cover-hex-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L21.5 7.5V16.5L12 22L2.5 16.5V7.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                          <path d="M12 6L17 9V15L12 18L7 15V9L12 6Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {/* Cover emboss border */}
                      <div className="cover-border" />
                      {/* Glossy shine sweep */}
                      <div className="cover-shine" />
                      {/* Subtle texture */}
                      <div className="cover-texture" />
                    </div>
                    {/* Book top edge (paper) */}
                    <div className="book-top-edge" />
                    {/* Book shadow on floor */}
                    <div className="book-shadow" />
                    {/* Ambient glow */}
                    <div className="book-glow" />
                  </div>
                  
                  {/* ========== TEXT LABELS (UNDER STACK) ========== */}
                  <div className="tile-info">
                    <h3 className="tile-name">{project.name}</h3>
                    <div className="tile-status">
                      <span className="status-dot" />
                      <span className="status-text">In Progress</span>
                    </div>
                  </div>
                  
                  {/* ========== HOVER OVERLAY ========== */}
                  <div className="tile-hover-overlay">
                    <span className="hover-btn">
                      <Eye size={18} weight="bold" />
                      <span>See more</span>
                    </span>
                  </div>
                  
                  {/* Mobile indicator */}
                  <div className="mobile-indicator">
                    <ArrowRight size={14} weight="bold" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
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

