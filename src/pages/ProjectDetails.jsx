import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Code, Folder } from '@phosphor-icons/react'
import StarField from '@/components/StarField.jsx'
import theVifMockup from '../assets/Devices Mockup/TheVIF mockup 3d devices.png'
import yamconMockup from '../assets/Devices Mockup/Yamcon mockup 3d devices.png'
import smsMockup from '../assets/Devices Mockup/SMS mockup 3d devices.png'
import Navbar from "@/components/Navbar.jsx"
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Project data - must match Projects.jsx
const projectsData = {
  'the-vif': {
    name: 'The VIF',
    description: 'Charming villas and apartments in La Turbie and Cannes, with breathtaking views of Monaco and the Mediterranean. Features include booking management, property listings, and customer reviews.',
    status: 'In Progress',
    category: 'Real Estate',
    technologies: ['React', 'Node.js', 'Express'],
    timeline: 'Q2 2026',
    albumImage: theVifMockup,
    projectBgColor: '#1E293B'
  },
  'yamcon': {
    name: 'Yamcon',
    description: 'Rent professional tools at affordable rates. Yamcon Tools provides a platform for renting high-quality equipment for construction, home improvement, and DIY projects with easy booking and delivery options.',
    status: 'In Progress',
    category: 'Tool Rental',
    technologies: ['React', 'Node.js', 'Express', 'Socket.io'],
    timeline: 'Q1 2026',
    albumImage: yamconMockup,
    projectBgColor: '#3D3A1F'
  },
  'school-management': {
    name: 'School Management System',
    description: 'A Web Based School Management System handling enrollment, payments, grades, schedules, auth, real-time messaging, and role-based workflows for admin/teacher/parent/student.',
    status: 'Done',
    category: 'Education / Template',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Socket.io', 'Paymongo'],
    timeline: 'Q4 2025',
    albumImage: smsMockup,
    projectBgColor: '#051b71'
  },
  // 'katindahan': {
  //   name: 'Katindahan',
  //   description: 'E-commerce marketplace empowering local businesses and entrepreneurs. Features multi-vendor support, secure payments, inventory management, and delivery tracking integration.',
  //   status: 'In Progress',
  //   category: 'E-commerce',
  //   technologies: ['React', 'Node.js', 'MySQL', 'Stripe'],
  //   timeline: 'Q3 2026'
  // },
  // 'bazz': {
  //   name: 'BAzz',
  //   description: 'Social networking app for community building and engagement. Includes group chat, event organization, content sharing, and community moderation tools.',
  //   status: 'In Progress',
  //   category: 'Mobile App',
  //   technologies: ['React Native', 'Firebase', 'Node.js'],
  //   timeline: 'Q3 2026'
  // }
}


export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projectsData[slug]

  // Redirect to projects page if project not found
  if (!project) {
    return <Navigate to="/projects" replace />
  }

  // Page background style: radial gradients + subtle grid overlay
  const pageBgStyle = {
    minHeight: '100vh',
    backgroundImage: `
      radial-gradient(ellipse at 10% 10%, rgba(99,102,241,0.08) 0%, transparent 25%),
      radial-gradient(ellipse at 90% 90%, rgba(124,58,237,0.06) 0%, transparent 30%),
      linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
    `,
    backgroundSize: '100% 100%, 100% 100%, 20px 20px, 20px 20px',
    backgroundRepeat: 'no-repeat, no-repeat, repeat, repeat',
    backgroundColor: '#0f1724'
  }

  return (
    <div id="project-details-page" style={pageBgStyle}>
      <Navbar />
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
          style={{ backgroundColor: project.projectBgColor }}
        >
          {/* Album Image */}
          <div className="details-image-wrapper">
            <img
              src={project.albumImage}
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
                        background: 'rgba(124, 58, 237, 0.15)',
                        border: '1px solid rgba(124, 58, 237, 0.3)',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        color: '#A855F7'
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
            background: 'rgba(124, 58, 237, 0.1)',
            border: '1px solid rgba(124, 58, 237, 0.2)',
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
