import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button.jsx'

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
		{ name: 'Solutions', path: '/solutions' },
		{ name: 'Industries', path: '/industries' },
		{ name: 'Case Studies', path: '/case-studies' },
		{ name: 'About', path: '/about' },
	]

	return (
		<>
			<nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled ? 'bg-deep-space/95 backdrop-blur-lg shadow-lg' : 'bg-deep-space/80 backdrop-blur-sm'
				}`}
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">
						<Link to="/" className="flex items-center gap-3 group shrink-0">
							<img src="/src/assets/uvl-logo.svg" alt="UVL Technology" className="w-11 h-11 object-contain" />
							<span className="text-soft-white font-heading font-bold text-xl tracking-wide group-hover:text-electric-purple transition-colors">
								UVL Technology
							</span>
						</Link>

						<div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
							{navLinks.map((link) => (
								<Link
									key={link.path}
									to={link.path}
									className={`text-sm font-medium transition-all relative group py-2 ${
										location.pathname === link.path
											? 'text-electric-purple'
											: 'text-soft-white hover:text-electric-purple'
									}`}
								>
									{link.name}
									<span
										className={`absolute -bottom-1 left-0 h-0.5 bg-electric-purple transition-all ${
											location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
										}`}
									/>
								</Link>
							))}
						</div>

						<div className="hidden lg:block shrink-0">
							<Link to="/contact">
								<Button className="bg-galaxy-gradient hover:shadow-lg hover:shadow-galactic-violet/50 hover:scale-105 transition-all">
									Book Consultation
								</Button>
							</Link>
						</div>

						<button
							className="lg:hidden text-soft-white p-2"
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
					<div className="fixed inset-0 bg-deep-space/95 backdrop-blur-lg" />
					<div className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-neutral-slate shadow-2xl">
						<div className="flex flex-col gap-6 p-8">
							{navLinks.map((link) => (
								<Link
									key={link.path}
									to={link.path}
									className={`text-lg font-medium transition-colors ${
										location.pathname === link.path
											? 'text-electric-purple'
											: 'text-soft-white hover:text-electric-purple'
									}`}
								>
									{link.name}
								</Link>
							))}
							<Link to="/contact" className="mt-4">
								<Button className="w-full bg-galaxy-gradient hover:shadow-lg hover:shadow-galactic-violet/50">
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

