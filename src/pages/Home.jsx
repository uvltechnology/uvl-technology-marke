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
	const solutions = [
		{
			icon: Gear,
			title: 'Custom Business Systems',
			description: 'Tailored platforms built exactly for your workflow',
			features: [
				'ERP & Resource Planning',
				'Internal Tool Development',
				'Legacy System Modernization'
			]
		},
		{
			icon: ChartBar,
			title: 'Internal Tools & Dashboards',
			description: 'Real-time insights that drive better decisions',
			features: [
				'Executive Dashboards',
				'KPI Tracking Systems',
				'Data Visualization Platforms'
			]
		},
		{
			icon: Lightning,
			title: 'Workflow Automations',
			description: 'Eliminate manual tasks and reduce human error',
			features: [
				'Process Automation',
				'System Integrations',
				'API Development'
			]
		},
		{
			icon: Users,
			title: 'Data & Analytics Platforms',
			description: 'Transform raw data into actionable intelligence',
			features: [
				'Business Intelligence',
				'Predictive Analytics',
				'Custom Reporting'
			]
		}
	]

	const industries = [
		{
			icon: Rocket,
			name: 'SMEs & Startups',
			description: 'Scale fast with systems built for growth'
		},
		{
			icon: GraduationCap,
			name: 'Schools & Universities',
			description: 'Student management and academic platforms'
		},
		{
			icon: FirstAid,
			name: 'Healthcare & Clinics',
			description: 'HIPAA-compliant patient systems'
		},
		{
			icon: Truck,
			name: 'Logistics & Warehousing',
			description: 'Supply chain and inventory optimization'
		},
		{
			icon: Bank,
			name: 'Government & NGOs',
			description: 'Secure, transparent operational tools'
		},
		{
			icon: Storefront,
			name: 'Retail & E-commerce',
			description: 'Point of sale and customer management'
		}
	]

	const pillars = [
		{
			icon: CheckCircle,
			title: 'End-to-End Delivery',
			description: 'From discovery to deployment, we handle everything so you can focus on your business.'
		},
		{
			icon: Lightning,
			title: 'Scalable Architecture',
			description: 'Built to grow with you, from 10 to 10,000 users without breaking a sweat.'
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
	]

	const steps = [
		{ number: '01', title: 'Discovery & Requirements', description: 'We listen, analyze, and map out exactly what you need' },
		{ number: '02', title: 'System Design & Architecture', description: 'Creating the blueprint for your perfect solution' },
		{ number: '03', title: 'Development & Testing', description: 'Building with precision, testing relentlessly' },
		{ number: '04', title: 'Deployment & Support', description: 'Launching smoothly and staying with you long-term' }
	]

	const caseStudies = [
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
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-space">
				<div className="absolute inset-0 pattern-grid" />
				<div className="absolute inset-0 bg-galaxy-radial opacity-40" />
        
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32"
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="inline-block mb-6 px-6 py-2 bg-galactic-violet/20 border border-galactic-violet/50 rounded-full"
					>
						<span className="text-electric-purple font-semibold text-sm">Universal Systems Provider</span>
					</motion.div>
          
					<h1 className="text-soft-white mb-6">
						Skip all the stress.<br />
						<span className="text-gradient">Automate the rest.</span>
					</h1>
          
					<p className="text-xl md:text-2xl text-soft-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
						Your universal partner for custom business systems, workflow automation, and digital transformation. We build the exact solution you need.
					</p>
          
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link to="/contact">
							<Button size="lg" className="bg-galaxy-gradient hover:shadow-2xl hover:shadow-galactic-violet/50 hover:scale-105 transition-all text-lg px-8 py-6">
								Book a Free Consultation
								<ArrowRight className="ml-2" size={20} weight="bold" />
							</Button>
						</Link>
						<Link to="/solutions">
							<Button size="lg" variant="outline" className="border-2 border-electric-purple text-electric-purple hover:bg-electric-purple hover:text-soft-white transition-all text-lg px-8 py-6">
								See Our Solutions
							</Button>
						</Link>
					</div>
				</motion.div>

				<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
					<ArrowRight size={32} weight="bold" className="text-electric-purple rotate-90" />
				</div>
			</section>

			<section className="py-24 bg-background">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.h2 variants={fadeInUp} className="text-deep-space mb-4">
							Solutions Built for Your Needs
						</motion.h2>
						<motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
							From HR systems to analytics platforms, we create custom solutions that fit your exact requirements
						</motion.p>
					</motion.div>

					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
					>
						{solutions.map((solution, index) => {
							const Icon = solution.icon
							return (
								<motion.div key={index} variants={fadeInUp}>
									<Card className="h-full card-hover border-border/50 hover:border-galactic-violet/50 bg-card">
										<CardHeader>
											<div className="w-14 h-14 bg-galaxy-gradient rounded-xl flex items-center justify-center mb-4 shadow-lg">
												<Icon size={28} weight="bold" className="text-soft-white" />
											</div>
											<CardTitle className="text-xl">{solution.title}</CardTitle>
											<CardDescription className="text-base">{solution.description}</CardDescription>
										</CardHeader>
										<CardContent>
											<ul className="space-y-2">
												{solution.features.map((feature, idx) => (
													<li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
														<CheckCircle size={18} weight="fill" className="text-galactic-violet mt-0.5 shrink-0" />
														<span>{feature}</span>
													</li>
												))}
											</ul>
										</CardContent>
									</Card>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
			</section>

			<section className="py-24 bg-muted">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.h2 variants={fadeInUp} className="text-deep-space mb-4">
							Industries We Serve
						</motion.h2>
						<motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Trusted by organizations across diverse sectors
						</motion.p>
					</motion.div>

					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
					>
						{industries.map((industry, index) => {
							const Icon = industry.icon
							return (
								<motion.div key={index} variants={fadeInUp}>
									<Card className="card-hover border-border/50 hover:border-galactic-violet/50">
										<CardHeader>
											<div className="flex items-center gap-4">
												<div className="w-12 h-12 bg-galaxy-gradient rounded-lg flex items-center justify-center shrink-0">
													<Icon size={24} weight="bold" className="text-soft-white" />
												</div>
												<div>
													<CardTitle className="text-lg">{industry.name}</CardTitle>
													<CardDescription>{industry.description}</CardDescription>
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

			<section className="py-24 bg-background">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.h2 variants={fadeInUp} className="text-deep-space mb-4">
							Why Choose UVL Technology?
						</motion.h2>
						<motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
									<div className="text-center">
										<div className="w-16 h-16 bg-galaxy-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
											<Icon size={32} weight="bold" className="text-soft-white" />
										</div>
										<h3 className="text-xl font-heading font-bold text-deep-space mb-3">{pillar.title}</h3>
										<p className="text-muted-foreground">{pillar.description}</p>
									</div>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
			</section>

			<section className="py-24 bg-deep-space text-soft-white relative overflow-hidden">
				<div className="absolute inset-0 pattern-dots" />
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.h2 variants={fadeInUp} className="text-soft-white mb-4">
							How We Work
						</motion.h2>
						<motion.p variants={fadeInUp} className="text-xl text-soft-white/80 max-w-2xl mx-auto">
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
								<div className="relative">
									<div className="text-7xl font-heading font-bold text-galactic-violet/20 mb-4">
										{step.number}
									</div>
									<h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
									<p className="text-soft-white/70">{step.description}</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			<section className="py-24 bg-background">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.h2 variants={fadeInUp} className="text-deep-space mb-4">
							Success Stories
						</motion.h2>
						<motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Real results for real businesses
						</motion.p>
					</motion.div>

					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="grid grid-cols-1 md:grid-cols-3 gap-8"
					>
						{caseStudies.map((study, index) => (
							<motion.div key={index} variants={fadeInUp}>
								<Card className="h-full card-hover border-2 border-transparent hover:border-galactic-violet/50 bg-linear-to-br from-card to-muted">
									<CardHeader>
										<div className="inline-block px-3 py-1 bg-galactic-violet/10 border border-galactic-violet/30 rounded-full mb-4">
											<span className="text-galactic-violet font-semibold text-sm">{study.client}</span>
										</div>
										<CardTitle className="text-lg mb-4">The Challenge</CardTitle>
										<p className="text-muted-foreground mb-4">{study.problem}</p>
										<CardTitle className="text-lg mb-4">Our Solution</CardTitle>
										<p className="text-muted-foreground mb-4">{study.solution}</p>
										<CardTitle className="text-lg mb-4">The Impact</CardTitle>
										<p className="text-galactic-violet font-semibold">{study.result}</p>
									</CardHeader>
								</Card>
							</motion.div>
						))}
					</motion.div>

					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={fadeInUp}
						className="text-center mt-12"
					>
						<Link to="/case-studies">
							<Button size="lg" variant="outline" className="border-2 border-galactic-violet text-galactic-violet hover:bg-galactic-violet hover:text-soft-white">
								View All Case Studies
								<ArrowRight className="ml-2" size={20} weight="bold" />
							</Button>
						</Link>
					</motion.div>
				</div>
			</section>

			<section className="py-24 bg-galaxy-gradient text-soft-white relative overflow-hidden">
				<div className="absolute inset-0 pattern-grid opacity-20" />
				<motion.div
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					variants={fadeInUp}
					className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center"
				>
					<h2 className="text-soft-white mb-6">
						Tell us what system you need,<br />and we'll build it.
					</h2>
					<p className="text-xl text-soft-white/90 mb-10 max-w-2xl mx-auto">
						Whether it's HR, CRM, inventory, finance, or something completely custom—we've got you covered.
					</p>
					<Link to="/contact">
						<Button size="lg" className="bg-soft-white text-deep-space hover:bg-soft-white/90 hover:scale-105 transition-all text-lg px-10 py-6 shadow-2xl">
							Start Your Project Today
							<ArrowRight className="ml-2" size={20} weight="bold" />
						</Button>
					</Link>
				</motion.div>
			</section>
		</div>
	)
}

