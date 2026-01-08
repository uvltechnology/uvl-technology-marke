import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Code, Folder } from '@phosphor-icons/react'
import StarField from '@/components/StarField.jsx'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Project data - must match Projects.jsx
const projectsData = {
  'aladain-jobs': {
    name: 'Aladain Jobs',
    description: 'A modern job portal platform connecting employers with talented professionals. Features include advanced job search, applicant tracking, resume builder, and intelligent job matching powered by AI.',
    status: 'In Progress',
    category: 'Web Platform',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    timeline: 'Q2 2026'
  },
  'yamcon': {
    name: 'Yamcon',
    description: 'Conference and event management system for seamless organization. Includes registration management, speaker coordination, schedule planning, virtual event support, and real-time analytics.',
    status: 'In Progress',
    category: 'Event Management',
    technologies: ['React', 'Express', 'MongoDB', 'Socket.io'],
    timeline: 'Q2 2026'
  },
  'katindahan': {
    name: 'Katindahan',
    description: 'E-commerce marketplace empowering local businesses and entrepreneurs. Features multi-vendor support, secure payments, inventory management, and delivery tracking integration.',
    status: 'In Progress',
    category: 'E-commerce',
    technologies: ['React', 'Node.js', 'MySQL', 'Stripe'],
    timeline: 'Q3 2026'
  },
  'bazz': {
    name: 'BAzz',
    description: 'Social networking app for community building and engagement. Includes group chat, event organization, content sharing, and community moderation tools.',
    status: 'In Progress',
    category: 'Mobile App',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    timeline: 'Q3 2026'
  }
}

// Placeholder image for projects
const placeholderImage = 'data:image/svg+xml,' + encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#1A1033"/>
        <stop offset="50%" style="stop-color:#0F0A1F"/>
        <stop offset="100%" style="stop-color:#251845"/>
      </linearGradient>
      <radialGradient id="glow1" cx="30%" cy="30%" r="50%">
        <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:0.4"/>
        <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:0"/>
      </radialGradient>
      <radialGradient id="glow2" cx="70%" cy="70%" r="40%">
        <stop offset="0%" style="stop-color:#EC4899;stop-opacity:0.3"/>
        <stop offset="100%" style="stop-color:#EC4899;stop-opacity:0"/>
      </radialGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bg)"/>
    <rect width="1200" height="675" fill="url(#glow1)"/>
    <rect width="1200" height="675" fill="url(#glow2)"/>
    <circle cx="200" cy="150" r="3" fill="#F8FAFC" opacity="0.6"/>
    <circle cx="950" cy="100" r="2" fill="#F8FAFC" opacity="0.4"/>
    <circle cx="600" cy="300" r="2" fill="#F8FAFC" opacity="0.5"/>
    <circle cx="1000" cy="450" r="3" fill="#F8FAFC" opacity="0.3"/>
    <circle cx="150" cy="500" r="2" fill="#F8FAFC" opacity="0.5"/>
    <circle cx="800" cy="200" r="1.5" fill="#F8FAFC" opacity="0.4"/>
    <circle cx="350" cy="550" r="3" fill="#F8FAFC" opacity="0.3"/>
    <circle cx="900" cy="600" r="2" fill="#F8FAFC" opacity="0.5"/>
  </svg>
`)

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projectsData[slug]

  // Redirect to projects page if project not found
  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div id="project-details-page">
      {/* Background stars */}
      <div className="fixed inset-0 pointer-events-none">
        <StarField count={30} />
      </div>

      <div className="details-container">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/projects" className="details-back-link">
            <ArrowLeft size={20} weight="bold" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Card */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="details-card"
        >
          {/* Image */}
          <div className="details-image-wrapper">
            <img 
              src={placeholderImage}
              alt={project.name}
              className="details-image"
            />
            <div className="details-image-overlay" />
          </div>

          {/* Content */}
          <div className="details-content">
            {/* Status Badge */}
            <div className="details-status-badge">
              <span className="details-status-dot" />
              <span className="details-status-text">{project.status}</span>
            </div>

            {/* Title */}
            <h1 className="details-title">{project.name}</h1>

            {/* Description */}
            <p className="details-description">{project.description}</p>

            {/* Info Grid */}
            <div className="details-info-grid">
              <div className="details-info-item">
                <span className="details-info-label">
                  <Folder size={14} weight="bold" style={{ display: 'inline', marginRight: '6px' }} />
                  Category
                </span>
                <span className="details-info-value">{project.category}</span>
              </div>

              <div className="details-info-item">
                <span className="details-info-label">
                  <Clock size={14} weight="bold" style={{ display: 'inline', marginRight: '6px' }} />
                  Expected Launch
                </span>
                <span className="details-info-value">{project.timeline}</span>
              </div>

              <div className="details-info-item" style={{ gridColumn: 'span 2' }}>
                <span className="details-info-label">
                  <Code size={14} weight="bold" style={{ display: 'inline', marginRight: '6px' }} />
                  Technologies
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      style={{
                        padding: '4px 12px',
                        background: 'rgba(139, 92, 246, 0.15)',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        color: '#A78BFA'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            marginTop: '32px',
            padding: '24px',
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '16px',
            textAlign: 'center'
          }}
        >
          <p style={{ color: '#CBD5E1', fontSize: '1rem', margin: 0 }}>
            🚀 This project is currently in development. Stay tuned for updates!
          </p>
        </motion.div>
      </div>
    </div>
  )
}
