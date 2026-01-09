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

	const projects = [
		{
			client: 'Yamcon',
			problem: 'No existing website for their event management business',
			solution: 'Custom event management system with real-time updates',
			result: 'Event planning time reduced by 60%, attendee satisfaction up 85%'
		},
		{
			client: 'Katindahan',
			problem: 'No online platform for their local marketplace',
			solution: 'E-commerce marketplace with inventory and payment integration',
			result: 'Onboarded 500+ vendors, processed ₱5M in transactions'
		},
		{
			client: 'BAzz',
			problem: 'No digital platform for their community engagement',
			solution: 'Social networking app with event and group features',
			result: 'Active users grew 300% in 3 months, engagement up 4x'
		}
	]

	return (
		<div className="min-h-screen">
			<section id="galaxy-hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030108]">
				{/* Enhanced cosmic background */}
				<div className="hero-bg absolute inset-0" style={{
					background: `
						radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139, 92, 246, 0.18) 0%, transparent 60%),
						radial-gradient(ellipse 60% 40% at 100% 100%, rgba(236, 72, 153, 0.12) 0%, transparent 50%),
						radial-gradient(ellipse 50% 30% at 0% 80%, rgba(34, 211, 238, 0.08) 0%, transparent 50%),
						linear-gradient(180deg, #030108 0%, #0F0A1F 50%, #1A1033 100%)
					`
				}} />
				
				{/* Grid pattern */}
				<div className="hero-grid absolute inset-0" style={{
					backgroundImage: `
						linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
						linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
					`,
					backgroundSize: '60px 60px',
					maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 70%)',
					WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 70%)'
				}} />
				
				{/* Animated glow orbs */}
				<div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#8B5CF6]/15 rounded-full blur-[100px] animate-pulse pointer-events-none" />
				<div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#EC4899]/10 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
				<div className="absolute top-1/2 right-1/3 w-[250px] h-[250px] bg-[#22D3EE]/8 rounded-full blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
				
				{/* Star particles effect */}
				<StarField count={100} />
        
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="hero-content relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32"
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="hero-badge inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 rounded-full backdrop-blur-sm"
					>
						<span className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse" />
						<span className="text-[#A78BFA] font-semibold text-sm tracking-wide">Universal Systems Provider</span>
					</motion.div>
          
					<h1 className="hero-title text-[#F8FAFC] mb-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
						 We Power The System Behind Your Ideas.<br />
						<span className="gradient-text bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#22D3EE] bg-clip-text text-transparent">Automate the rest.</span>
					</h1>
          
					<p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-[#CBD5E1] mb-12 max-w-3xl mx-auto leading-relaxed">
						Your universal partner for custom business systems, workflow automation, and digital transformation. We build the exact solution you need.
					</p>
          
					<div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center px-4">
						<Link to="/contact" className="w-full sm:w-auto">
							<Button size="lg" className="w-full sm:w-auto bg-galaxy-gradient hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 font-semibold">
								Book a Free Consultation
								<ArrowRight className="ml-2" size={20} weight="bold" />
							</Button>
						</Link>
						<Link to="/solutions" className="w-full sm:w-auto">
							<Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-[#8B5CF6] text-[#A78BFA] hover:bg-[#8B5CF6]/10 hover:border-[#A78BFA] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 font-semibold">
								See Our Solutions
							</Button>
						</Link>
					</div>
				</motion.div>

				<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
					<ArrowRight size={28} weight="bold" className="text-[#8B5CF6] rotate-90 drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
				</div>
			</section>

			<section className="py-24 bg-background relative overflow-hidden">
				{/* Subtle gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-b from-[#1A1033]/5 to-transparent pointer-events-none" />
				
				<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1.5 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-full">
							<span className="text-[#8B5CF6] font-semibold text-sm uppercase tracking-wider">What We Do</span>
						</motion.div>
						<motion.h2 variants={fadeInUp} className="text-deep-space mb-4 text-3xl md:text-4xl font-bold">
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
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
					>
						{solutions.map((solution, index) => {
							const Icon = solution.icon
							return (
								<motion.div key={index} variants={fadeInUp}>
									<Card className="h-full card-hover border border-[#8B5CF6]/10 hover:border-[#8B5CF6]/30 bg-white shadow-sm hover:shadow-[0_20px_40px_rgba(139,92,246,0.1)]">
										<CardHeader>
											<div className="w-14 h-14 bg-galaxy-gradient rounded-xl flex items-center justify-center mb-4 shadow-[0_4px_20px_rgba(139,92,246,0.3)]">
												<Icon size={28} weight="bold" className="text-white" />
											</div>
											<CardTitle className="text-xl text-[#0F0A1F]">{solution.title}</CardTitle>
											<CardDescription className="text-base text-[#64748B]">{solution.description}</CardDescription>
										</CardHeader>
										<CardContent>
											<ul className="space-y-2.5">
												{solution.features.map((feature, idx) => (
													<li key={idx} className="flex items-start gap-2.5 text-sm text-[#64748B]">
														<CheckCircle size={18} weight="fill" className="text-[#8B5CF6] mt-0.5 shrink-0" />
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

			<section className="py-24 bg-[#F8FAFC] relative">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1.5 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-full">
							<span className="text-[#8B5CF6] font-semibold text-sm uppercase tracking-wider">Industries</span>
						</motion.div>
						<motion.h2 variants={fadeInUp} className="text-[#0F0A1F] mb-4 text-3xl md:text-4xl font-bold">
							Industries We Serve
						</motion.h2>
						<motion.p variants={fadeInUp} className="text-xl text-[#64748B] max-w-2xl mx-auto">
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
									<Card className="card-hover border border-[#8B5CF6]/10 hover:border-[#8B5CF6]/30 bg-white shadow-sm hover:shadow-[0_15px_30px_rgba(139,92,246,0.1)]">
										<CardHeader>
											<div className="flex items-center gap-4">
												<div className="w-12 h-12 bg-galaxy-gradient rounded-xl flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(139,92,246,0.25)]">
													<Icon size={24} weight="bold" className="text-white" />
												</div>
												<div>
													<CardTitle className="text-lg text-[#0F0A1F]">{industry.name}</CardTitle>
													<CardDescription className="text-[#64748B]">{industry.description}</CardDescription>
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

			<section className="py-24 bg-white relative overflow-hidden">
				{/* Subtle background pattern */}
				<div className="absolute inset-0 opacity-30" style={{
					backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139,92,246,0.08) 1px, transparent 0)',
					backgroundSize: '40px 40px'
				}} />
				
				<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1.5 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-full">
							<span className="text-[#8B5CF6] font-semibold text-sm uppercase tracking-wider">Why Us</span>
						</motion.div>
						<motion.h2 variants={fadeInUp} className="text-[#0F0A1F] mb-4 text-3xl md:text-4xl font-bold">
							Why Choose Logica?
						</motion.h2>
						<motion.p variants={fadeInUp} className="text-xl text-[#64748B] max-w-2xl mx-auto">
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
										<div className="w-16 h-16 bg-galaxy-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_4px_20px_rgba(139,92,246,0.3)] group-hover:shadow-[0_8px_30px_rgba(139,92,246,0.4)] group-hover:scale-105 transition-all duration-300">
											<Icon size={32} weight="bold" className="text-white" />
										</div>
										<h3 className="text-xl font-heading font-bold text-[#0F0A1F] mb-3">{pillar.title}</h3>
										<p className="text-[#64748B] leading-relaxed">{pillar.description}</p>
									</div>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
			</section>

			<section className="py-24 bg-[#0F0A1F] text-[#F8FAFC] relative overflow-hidden">
				{/* Enhanced cosmic background */}
				<div className="absolute inset-0" style={{
					background: `
						radial-gradient(ellipse 60% 40% at 20% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
						radial-gradient(ellipse 50% 30% at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
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
					<motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1.5 bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 rounded-full">
							<span className="text-[#A78BFA] font-semibold text-sm uppercase tracking-wider">Process</span>
						</motion.div>
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
									<div className="text-7xl font-heading font-bold text-[#8B5CF6]/20 mb-4 group-hover:text-[#8B5CF6]/30 transition-colors duration-300">
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

			<section className="py-24 bg-white relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1.5 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-full">
							<span className="text-[#8B5CF6] font-semibold text-sm uppercase tracking-wider">Projects</span>
						</motion.div>
						<motion.h2 variants={fadeInUp} className="text-[#0F0A1F] mb-4 text-3xl md:text-4xl font-bold">
							Success Stories
						</motion.h2>
						<motion.p variants={fadeInUp} className="text-xl text-[#64748B] max-w-2xl mx-auto">
							Real results for real businesses
						</motion.p>
					</motion.div>

					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="grid grid-cols-1 md:grid-cols-3 gap-6"
					>
						{projects.map((project, index) => (
							<motion.div key={index} variants={fadeInUp}>
								<Card className="h-full card-hover border border-[#8B5CF6]/10 hover:border-[#8B5CF6]/30 bg-gradient-to-br from-white to-[#F8FAFC] shadow-sm hover:shadow-[0_20px_40px_rgba(139,92,246,0.12)]">
									<CardHeader className="space-y-4">
										<div className="inline-block px-3 py-1.5 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-full w-fit">
											<span className="text-[#8B5CF6] font-semibold text-sm">{project.client}</span>
										</div>
										<div>
											<CardTitle className="text-base mb-2 text-[#64748B] font-medium">The Challenge</CardTitle>
											<p className="text-[#0F0A1F] text-sm leading-relaxed">{project.problem}</p>
										</div>
										<div>
											<CardTitle className="text-base mb-2 text-[#64748B] font-medium">Our Solution</CardTitle>
											<p className="text-[#0F0A1F] text-sm leading-relaxed">{project.solution}</p>
										</div>
										<div className="pt-2 border-t border-[#8B5CF6]/10">
											<CardTitle className="text-base mb-2 text-[#64748B] font-medium">The Impact</CardTitle>
											<p className="text-[#8B5CF6] font-semibold text-sm">{project.result}</p>
										</div>
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
						className="text-center mt-10 md:mt-12 px-4"
					>
						<Link to="/projects">
							<Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300 font-semibold">
								View All Projects
								<ArrowRight className="ml-2" size={20} weight="bold" />
							</Button>
						</Link>
					</motion.div>
				</div>
			</section>

			<section className="py-16 md:py-24 relative overflow-hidden" style={{
				background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #EC4899 100%)'
			}}>
				{/* Overlay pattern */}
				<div className="absolute inset-0" style={{
					backgroundImage: `
						linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
						linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
					`,
					backgroundSize: '40px 40px'
				}} />
				
				<motion.div
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					variants={fadeInUp}
					className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center"
				>
					<h2 className="text-[#F8FAFC] mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
						Tell us what system you need,<br className="hidden sm:block" /><span className="sm:hidden"> </span>and we'll build it.
					</h2>
					<p className="text-base md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
						Whether it's HR, CRM, inventory, finance, or something completely custom—we've got you covered.
					</p>
					<Link to="/contact">
						<Button size="lg" className="bg-white text-[#8B5CF6] hover:bg-white/95 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 text-base md:text-lg px-8 md:px-10 py-5 md:py-6 font-bold shadow-2xl w-full sm:w-auto">
							Start Your Project Today
							<ArrowRight className="ml-2" size={20} weight="bold" />
						</Button>
					</Link>
				</motion.div>
			</section>
		</div>
	)
}

