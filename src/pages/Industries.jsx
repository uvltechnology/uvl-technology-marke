import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
	Rocket,
	GraduationCap,
	FirstAid,
	Truck,
	Bank,
	Storefront,
	ArrowRight,
	CheckCircle,
	Warning,
	Lightbulb
} from '@phosphor-icons/react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import Navbar from "@/components/Navbar.jsx"
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

export default function Industries() {
	const industries = [
		{
			icon: Bank,
			name: 'Real Estate & Rentals',
			description: 'Platforms that enable listing, discovery, and booking of short-term and long-term rental properties.',
			painPoints: [
				'Scattered property listings and inconsistent search',
				'Complex booking calendars causing conflicts',
				'Payment and refund processing friction',
				'Managing host communications and reviews at scale'
			],
			solutions: [
				'Centralized property catalog and advanced search',
				'Booking engine with calendar syncing and conflict prevention',
				'Secure payments, refunds, and disputes flows',
				'Host/owner dashboards with messaging and review tools'
			],
			exampleModules: [
				'Property listings & search',
				'Availability & booking management',
				'Host/owner portal',
				'Payments & reviews'
			]
		},
		{
			icon: Truck,
			name: 'Tool Rental & Equipment',
			description: 'Online rental systems for tools and heavy equipment, covering reservations, logistics, and asset maintenance.',
			painPoints: [
				'Tracking inventory condition and availability',
				'Coordinating deliveries and returns efficiently',
				'Handling deposits, insurance and damage claims',
				'Providing accurate item descriptions and pricing'
			],
			solutions: [
				'Real-time inventory catalog with condition tracking',
				'Reservation calendar and delivery/pickup orchestration',
				'Deposit, insurance and damage workflows',
				'Clear product pages with pricing and vendor controls'
			],
			exampleModules: [
				'Rental catalog & SKU management',
				'Reservation & scheduling system',
				'Logistics dashboard (delivery/pickup)',
				'Maintenance & incident reporting'
			]
		},
		{
			icon: Storefront,
			name: 'Retail & E-commerce Marketplaces',
			description: 'Multi-vendor marketplaces and e-commerce platforms that connect sellers with customers and handle orders, payments, and logistics.',
			painPoints: [
				'Onboarding vendors and standardizing catalogs',
				'Secure payments and split payouts to sellers',
				'Integrating shipping providers and tracking orders',
				'Improving product discovery and conversion for small sellers'
			],
			solutions: [
				'Vendor onboarding & product management tools',
				'Payments platform with vendor settlement',
				'Shipping integrations and fulfillment tracking',
				'Search, promotions and analytics to boost sales'
			],
			exampleModules: [
				'Vendor portal & onboarding',
				'Product catalog & storefronts',
				'Checkout, payments & payouts',
				'Orders, shipping & returns'
			]
		}
	]

	return (
		<div className="min-h-screen">
			<Navbar />
			<section className="relative py-24 bg-[#0A0612] text-[#F8FAFC] overflow-hidden">
				{/* Radial gradient overlay */}
				<div className="absolute inset-0" style={{
					background: `
						radial-gradient(ellipse 60% 40% at 20% 20%, rgba(124, 58, 237, 0.18) 0%, transparent 50%),
						radial-gradient(ellipse 50% 30% at 80% 80%, rgba(147, 51, 234, 0.12) 0%, transparent 50%)
					`
				}} />
				<div className="absolute inset-0 pattern-grid opacity-40" />
        
				<motion.div
					initial="initial"
					animate="animate"
					variants={fadeInUp}
					className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center"
				>
					
          
					<h1 className="text-[#F8FAFC] mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
						Trusted Across<br />
						<span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#22D3EE] bg-clip-text text-transparent">Diverse Industries</span>
					</h1>
          
					<p className="text-lg md:text-xl text-[#CBD5E1] mb-10 max-w-3xl mx-auto leading-relaxed">
						We understand the unique challenges each industry faces and build solutions that address your specific needs.
					</p>
				</motion.div>
			</section>

			<section className="py-24 bg-[#0A0612]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="space-y-16"
					>
						{industries.map((industry, index) => {
							const Icon = industry.icon
							return (
								<motion.div key={index} variants={fadeInUp} className="h-full">
									<Card className="h-full flex flex-col overflow-hidden border border-[#8B5CF6]/20 bg-[#1A1033]/60 backdrop-blur-sm hover:border-[#8B5CF6]/50 transition-all">
										<div className="bg-gradient-to-r from-[#8B5CF6]/10 to-[#EC4899]/10 p-6 md:p-8 border-b border-[#8B5CF6]/20">
											<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
												<div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-2xl flex items-center justify-center shrink-0 shadow-xl shadow-[#8B5CF6]/25">
													<Icon size={32} weight="bold" className="text-white md:hidden" />
													<Icon size={40} weight="bold" className="text-white hidden md:block" />
												</div>
												<div>
													<h2 className="text-2xl md:text-3xl font-heading font-bold text-[#F8FAFC] mb-2">
														{industry.name}
													</h2>
													<p className="text-base md:text-lg text-[#CBD5E1]">{industry.description}</p>
												</div>
											</div>
										</div>

										<CardContent className="p-6 md:p-8 flex-1 flex items-center">
											<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
												<div>
													<div className="flex items-center gap-2 mb-4">
														<Warning size={24} weight="fill" className="text-[#F87171]" />
														<h3 className="text-xl font-heading font-bold text-[#F8FAFC]">
															Common Pain Points
														</h3>
													</div>
													<ul className="space-y-2">
														{industry.painPoints.map((pain, idx) => (
															<li key={idx} className="flex items-start gap-2 text-sm text-[#CBD5E1]">
																<span className="text-[#F87171] mt-1">•</span>
																<span>{pain}</span>
															</li>
														))}
													</ul>
												</div>

												<div>
													<div className="flex items-center gap-2 mb-4">
														<Lightbulb size={24} weight={"fill"} className="text-[#8B5CF6]" />
														<h3 className="text-xl font-heading font-bold text-[#F8FAFC]">
															How Logica Helps
														</h3>
													</div>
													<ul className="space-y-2">
														{industry.solutions.map((solution, idx) => (
															<li key={idx} className="flex items-start gap-2 text-sm text-[#CBD5E1]">
																<CheckCircle size={18} weight="fill" className="text-[#A78BFA] mt-0.5 shrink-0" />
																<span>{solution}</span>
															</li>
														))}
													</ul>
												</div>

												<div>
													<div className="flex items-center gap-2 mb-4">
														<CheckCircle size={24} weight="fill" className="text-[#EC4899]" />
														<h3 className="text-xl font-heading font-bold text-[#F8FAFC]">
															Example Modules
														</h3>
													</div>
													<ul className="space-y-2">
														{industry.exampleModules.map((module, idx) => (
															<li key={idx} className="flex items-start gap-2 text-sm">
																<span className="text-[#EC4899] font-bold mt-0.5">→</span>
																<span className="text-[#F8FAFC] font-medium">{module}</span>
															</li>
														))}
													</ul>
												</div>
											</div>
										</CardContent>
									</Card>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
			</section>

			<section className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(15, 15, 15, 1) 2%, rgba(140, 82, 255, 1) 100%)' }}>
				<div className="absolute inset-0 pattern-grid opacity-20" />
				<motion.div
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					variants={fadeInUp}
					className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center"
				>
					<h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
						Don't See Your Industry?
					</h2>
					<p className="text-base md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto">
						We've worked with businesses across countless sectors. Whatever your industry, we can build the perfect system for your needs.
					</p>
					<Link to="/contact">
						<Button size="lg" className="bg-white text-[#7C3AED] hover:bg-white/90 hover:scale-105 transition-all text-base md:text-lg px-8 md:px-10 py-5 md:py-6 shadow-2xl font-semibold w-full sm:w-auto">
							Let's Discuss Your Industry
							<ArrowRight className="ml-2" size={20} weight="bold" />
						</Button>
					</Link>
				</motion.div>
			</section>
		</div>
	)
}

