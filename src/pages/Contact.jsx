import { useState } from 'react'
import { motion } from 'framer-motion'
import {
	EnvelopeSimple,
	Phone,
	MapPin,
	PaperPlaneTilt,
	CheckCircle,
	Question
} from '@phosphor-icons/react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select.jsx'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion.jsx'
import { toast } from 'sonner'

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

export default function Contact() {
	const [submissions, setSubmissions] = useState([])
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		company: '',
		email: '',
		phone: '',
		systemNeeds: '',
		timeline: ''
	})

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsSubmitting(true)

		const newSubmission = {
			id: Date.now().toString(),
			timestamp: new Date().toISOString(),
			data: formData
		}

		setSubmissions((current) => [...(current || []), newSubmission])

		toast.success('Consultation request received!', {
			description: "We'll get back to you within 24 hours."
		})

		setFormData({
			name: '',
			company: '',
			email: '',
			phone: '',
			systemNeeds: '',
			timeline: ''
		})

		setIsSubmitting(false)
	}

	const handleChange = (field, value) => {
		setFormData(prev => ({ ...prev, [field]: value }))
	}

	const faqs = [
		{
			question: 'How long does it take to build a custom system?',
			answer: 'Timeline varies based on complexity, but most projects range from 6-16 weeks. Simple tools can be delivered in 4-6 weeks, while comprehensive enterprise systems may take 3-6 months. We provide a detailed timeline after our initial discovery phase.'
		},
		{
			question: 'What does a custom system cost?',
			answer: 'Pricing depends on scope, features, and complexity. Projects typically range from $15,000 for simple automation tools to $100,000+ for enterprise-wide systems. We provide transparent, fixed-price quotes after understanding your requirements.'
		},
		{
			question: 'Do you provide ongoing support after launch?',
			answer: 'Absolutely. We offer flexible support packages including bug fixes, feature updates, hosting management, and technical assistance. Most clients opt for monthly retainer agreements for peace of mind.'
		},
		{
			question: 'Can you integrate with our existing systems?',
			answer: 'Yes! We specialize in building systems that play well with others. Whether it\'s your accounting software, CRM, payment processor, or legacy database, we can integrate it seamlessly.'
		},
		{
			question: 'What if we need changes after the system is built?',
			answer: 'We build with flexibility in mind. You own all the code, and we\'re always available for enhancements, new features, or adjustments as your business evolves. Most clients continue working with us long-term.'
		},
		{
			question: 'Do you work with startups or only established companies?',
			answer: 'We work with organizations of all sizes! From solo founders to enterprise teams, we tailor our approach and pricing to fit your stage and budget.'
		}
	]

	return (
		<div className="min-h-screen pt-20">
			<section className="relative py-24 bg-deep-space text-soft-white overflow-hidden">
				<div className="absolute inset-0 pattern-grid" />
				<div className="absolute inset-0 bg-galaxy-radial opacity-30" />
        
				<motion.div
					initial="initial"
					animate="animate"
					variants={fadeInUp}
					className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center"
				>
					<div className="inline-block mb-6 px-6 py-2 bg-galactic-violet/20 border border-galactic-violet/50 rounded-full">
						<span className="text-electric-purple font-semibold text-sm">Get in Touch</span>
					</div>
          
					<h1 className="text-soft-white mb-6">
						Let's Build Your<br />
						<span className="text-gradient">Perfect System</span>
					</h1>
          
					<p className="text-xl text-soft-white/80 mb-10 max-w-3xl mx-auto">
						Book a free consultation to discuss your needs. No obligations, just honest advice on the best path forward.
					</p>
				</motion.div>
			</section>

			<section className="py-24 bg-background">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
						<motion.div
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							variants={staggerContainer}
							className="lg:col-span-2"
						>
							<Card className="border-2 border-border">
								<CardHeader>
									<CardTitle className="text-2xl">Book a Free Consultation</CardTitle>
									<CardDescription className="text-base">
										Tell us about your project and we'll schedule a call to discuss how we can help
									</CardDescription>
								</CardHeader>
								<CardContent>
									<form onSubmit={handleSubmit} className="space-y-6">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div className="space-y-2">
												<Label htmlFor="name">Full Name *</Label>
												<Input
													id="name"
													placeholder="John Smith"
													value={formData.name}
													onChange={(e) => handleChange('name', e.target.value)}
													required
												/>
											</div>

											<div className="space-y-2">
												<Label htmlFor="company">Company Name *</Label>
												<Input
													id="company"
													placeholder="Acme Corporation"
													value={formData.company}
													onChange={(e) => handleChange('company', e.target.value)}
													required
												/>
											</div>
										</div>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div className="space-y-2">
												<Label htmlFor="email">Email Address *</Label>
												<Input
													id="email"
													type="email"
													placeholder="john@acme.com"
													value={formData.email}
													onChange={(e) => handleChange('email', e.target.value)}
													required
												/>
											</div>

											<div className="space-y-2">
												<Label htmlFor="phone">Phone Number</Label>
												<Input
													id="phone"
													type="tel"
													placeholder="+1 (555) 123-4567"
													value={formData.phone}
													onChange={(e) => handleChange('phone', e.target.value)}
												/>
											</div>
										</div>

										<div className="space-y-2">
											<Label htmlFor="systemNeeds">What system do you need? *</Label>
											<Textarea
												id="systemNeeds"
												placeholder="Describe your current challenges and what you're looking to build. The more detail, the better we can help!"
												value={formData.systemNeeds}
												onChange={(e) => handleChange('systemNeeds', e.target.value)}
												rows={5}
												required
											/>
										</div>

										<div className="space-y-2">
											<Label htmlFor="timeline">Desired Timeline *</Label>
											<Select
												value={formData.timeline}
												onValueChange={(value) => handleChange('timeline', value)}
												required
											>
												<SelectTrigger id="timeline">
													<SelectValue placeholder="Select a timeline" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="asap">ASAP (1-2 months)</SelectItem>
													<SelectItem value="3-6-months">3-6 months</SelectItem>
													<SelectItem value="6-12-months">6-12 months</SelectItem>
													<SelectItem value="exploring">Just exploring options</SelectItem>
												</SelectContent>
											</Select>
										</div>

										<Button
											type="submit"
											size="lg"
											disabled={isSubmitting}
											className="w-full bg-galaxy-gradient hover:shadow-xl hover:shadow-galactic-violet/50 hover:scale-[1.02] transition-all text-lg"
										>
											{isSubmitting ? (
												'Sending...'
											) : (
												<>
													Send Consultation Request
													<PaperPlaneTilt className="ml-2" size={20} weight="bold" />
												</>
											)}
										</Button>

										<p className="text-sm text-muted-foreground text-center">
											We typically respond within 24 hours. Your information is kept confidential.
										</p>
									</form>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							variants={staggerContainer}
							className="space-y-6"
						>
							<motion.div variants={fadeInUp}>
								<Card className="border-2 border-galactic-violet/20 bg-linear-to-br from-galactic-violet/5 to-electric-purple/5">
									<CardHeader>
										<CardTitle className="text-xl">Contact Information</CardTitle>
									</CardHeader>
									<CardContent className="space-y-4">
										<a
											href="mailto:hello@uvltechnology.com"
											className="flex items-center gap-3 text-muted-foreground hover:text-galactic-violet transition-colors group"
										>
											<div className="w-10 h-10 bg-galactic-violet/10 group-hover:bg-galactic-violet group-hover:text-soft-white rounded-lg flex items-center justify-center transition-colors">
												<EnvelopeSimple size={20} weight="bold" />
											</div>
											<div>
												<div className="text-xs text-muted-foreground">Email</div>
												<div className="font-medium text-deep-space">hello@uvltechnology.com</div>
											</div>
										</a>

										<a
											href="tel:+1234567890"
											className="flex items-center gap-3 text-muted-foreground hover:text-galactic-violet transition-colors group"
										>
											<div className="w-10 h-10 bg-galactic-violet/10 group-hover:bg-galactic-violet group-hover:text-soft-white rounded-lg flex items-center justify-center transition-colors">
												<Phone size={20} weight="bold" />
											</div>
											<div>
												<div className="text-xs text-muted-foreground">Phone</div>
												<div className="font-medium text-deep-space">+1 (234) 567-890</div>
											</div>
										</a>

										<div className="flex items-center gap-3 text-muted-foreground">
											<div className="w-10 h-10 bg-galactic-violet/10 rounded-lg flex items-center justify-center">
												<MapPin size={20} weight="bold" />
											</div>
											<div>
												<div className="text-xs text-muted-foreground">Location</div>
												<div className="font-medium text-deep-space">Global Remote Operations</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>

							<motion.div variants={fadeInUp}>
								<Card className="border-2 border-electric-purple/20">
									<CardHeader>
										<CardTitle className="text-xl flex items-center gap-2">
											<CheckCircle size={24} weight="bold" className="text-electric-purple" />
											What Happens Next?
										</CardTitle>
									</CardHeader>
									<CardContent className="space-y-3 text-sm text-muted-foreground">
										<div className="flex gap-3">
											<div className="w-6 h-6 bg-galactic-violet rounded-full flex items-center justify-center text-soft-white text-xs font-bold shrink-0">
												1
											</div>
											<p>We review your submission and respond within 24 hours</p>
										</div>
										<div className="flex gap-3">
											<div className="w-6 h-6 bg-galactic-violet rounded-full flex items-center justify-center text-soft-white text-xs font-bold shrink-0">
												2
											</div>
											<p>Schedule a 30-minute discovery call to understand your needs</p>
										</div>
										<div className="flex gap-3">
											<div className="w-6 h-6 bg-galactic-violet rounded-full flex items-center justify-center text-soft-white text-xs font-bold shrink-0">
												3
											</div>
											<p>Receive a detailed proposal with timeline and pricing</p>
										</div>
										<div className="flex gap-3">
											<div className="w-6 h-6 bg-galactic-violet rounded-full flex items-center justify-center text-soft-white text-xs font-bold shrink-0">
												4
											</div>
											<p>Start building your custom solution</p>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="py-24 bg-muted">
				<div className="max-w-4xl mx-auto px-6 lg:px-8">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="text-center mb-12"
					>
						<motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
							<Question size={32} weight="bold" className="text-galactic-violet" />
							<h2 className="text-deep-space">Frequently Asked Questions</h2>
						</motion.div>
						<motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
							Quick answers to common questions
						</motion.p>
					</motion.div>

					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={fadeInUp}
					>
						<Accordion type="single" collapsible className="space-y-4">
							{faqs.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
									className="bg-card border-2 border-border rounded-lg px-6"
								>
									<AccordionTrigger className="text-left font-heading font-bold text-deep-space hover:text-galactic-violet">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="text-muted-foreground leading-relaxed">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</motion.div>
				</div>
			</section>
		</div>
	)
}

