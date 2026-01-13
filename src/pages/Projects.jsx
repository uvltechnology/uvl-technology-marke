import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Eye } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import '../styles/projects.css'

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

import theVifMockup from '../assets/Books Template/TheVIF Product Mockup.png'
import yamconMockup from '../assets/Books Template/Yamcon Product Mockup.png'
import smsMockup from '../assets/Books Template/SMS Product Mockup.png'

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

  useEffect(() => {
    let mounted = true
    async function loadMockup() {
      // Try the exact filename user provided, then a common fallback name.
      const candidates = [
        '../assets/TheVIF mockup 3d devices.png',
        '../assets/devices-mockup.png'
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

  return (
    <div id="projects-page">
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
            ))}
          </motion.div>
        </div>
      </section>

      {/* <section className="projects-samples">
        <div className="content-left">
          <div className="devices-figure">
            {deviceSrc ? (
              <img src={deviceSrc} alt="Device mockups" className="devices-mockup" loading="lazy" />
            ) : (
              <div className="devices-placeholder" aria-hidden="true">Loading mockup…</div>
            )}
          </div>
        </div>

        <div className="content-right">
          <div className="project-detail">
            <h3 className="project-detail-title">{selected.name}</h3>
            <p className="project-detail-desc">{selected.description}</p>

            <div className="project-meta">
              <span className="meta-category">{selected.category}</span>
              <span className="meta-status">{selected.status}</span>
            </div>

            <div className="project-actions">
              <Link to={`/projects/${selected.slug}`} className="detail-link">View Project</Link>
            </div>
          </div>
        </div>
      </section> */}

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

