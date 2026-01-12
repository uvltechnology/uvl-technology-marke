import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button.jsx'
import logo from '@/assets/logica1.jpg'

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const location = useLocation()

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
		{ name: 'About', path: '/about' },
	]

	return (
		<>
			<nav
				id="galaxy-navbar"
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled 
						? 'navbar-scrolled bg-[#0A0612]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(124,58,237,0.2)]' 
						: 'navbar-glass bg-[#0A0612]/70 backdrop-blur-md'
				}`}
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">
						<Link to="/" className="flex items-center gap-3 group shrink-0">
							<img src={logo} alt="Logica" className="w-11 h-11 rounded-xl object-cover shadow-lg group-hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] transition-all duration-300" />
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
									{location.pathname === link.path && (
										<span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#7C3AED] rounded-full shadow-[0_0_8px_rgba(124,58,237,0.7)]" />
									)}
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
							className="lg:hidden text-[#F8FAFC] p-2 hover:bg-[#7C3AED]/10 rounded-lg transition-colors"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							aria-label="Toggle menu"
						>
							{isMobileMenuOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
						</button>
					</div>
				</div>
			</nav>

			{isMobileMenuOpen && (
				<div className="fixed inset-0 z-40 lg:hidden">
					<div 
						className="fixed inset-0 bg-[#050309]/90 backdrop-blur-xl" 
						onClick={() => setIsMobileMenuOpen(false)}
					/>
					<div className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-[#0A0612] border-l border-[#7C3AED]/20 shadow-[-10px_0_40px_rgba(124,58,237,0.15)]">
						<div className="flex flex-col gap-2 p-6">
							{navLinks.map((link) => (
								<Link
									key={link.path}
									to={link.path}
									className={`text-lg font-medium transition-all duration-200 px-4 py-3 rounded-xl ${
										location.pathname === link.path
											? 'text-[#A855F7] bg-[#7C3AED]/15'
											: 'text-[#F8FAFC] hover:bg-[#7C3AED]/10'
									}`}
								>
									{link.name}
								</Link>
							))}
							<Link to="/contact" className="mt-4">
								<Button className="w-full bg-galaxy-gradient hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] font-semibold py-6">
									Book Consultation
								</Button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

