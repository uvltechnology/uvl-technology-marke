import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner.jsx'
import Navbar from '@/components/Navbar.jsx'
import Footer from '@/components/Footer.jsx'
import Home from '@/pages/Home.jsx'
import Solutions from '@/pages/Solutions.jsx'
import Industries from '@/pages/Industries.jsx'
import Projects from '@/pages/Projects.jsx'
import ProjectDetails from '@/pages/ProjectDetails.jsx'
import About from '@/pages/About.jsx'
import Contact from '@/pages/Contact.jsx'

function App() {
	return (
		<Router>
			<div className="flex flex-col min-h-screen">
				<Navbar />
				<main className="flex-1">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/solutions" element={<Solutions />} />
						<Route path="/industries" element={<Industries />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/projects/:slug" element={<ProjectDetails />} />
						{/* Redirect old /case-studies URL to /projects for backward compatibility */}
						<Route path="/case-studies" element={<Navigate to="/projects" replace />} />
						<Route path="/case-studies/:slug" element={<Navigate to="/projects" replace />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
				<Footer />
				<Toaster />
			</div>
		</Router>
	)
}

export default App

