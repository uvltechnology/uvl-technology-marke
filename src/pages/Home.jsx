import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
	Rocket,
	Gear,
	ChartBar,
	Lightning,
	Shield,
	Users,
	CheckCircle,
	ArrowRight,
	Storefront,
	GraduationCap,
	FirstAid,
	Truck,
	Bank
} from '@phosphor-icons/react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import StarField from '@/components/StarField.jsx'
import StarBorder from '@/components/StarBorder.jsx'
import Particles from '@/components/Particles.jsx';

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5 }
}

const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.1
		}
	}
}

export default function Home() {
	const offerings = [
		{
			icon: Gear,
			title: 'Customized Systems',
			description: 'Fully tailored software solutions built from scratch to match your unique business processes and requirements.',
			highlight: 'Built for You',
			examples: ['School Management', 'Job Portals', 'Rental Platforms']
		},
		{
			icon: Storefront,
			title: 'Templated Systems',
			description: 'Pre-built, ready-to-deploy solutions that can be quickly customized to get your business running faster.',
			highlight: 'Quick Launch',
			examples: ['E-commerce Stores', 'Booking Systems', 'CRM Platforms']
		},
		{
			icon: Lightning,
			title: 'API & Integration Services',
			description: 'Powerful APIs and third-party integrations to connect your systems and extend functionality seamlessly.',
			highlight: 'Connect Everything',
			examples: ['Payment Gateways', 'Identity Verification', 'Data Sync']
		},
		{
			icon: Shield,
			title: 'Maintenance & Support',
			description: 'Ongoing technical support, updates, and system maintenance to keep your platforms running smoothly.',
			highlight: 'Always On',
			examples: ['24/7 Monitoring', 'Bug Fixes', 'Performance Tuning']
		}
	]

	const industries = [
		{
			icon: Bank,
			name: 'Real Estate & Rentals',
			description: 'Platforms that enable listing, discovery, and booking of short-term and long-term rental properties.'
		},
		{
			icon: Truck,
			name: 'Tool Rental & Equipment',
			description: 'Online rental systems for tools and heavy equipment, covering reservations, logistics, and asset maintenance.'
		},
		{
			icon: Storefront,
			name: 'Retail & E-commerce Marketplaces',
			description: 'Multi-vendor marketplaces and e-commerce platforms that connect sellers with customers and handle orders, payments, and logistics.'
		}
	]

	const pillars = [
		{
			icon: CheckCircle,
			title: 'End-to-End Delivery',
			description: 'From discovery to deployment, we handle everything so you can focus on your business.'
		},
		{
			icon: Shield,
			title: 'Secure & Compliant',
			description: 'Enterprise-grade security, data encryption, and compliance with industry standards.'
		},
		{
			icon: Users,
			title: 'Human-Centered Design',
			description: 'Beautiful interfaces that your team will actually want to use every day.'
		}
		,
		{
			icon: ChartBar,
			title: 'Affordable',
			description: 'Cost-effective solutions with transparent pricing so you get value without surprises.'
		}
	]

	const steps = [
		{ number: '01', title: 'Discovery & Requirements', description: 'We listen, analyze, and map out exactly what you need' },
		{ number: '02', title: 'System Design & Architecture', description: 'Creating the blueprint for your perfect solution' },
		{ number: '03', title: 'Development & Testing', description: 'Building with precision, testing relentlessly' },
		{ number: '04', title: 'Deployment & Support', description: 'Launching smoothly and staying with you long-term' }
	]

	const projects = [
		{
			client: 'Regional Healthcare Network',
			problem: 'Paper-based patient records causing delays and errors',
			solution: 'Custom EHR system with real-time updates',
			result: 'Manual tasks reduced by 70%, patient wait times cut in half'
		},
		{
			client: 'Manufacturing SME',
			problem: 'No visibility into inventory across 5 warehouses',
			solution: 'Integrated inventory management platform',
			result: 'Stock accuracy improved to 98%, $200K saved annually'
		},
		{
			client: 'University Admissions Office',
			problem: 'Disconnected systems for applications, enrollment, payments',
			solution: 'Unified student lifecycle management system',
			result: 'Application processing time reduced from 2 weeks to 2 days'
		}
	]

	return (
		<div className="min-h-screen">
			<section id="galaxy-hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050309]">
				{/* Enhanced cosmic background */}
				<div className="hero-bg absolute inset-0" style={{
					background: `
						radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124, 58, 237, 0.22) 0%, transparent 60%),
						radial-gradient(ellipse 60% 40% at 100% 100%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
						radial-gradient(ellipse 50% 30% at 0% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
						linear-gradient(135deg, #050309 0%, #0A0612 40%, #1F1335 100%)
					`
				}} />

				{/* Grid pattern */}
				<div className="hero-grid absolute inset-0" style={{
					backgroundImage: `
						linear-gradient(rgba(124, 58, 237, 0.04) 1px, transparent 1px),
						linear-gradient(90deg, rgba(124, 58, 237, 0.04) 1px, transparent 1px)
					`,
					backgroundSize: '60px 60px',
					maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 70%)',
					WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 70%)'
				}} />
				<Particles
					particleColors={['#ffffff', '#ffffff']}
					particleCount={200}
					particleSpread={10}
					speed={0.1}
					particleBaseSize={100}
					moveParticlesOnHover={true}
					alphaParticles={true}
					disableRotation={false}
				/>	


				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="hero-content relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32"
				>


					<h1 className="hero-title text-[#F8FAFC] mb-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
						We Power The System<br />
						<span className="gradient-text bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#C084FC] bg-clip-text text-transparent">Behind Your Ideas.</span>
					</h1>

					<p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-[#CBD5E1] mb-12 max-w-3xl mx-auto leading-relaxed">
						Creativity, We Gonna Make Your Own Powerful Secured Modern Technology
					</p>

					<div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
						<StarBorder
							as={Link}
							to="/contact"
							color="#7C3AED"
							speed="5s"
							variant="solid"
							fillColor="#FFFFFF"
							textColor="#000000"
							className="inline-flex items-center justify-center text-lg px-8 py-6 font-semibold"
						>
							Book a Free Consultation
						</StarBorder>
						<StarBorder
							as={Link}
							to="/solutions"
							className="custom-class"
							color="#7C3AED"
							speed="5s"
							variant="ghost"
						>
							See Our Projects
							<ArrowRight size={20} weight="bold" />
						</StarBorder>
					</div>
				</motion.div>

				<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
					<ArrowRight size={28} weight="bold" className="text-[#7C3AED] rotate-90 drop-shadow-[0_0_4px_rgba(124,58,237,0.35)]" />
				</div>
			</section>

			{/* ===== WHAT WE OFFER SECTION ===== */}
			<section className="py-24 bg-[#050309] relative overflow-hidden">
				{/* Background effects */}
				<div className="absolute inset-0" style={{
					background: `
						radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124, 58, 237, 0.15) 0%, transparent 60%),
						radial-gradient(ellipse 50% 40% at 100% 100%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)
					`
				}} />
				<div className="absolute inset-0 pattern-grid opacity-30" />

				<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#7C3AED]/15 border border-[#7C3AED]/30 rounded-full">
							<Rocket size={18} weight="fill" className="text-[#A855F7]" />
							<span className="text-[#A855F7] font-semibold text-sm">What We Offer</span>
						</motion.div>
						<motion.h2 variants={fadeInUp} className="text-[#F8FAFC] mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">
							Services That Power Your Business
						</motion.h2>
						<motion.p variants={fadeInUp} className="text-xl text-[#CBD5E1] max-w-3xl mx-auto">
							From custom-built platforms to ready-to-deploy templates, we provide everything you need to digitize and scale your operations.
						</motion.p>
					</motion.div>

					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="grid grid-cols-1 md:grid-cols-2 gap-6"
					>
						{offerings.map((offering, index) => {
							const Icon = offering.icon
							return (
								<motion.div key={index} variants={fadeInUp}>
									<Card className="h-full border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 bg-gradient-to-br from-[#1A1033]/80 to-[#0A0612]/90 backdrop-blur-sm shadow-sm hover:shadow-[0_20px_50px_rgba(124,58,237,0.25)] transition-all duration-300 group">
										<CardHeader className="pb-4">
											<div className="flex items-start justify-between mb-4">
												<div className="w-14 h-14 bg-galaxy-gradient rounded-xl flex items-center justify-center shadow-[0_4px_20px_rgba(124,58,237,0.35)] group-hover:shadow-[0_8px_30px_rgba(124,58,237,0.5)] group-hover:scale-105 transition-all duration-300">
													<Icon size={28} weight="bold" className="text-white" />
												</div>
												<span className="px-3 py-1 bg-[#7C3AED]/20 border border-[#7C3AED]/30 rounded-full text-[#A855F7] text-xs font-semibold">
													{offering.highlight}
												</span>
											</div>
											<CardTitle className="text-2xl text-[#F8FAFC] group-hover:text-[#A855F7] transition-colors">
												{offering.title}
											</CardTitle>
											<CardDescription className="text-base text-[#CBD5E1] leading-relaxed">
												{offering.description}
											</CardDescription>
										</CardHeader>
										<CardContent>
											<div className="flex flex-wrap gap-2">
												{offering.examples.map((example, idx) => (
													<span
														key={idx}
														className="px-3 py-1.5 bg-[#1A1033] border border-[#8B5CF6]/20 rounded-lg text-sm text-[#94A3B8]"
													>
														{example}
													</span>
												))}
											</div>
										</CardContent>
									</Card>
								</motion.div>
							)
						})}
					</motion.div>


				</div>
			</section>

			<section className="py-24 bg-[#0A0612] relative overflow-hidden">
				<div className="absolute inset-0" style={{
					background: `
						radial-gradient(ellipse 50% 40% at 30% 30%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
						radial-gradient(ellipse 60% 30% at 70% 70%, rgba(147, 51, 234, 0.08) 0%, transparent 50%)
					`
				}} />
				<div className="absolute inset-0 pattern-grid opacity-30" />
				<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="text-center mb-16"
					>

						<motion.h2 variants={fadeInUp} className="text-[#F8FAFC] mb-4 text-3xl md:text-4xl font-bold">
							Industries We Serve
						</motion.h2>
						<motion.p variants={fadeInUp} className="text-xl text-[#CBD5E1] max-w-2xl mx-auto">
							Trusted by organizations across diverse sectors
						</motion.p>
					</motion.div>

					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
					>
						{industries.map((industry, index) => {
							const Icon = industry.icon
							return (
								<motion.div key={index} variants={fadeInUp} className="h-full">
									<Card className="h-full card-hover border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 bg-[#1A1033]/60 backdrop-blur-sm shadow-sm hover:shadow-[0_15px_30px_rgba(124,58,237,0.2)]">
										<CardHeader className="h-full flex items-center">
											<div className="flex items-center gap-4">
												<div className="w-12 h-12 bg-galaxy-gradient rounded-xl flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(124,58,237,0.3)]">
													<Icon size={24} weight="bold" className="text-white" />
												</div>
												<div>
													<CardTitle className="text-lg text-[#F8FAFC]">{industry.name}</CardTitle>
													<CardDescription className="text-[#CBD5E1]">{industry.description}</CardDescription>
												</div>
											</div>
										</CardHeader>
									</Card>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
			</section>

			<section className="py-24 bg-[#0A0612] relative overflow-hidden">
				{/* Subtle background pattern */}
				<div className="absolute inset-0" style={{
					background: `
						radial-gradient(ellipse 60% 40% at 50% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
						radial-gradient(ellipse 50% 30% at 20% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)
					`
				}} />
				<div className="absolute inset-0 pattern-grid opacity-30" />

				<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="text-center mb-16"
					>

						<motion.h2 variants={fadeInUp} className="text-[#F8FAFC] mb-4 text-3xl md:text-4xl font-bold">
							Why Choose Logica?
						</motion.h2>
						<motion.p variants={fadeInUp} className="text-xl text-[#CBD5E1] max-w-2xl mx-auto">
							We combine technical excellence with business understanding
						</motion.p>
					</motion.div>

					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
					>
						{pillars.map((pillar, index) => {
							const Icon = pillar.icon
							return (
								<motion.div key={index} variants={fadeInUp}>
									<div className="text-center group">
										<div className="w-16 h-16 bg-galaxy-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_4px_20px_rgba(124,58,237,0.35)] group-hover:shadow-[0_8px_30px_rgba(124,58,237,0.5)] group-hover:scale-105 transition-all duration-300">
											<Icon size={32} weight="bold" className="text-white" />
										</div>
										<h3 className="text-xl font-heading font-bold text-[#F8FAFC] mb-3">{pillar.title}</h3>
										<p className="text-[#94A3B8] leading-relaxed">{pillar.description}</p>
									</div>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
			</section>

			<section className="py-24 bg-[#0A0612] text-[#F8FAFC] relative overflow-hidden">
				{/* Enhanced cosmic background */}
				<div className="absolute inset-0" style={{
					background: `
						radial-gradient(ellipse 60% 40% at 20% 20%, rgba(124, 58, 237, 0.18) 0%, transparent 50%),
						radial-gradient(ellipse 50% 30% at 80% 80%, rgba(147, 51, 234, 0.12) 0%, transparent 50%)
					`
				}} />
				<div className="absolute inset-0 pattern-grid opacity-40" />

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.h2 variants={fadeInUp} className="text-[#F8FAFC] mb-4 text-3xl md:text-4xl font-bold">
							How We Work
						</motion.h2>
						<motion.p variants={fadeInUp} className="text-xl text-[#CBD5E1] max-w-2xl mx-auto">
							A proven process that delivers results, every time
						</motion.p>
					</motion.div>

					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
					>
						{steps.map((step, index) => (
							<motion.div key={index} variants={fadeInUp}>
								<div className="relative group">
									<div className="text-7xl font-heading font-bold text-[#7C3AED]/20 mb-4 group-hover:text-[#7C3AED]/30 transition-colors duration-300">
										{step.number}
									</div>
									<h3 className="text-xl font-heading font-bold mb-3 text-[#F8FAFC]">{step.title}</h3>
									<p className="text-[#94A3B8] leading-relaxed">{step.description}</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Success Stories removed per request */}

			<section className="py-24 relative overflow-hidden" style={{
				background: 'linear-gradient(135deg, #7C3AED 0%, #9333EA 50%, #A855F7 100%)'
			}}>
				{/* Overlay pattern */}
				<div className="absolute inset-0" style={{
					backgroundImage: `
						linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
						linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
					`,
					backgroundSize: '40px 40px'
				}} />

				<motion.div
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					variants={fadeInUp}
					className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center"
				>
					<h2 className="text-[#F8FAFC] mb-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
						Tell us what system you need,<br />and we'll build it.
					</h2>
					<p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
						Whether it's HR, CRM, inventory, finance, or something completely custom—we've got you covered.
					</p>
					<Link to="/contact">
						<Button size="lg" className="bg-white text-[#7C3AED] hover:bg-white/95 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] transition-all duration-300 text-lg px-10 py-6 font-bold shadow-2xl">
							Start Your Project Today
							<ArrowRight className="ml-2" size={20} weight="bold" />
						</Button>
					</Link>
				</motion.div>
			</section>
		</div>
	)
}

