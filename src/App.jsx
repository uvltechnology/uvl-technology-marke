import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner.jsx'
import Navbar from '@/components/Navbar.jsx'
import Footer from '@/components/Footer.jsx'
import Home from '@/pages/Home.jsx'
import Solutions from '@/pages/Solutions.jsx'
import Industries from '@/pages/Industries.jsx'
import CaseStudies from '@/pages/CaseStudies.jsx'
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
						<Route path="/case-studies" element={<CaseStudies />} />
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

