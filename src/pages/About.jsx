import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
	Target,
	Eye,
	Heart,
	Lightbulb,
	ShieldCheck,
	Handshake,
	ArrowRight,
	CheckCircle,
	Rocket
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

export default function About() {
	const values = [
		{
			icon: Lightbulb,
			title: 'Innovation',
			description: 'We embrace cutting-edge technologies and creative problem-solving to build systems that push boundaries.'
		},
		{
			icon: ShieldCheck,
			title: 'Reliability',
			description: 'Our systems are built to last. We prioritize stability, security, and performance in every line of code.'
		},
		{
			icon: Handshake,
			title: 'Transparency',
			description: 'Clear communication, honest timelines, and no hidden surprises. You always know where your project stands.'
		},
		{
			icon: Heart,
			title: 'Empathy',
			description: 'We listen first, understand deeply, and build solutions that truly address your unique challenges.'
		}
	]

	const stats = [
		{ number: '3', label: 'Projects In Progress' },
		{ number: '3+', label: 'Industries Targeted' },
		{ number: '100%', label: 'Dedication' },
		{ number: '24/7', label: 'Support Ready' }
	]

	const teamPrinciples = [
		'Deep technical expertise across modern tech stacks',
		'Business-first mindset with technology as the enabler',
		'Agile development with continuous client feedback',
		'Obsessive attention to user experience and design',
		'Security and compliance baked into every solution',
		'Long-term partnership beyond initial delivery'
	]

	return (
		<div className="min-h-screen">
			<section className="relative pt-32 pb-24 bg-[#0A0612] text-[#F8FAFC] overflow-hidden">
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
						Building the Systems<br />
						<span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#22D3EE] bg-clip-text text-transparent">That Power Growth</span>
					</h1>
          
					<p className="text-lg md:text-xl text-[#CBD5E1] mb-10 max-w-3xl mx-auto leading-relaxed">
						We're a team of engineers, designers, and problem-solvers dedicated to one mission: making your business run smoother through custom technology.
					</p>
				</motion.div>
			</section>

			<section className="py-24 bg-[#0A0612]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<motion.div
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							variants={staggerContainer}
						>
							<motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
								<Target size={32} weight="bold" className="text-[#8B5CF6]" />
								<h2 className="text-[#F8FAFC] text-3xl font-bold">Our Story</h2>
							</motion.div>
							<motion.div variants={fadeInUp} className="space-y-4 text-[#CBD5E1] leading-relaxed">
								<p>
											Logica was born from a simple observation: too many businesses are held back by outdated systems, expensive software that doesn't quite fit, or manual processes that waste countless hours.
								</p>
								<p>
									We saw organizations struggling with off-the-shelf solutions that required them to change their workflows rather than adapting to how they actually work. We saw talented teams bogged down by administrative tasks that could be automated. We saw opportunities for growth limited by technical constraints.
								</p>
								<p>
									So we set out to build something different: a technology partner that truly listens, understands your unique needs, and builds custom solutions that fit like a glove. No templates. No compromises. Just systems designed specifically for how you work.
								</p>
								<p>
									Today, we've helped dozens of organizations across diverse industries transform their operations. From small startups to established enterprises, we bring the same commitment to every project: building systems that just work.
								</p>
							</motion.div>
						</motion.div>

						<motion.div
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							variants={staggerContainer}
							className="grid grid-cols-2 gap-6"
						>
							{stats.map((stat, index) => (
								<motion.div key={index} variants={fadeInUp}>
									<Card className="text-center p-8 border border-[#8B5CF6]/30 bg-[#1A1033]/80 backdrop-blur-sm">
										<div className="text-5xl font-heading font-bold bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent mb-2">
											{stat.number}
										</div>
										<div className="text-sm text-[#CBD5E1] font-medium">{stat.label}</div>
									</Card>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</section>

			<section className="py-24 bg-[#0A0612]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="grid grid-cols-1 lg:grid-cols-2 gap-16"
					>
						<div>
							<motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
								<Target size={32} weight="bold" className="text-[#8B5CF6]" />
								<h2 className="text-[#F8FAFC] text-3xl font-bold">Our Mission</h2>
							</motion.div>
							<motion.p variants={fadeInUp} className="text-lg text-[#CBD5E1] leading-relaxed">
								To empower every organization with custom technology solutions that eliminate operational friction, automate repetitive tasks, and unlock new growth opportunities—making powerful systems accessible regardless of size or budget.
							</motion.p>
						</div>

						<div>
							<motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
								<Eye size={32} weight="bold" className="text-[#EC4899]" />
								<h2 className="text-[#F8FAFC] text-3xl font-bold">Our Vision</h2>
							</motion.div>
							<motion.p variants={fadeInUp} className="text-lg text-[#CBD5E1] leading-relaxed">
								To become the universal solution provider for any organization needing systems for operations, HR, inventory, finance, CRM, analytics, workflow automation, dashboards, or fully custom platforms—a trusted partner for digital transformation across all industries.
							</motion.p>
						</div>
					</motion.div>
				</div>
			</section>

			<section className="py-24 bg-[#0A0612] relative overflow-hidden">
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.h2 variants={fadeInUp} className="text-[#F8FAFC] text-3xl md:text-4xl font-bold mb-4">
							Our Core Values
						</motion.h2>
						<motion.p variants={fadeInUp} className="text-xl text-[#CBD5E1] max-w-2xl mx-auto">
							The principles that guide every decision we make
						</motion.p>
					</motion.div>

					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
					>
						{values.map((value, index) => {
							const Icon = value.icon
							return (
								<motion.div key={index} variants={fadeInUp}>
									<Card className="h-full text-center bg-[#1A1033]/60 border border-[#8B5CF6]/20 backdrop-blur-sm hover:border-[#8B5CF6]/50 transition-all duration-300">
										<CardHeader>
											<div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#8B5CF6]/25">
												<Icon size={32} weight="bold" className="text-white" />
											</div>
											<CardTitle className="text-xl text-[#F8FAFC]">{value.title}</CardTitle>
										</CardHeader>
										<CardContent>
											<CardDescription className="text-base text-[#CBD5E1]">{value.description}</CardDescription>
										</CardContent>
									</Card>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
			</section>

			<section className="py-24 bg-[#0A0612] text-[#F8FAFC] relative overflow-hidden">
				<div className="absolute inset-0 pattern-grid opacity-20" />
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.h2 variants={fadeInUp} className="text-[#F8FAFC] text-3xl md:text-4xl font-bold mb-4">
							What Makes Us Different
						</motion.h2>
						<motion.p variants={fadeInUp} className="text-xl text-[#CBD5E1] max-w-2xl mx-auto">
							Our approach to building systems that actually work
						</motion.p>
					</motion.div>

					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
					>
						{teamPrinciples.map((principle, index) => (
							<motion.div key={index} variants={fadeInUp}>
								<div className="flex items-start gap-3 bg-[#8B5CF6]/5 p-6 rounded-xl border border-[#8B5CF6]/20 backdrop-blur-sm hover:border-[#8B5CF6]/40 transition-colors">
									<CheckCircle size={24} weight="fill" className="text-[#A78BFA] shrink-0 mt-1" />
									<p className="text-[#CBD5E1]">{principle}</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			<section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(15, 15, 15, 1) 2%, rgba(140, 82, 255, 1) 100%)' }}>
				<div className="absolute inset-0 pattern-grid opacity-20" />
				<motion.div
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					variants={fadeInUp}
					className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center"
				>
					<Rocket size={64} weight="bold" className="text-white mx-auto mb-6" />
					<h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
						Let's Build Something Amazing Together
					</h2>
					<p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
						Whether you need a complete business system or a simple automation tool, we're ready to help you transform your operations.
					</p>
					<Link to="/contact">
						<Button size="lg" className="bg-white text-[#7C3AED] hover:bg-white/90 hover:scale-105 transition-all text-lg px-10 py-6 shadow-2xl font-semibold">
							Start the Conversation
							<ArrowRight className="ml-2" size={20} weight="bold" />
						</Button>
					</Link>
				</motion.div>
			</section>
		</div>
	)
}

