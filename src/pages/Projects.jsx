import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Eye } from '@phosphor-icons/react'

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

// Project data - 4 in-progress projects with Adobe-style cube colors
const projects = [
  {
    slug: 'the-vif',
    name: 'The VIF',
    letter: 'Vf',
    description: 'A modern job portal platform connecting employers with talented professionals.',
    status: 'In Progress',
    category: 'Web Platform',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=900&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=900&fit=crop&q=80',
    cubeColor: '#10B981', // Green
    cubeGradient: 'linear-gradient(145deg, #34D399 0%, #10B981 50%, #059669 100%)'
  },
  {
    slug: 'katindahan',
    name: 'Katindahan',
    letter: 'Kt',
    description: 'E-commerce marketplace empowering local businesses and entrepreneurs.',
    status: 'In Progress',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=900&fit=crop&q=80',
    cubeColor: '#06B6D4', // Cyan/teal
    cubeGradient: 'linear-gradient(145deg, #22D3EE 0%, #06B6D4 50%, #0891B2 100%)'
  },
  {
    slug: 'bazz',
    name: 'BAzz',
    letter: 'Bz',
    description: 'Social networking app for community building and engagement.',
    status: 'In Progress',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=900&fit=crop&q=80',
    cubeColor: '#8B5CF6', // Purple
    cubeGradient: 'linear-gradient(145deg, #A78BFA 0%, #8B5CF6 50%, #7C3AED 100%)'
  }
]

export default function Projects() {
  return (
    <div id="projects-page">
      {/* ===== SHOWCASE STAGE SECTION ===== */}
      <section className="showcase-stage">
        {/* Layer 0: Base cosmic background */}
        <div className="stage-bg-base" />
        
        {/* Layer 1: Star particles */}
        <div className="stage-stars" aria-hidden="true">
          {Array.from({ length: 80 }).map((_, i) => (
            <span
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 70}%`,
                width: `${Math.random() * 2.5 + 0.5}px`,
                height: `${Math.random() * 2.5 + 0.5}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Layer 2: Nebula clouds */}
        <div className="stage-nebula stage-nebula-left" />
        <div className="stage-nebula stage-nebula-right" />
        
        {/* Layer 3: Warm orange flare (left side) */}
        <div className="stage-warm-flare" />
        
        {/* Layer 4: Vignette overlay */}
        <div className="stage-vignette" />
        
        {/* Layer 5: Neon horizon platform */}
        <div className="stage-platform">
          <div className="platform-glow-line" />
          <div className="platform-reflection-surface" />
          <div className="platform-ambient-glow" />
        </div>
        
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
            <p className="header-subtitle">In Progress Builds</p>
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
              <motion.article
                key={project.slug}
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
                  <div className="phone-mockup">
                    <div className="phone-frame">
                      <div className="phone-notch" />
                      <div className="phone-screen">
                        <img 
                          src={project.image} 
                          alt={`${project.name} app screen`}
                          className="screen-image"
                          loading="lazy"
                        />
                        <div className="screen-glare" />
                      </div>
                    </div>
                    <div className="phone-reflection" />
                  </div>
                  
                  {/* 3D Cube block (FRONT - Layer 7) */}
                  <div className="cube-3d">
                    {/* Cube faces */}
                    <div className="cube-front">
                      <span className="cube-letter">{project.letter}</span>
                      <div className="cube-shine" />
                    </div>
                    <div className="cube-top" />
                    <div className="cube-right" />
                    
                    {/* Hover overlay */}
                    <div className="cube-overlay">
                      <span className="see-more-pill">
                        <Eye size={16} weight="bold" />
                        <span>See more</span>
                      </span>
                    </div>
                  </div>
                  
                  {/* Cube floor reflection (Layer 8) */}
                  <div className="cube-reflection" />
                  
                  {/* Cube glow on floor */}
                  <div className="cube-floor-glow" />
                  
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

