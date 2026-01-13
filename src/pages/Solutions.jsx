import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
	Gear,
	ChartBar,
	Lightning,
	Users,
	Database,
	ShoppingCart,
	Money,
	GraduationCap,
	Calendar,
	Package,
	ArrowRight,
	CheckCircle
} from '@phosphor-icons/react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import StarField from '@/components/StarField.jsx'

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

export default function Solutions() {
	const solutionCategories = [
		{
			icon: Gear,
			title: 'Customized Systems',
			tagline: 'Fully tailored software solutions built for your processes',
			benefits: [
				'School management platforms',
				'Job portals and marketplaces',
				'Rental platforms and property systems'
			],
			useCases: 'When you need a platform built exactly to your workflow'
		},
		{
			icon: ShoppingCart,
			title: 'Templated Systems',
			tagline: 'Pre-built, ready-to-deploy solutions for quick launch',
			benefits: [
				'E‑commerce stores and storefronts',
				'Booking and reservation systems',
				'Out-of-the-box CRM platforms'
			],
			useCases: 'Fast deployments with light customization'
		},
		{
			icon: Lightning,
			title: 'API & Integration Services',
			tagline: 'Connect systems and extend functionality via APIs',
			benefits: [
				'Payment gateway integrations',
				'Identity and verification services',
				'Data synchronization between systems'
			],
			useCases: 'When systems need to share data reliably and securely'
		},
		{
			icon: CheckCircle,
			title: 'Maintenance & Support',
			tagline: 'Ongoing support, monitoring and performance tuning',
			benefits: [
				'24/7 monitoring and alerting',
				'Regular bug fixes and updates',
				'Performance optimization and backups'
			],
			useCases: 'Keep mission-critical systems running smoothly'
		}
	]

	return (
		<div className="min-h-screen pt-20">
			<section className="relative py-24 bg-[#030108] text-[#F8FAFC] overflow-hidden">
				{/* Enhanced cosmic background */}
				<div className="absolute inset-0" style={{
					background: `
						radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139, 92, 246, 0.18) 0%, transparent 60%),
						radial-gradient(ellipse 60% 40% at 100% 100%, rgba(236, 72, 153, 0.12) 0%, transparent 50%),
						linear-gradient(180deg, #030108 0%, #0F0A1F 50%, #1A1033 100%)
					`
				}} />
				<div className="absolute inset-0 pattern-grid opacity-40" />
				
				{/* Animated glow orbs */}
				<div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#8B5CF6]/15 rounded-full blur-[100px] animate-pulse pointer-events-none" />
				<div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-[#EC4899]/10 rounded-full blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
				
				{/* Star particles effect */}
				<StarField count={60} />
        
				<motion.div
					initial="initial"
					animate="animate"
					variants={fadeInUp}
					className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center"
				>
					<div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 rounded-full backdrop-blur-sm">
						<span className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse" />
						<span className="text-[#A78BFA] font-semibold text-sm tracking-wide">Complete Solutions Portfolio</span>
					</div>
          
					<h1 className="text-[#F8FAFC] mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
						Every System Your<br />
						<span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#22D3EE] bg-clip-text text-transparent">Business Needs</span>
					</h1>
          
					<p className="text-lg md:text-xl text-[#CBD5E1] mb-10 max-w-3xl mx-auto leading-relaxed">
						From HR to analytics, inventory to CRM—we build custom systems tailored to your exact requirements. No templates, no compromises.
					</p>
				</motion.div>
			</section>

			<section className="py-24 bg-[#0F0A1F]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="grid grid-cols-1 lg:grid-cols-2 gap-8"
					>
						{solutionCategories.map((solution, index) => {
							const Icon = solution.icon
							return (
								<motion.div key={index} variants={fadeInUp}>
									<Card className="h-full bg-[#1A1033]/60 border border-[#8B5CF6]/20 backdrop-blur-sm hover:border-[#8B5CF6]/50 transition-all duration-300">
										<CardHeader>
											<div className="flex items-start gap-4 mb-4">
												<div className="w-14 h-14 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-[#8B5CF6]/25">
													<Icon size={28} weight="bold" className="text-white" />
												</div>
												<div className="flex-1">
													<CardTitle className="text-2xl mb-2 text-[#F8FAFC]">{solution.title}</CardTitle>
													<CardDescription className="text-base text-[#A78BFA] font-semibold">
														{solution.tagline}
													</CardDescription>
												</div>
											</div>
										</CardHeader>
										<CardContent>
											<div className="mb-6">
												<h4 className="font-heading font-bold text-[#F8FAFC] mb-3">Key Features:</h4>
												<ul className="space-y-2">
													{solution.benefits.map((benefit, idx) => (
														<li key={idx} className="flex items-start gap-2 text-sm text-[#CBD5E1]">
															<CheckCircle size={18} weight="fill" className="text-[#A78BFA] mt-0.5 shrink-0" />
															<span>{benefit}</span>
														</li>
													))}
												</ul>
											</div>
											<div className="pt-4 border-t border-[#8B5CF6]/20">
												<p className="text-sm text-[#CBD5E1] italic">
													<strong className="text-[#F8FAFC]">Best for:</strong> {solution.useCases}
												</p>
											</div>
										</CardContent>
									</Card>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
			</section>

			<section className="py-24 bg-[#030108] relative overflow-hidden">
				<div className="absolute inset-0 pattern-grid opacity-20" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-[150px] pointer-events-none" />
				<div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={fadeInUp}
					>
						<h2 className="text-[#F8FAFC] text-3xl md:text-4xl font-bold mb-6">Don't See What You Need?</h2>
						<p className="text-xl text-[#CBD5E1] mb-10 max-w-3xl mx-auto">
							We specialize in building custom solutions for unique business challenges. If you have a specific need, we'll design and develop it from scratch.
						</p>
						<Link to="/contact">
							<Button size="lg" className="bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] hover:shadow-xl hover:shadow-[#8B5CF6]/40 hover:scale-105 transition-all text-lg px-10 py-6 text-white font-semibold">
								Discuss Your Custom Solution
								<ArrowRight className="ml-2" size={20} weight="bold" />
							</Button>
						</Link>
					</motion.div>
				</div>
			</section>

			<section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #EC4899 100%)' }}>
				<div className="absolute inset-0 pattern-grid opacity-20" />
				<div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
				<div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#22D3EE]/20 rounded-full blur-[80px] pointer-events-none" />
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.h2 variants={fadeInUp} className="text-white text-3xl md:text-4xl font-bold mb-4">
							Our Development Approach
						</motion.h2>
						<motion.p variants={fadeInUp} className="text-xl text-white/90 max-w-2xl mx-auto">
							Every solution is built with the same commitment to quality
						</motion.p>
					</motion.div>

					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="grid grid-cols-1 md:grid-cols-3 gap-8"
					>
						<motion.div variants={fadeInUp}>
							<div className="text-center">
								<div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
									<CheckCircle size={32} weight="bold" className="text-white" />
								</div>
								<h3 className="text-xl font-heading font-bold mb-3 text-white">Scalable Architecture</h3>
								<p className="text-white/80">Built to grow from 10 to 10,000 users without performance issues</p>
							</div>
						</motion.div>

						<motion.div variants={fadeInUp}>
							<div className="text-center">
								<div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
									<CheckCircle size={32} weight="bold" className="text-white" />
								</div>
								<h3 className="text-xl font-heading font-bold mb-3 text-white">Security First</h3>
								<p className="text-white/80">Enterprise-grade encryption, access control, and compliance standards</p>
							</div>
						</motion.div>

						<motion.div variants={fadeInUp}>
							<div className="text-center">
								<div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
									<CheckCircle size={32} weight="bold" className="text-white" />
								</div>
								<h3 className="text-xl font-heading font-bold mb-3 text-white">Beautiful UX</h3>
								<p className="text-white/80">Intuitive interfaces your team will actually enjoy using</p>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</div>
	)
}

