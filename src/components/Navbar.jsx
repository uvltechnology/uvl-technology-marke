import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
// toggle icon is implemented with CSS/HTML for smooth morph animations
import { Button } from '@/components/ui/button.jsx'
import logo from '@/assets/logica1.jpg'
import './Navbar.css'

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const location = useLocation()
	const isTransparentPage = location.pathname === '/' || location.pathname === '/about'

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		setIsMobileMenuOpen(false)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [location.pathname])

	const navLinks = [
		{ name: 'Home', path: '/' },
		// { name: 'Solutions', path: '/solutions' }, // Hidden for now
		// { name: 'Industries', path: '/industries' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'About Us', path: '/about' },
	]

	// Determine navbar background based on scroll position and current page
	const getNavbarBg = () => {
		if (isScrolled) {
			return 'navbar-scrolled bg-[#0A0612]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(124,58,237,0.2)]'
		}
		if (isTransparentPage) {
			return 'bg-transparent'
		}
		return 'navbar-glass bg-[#0A0612]/70 backdrop-blur-md'
	}

	return (
		<>
			<nav
				id="galaxy-navbar"
				className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarBg()}`}
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">
						<Link to="/" className="flex items-center gap-3 group shrink-0">
							<img src={logo} alt="Logica" className="w-11 h-11 rounded-xl object-cover shadow-md group-hover:shadow-[0_0_12px_rgba(124,58,237,0.25)] transition-all duration-300" />
							<span className="text-[#F8FAFC] font-heading font-bold text-xl tracking-wide group-hover:text-[#A855F7] transition-colors duration-300">
								Logica
							</span>
						</Link>

						<div className="hidden lg:flex items-center gap-2 flex-1 justify-center">
							{navLinks.map((link) => (
								<Link
									key={link.path}
									to={link.path}
									className={`nav-link text-sm font-medium transition-all duration-200 relative px-4 py-2 rounded-lg ${
										location.pathname === link.path
											? 'text-[#A855F7] bg-[#7C3AED]/10'
											: 'text-[#CBD5E1] hover:text-[#F8FAFC] hover:bg-[#7C3AED]/10'
									}`}
								>
									{link.name}
								</Link>
							))}
						</div>

						<div className="hidden lg:block shrink-0">
							<Link to="/contact">
								<Button className="bg-galaxy-gradient hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-105 transition-all duration-300 font-semibold px-6">
									Book Consultation
								</Button>
							</Link>
						</div>

						<button
							id="mobile-menu-toggle"
							aria-controls="mobile-menu-root"
							className={`block lg:hidden z-50 menu-toggle p-2 rounded-lg transition-colors ${isMobileMenuOpen ? 'open' : ''}`}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
							aria-expanded={isMobileMenuOpen}
						>
							<span className="menu-toggle-box" aria-hidden="true">
								<span className="menu-toggle-line line1" />
								<span className="menu-toggle-line line2" />
								<span className="menu-toggle-line line3" />
							</span>
						</button>
					</div>
				</div>
			</nav>

			<div className={`mobile-menu-root lg:hidden ${isMobileMenuOpen ? 'open' : ''}`} aria-hidden={!isMobileMenuOpen} style={{ ['--items']: navLinks.length + 1 }}>
				<div
					className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}
					onClick={() => setIsMobileMenuOpen(false)}
				/>
				<div className={`mobile-panel ${isMobileMenuOpen ? 'open' : ''}`}>
					<div className="mobile-panel-inner p-6 pt-20">
						<div className="flex flex-col gap-4 max-w-full mx-auto" style={{ '--items': navLinks.length + 1 }}>
							{navLinks.map((link, idx) => (
								<Link
									key={link.path}
									to={link.path}
									style={{ ['--i']: idx }}
									className={`mobile-menu-item text-2xl font-medium transition-all duration-200 px-4 py-4 rounded-xl ${
										location.pathname === link.path
											? 'text-[#A855F7] bg-[#7C3AED]/15'
											: 'text-[#F8FAFC] hover:bg-[#7C3AED]/10'
										}`}
								>
									{link.name}
								</Link>
							))}
							<Link to="/contact" className="mt-6 mobile-menu-item" style={{ ['--i']: navLinks.length }}>
								<Button className="w-full bg-galaxy-gradient hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] font-semibold py-5 text-lg">
									Book Consultation
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

