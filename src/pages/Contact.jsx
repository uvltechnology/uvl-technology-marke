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
			<section className="relative py-24 bg-[#050309] text-[#F8FAFC] overflow-hidden">
				{/* Enhanced cosmic background */}
				<div className="absolute inset-0" style={{
					background: `
						radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124, 58, 237, 0.2) 0%, transparent 60%),
						radial-gradient(ellipse 60% 40% at 100% 100%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
						linear-gradient(135deg, #050309 0%, #0A0612 40%, #1F1335 100%)
					`
				}} />
				<div className="absolute inset-0 pattern-grid opacity-40" />
				
				{/* Animated glow orbs */}
				<div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#7C3AED]/8 rounded-full blur-[100px] animate-pulse pointer-events-none" />
				<div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-[#9333EA]/5 rounded-full blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
        
				<motion.div
					initial="initial"
					animate="animate"
					variants={fadeInUp}
					className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center"
				>
					<div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-[#7C3AED]/15 border border-[#7C3AED]/30 rounded-full backdrop-blur-sm">
						<span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-pulse" />
						<span className="text-[#A855F7] font-semibold text-sm tracking-wide">Get in Touch</span>
					</div>
          
					<h1 className="text-[#F8FAFC] mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
						Let's Build Your<br />
						<span className="bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#C084FC] bg-clip-text text-transparent">Perfect System</span>
					</h1>
          
					<p className="text-lg md:text-xl text-[#CBD5E1] mb-10 max-w-3xl mx-auto leading-relaxed">
						Book a free consultation to discuss your needs. No obligations, just honest advice on the best path forward.
					</p>
				</motion.div>
			</section>

			<section className="py-24 bg-[#0A0612]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<motion.div
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							variants={staggerContainer}
							className="lg:col-span-2"
						>
							<Card className="border border-[#7C3AED]/20 bg-[#160D24]/90 backdrop-blur-xl shadow-2xl shadow-[#7C3AED]/5">
								<CardHeader className="pb-2">
									<CardTitle className="text-2xl font-bold text-[#F8FAFC]">Book a Free Consultation</CardTitle>
									<CardDescription className="text-base text-[#94A3B8]">
										Tell us about your project and we'll schedule a call to discuss how we can help
									</CardDescription>
								</CardHeader>
								<CardContent className="pt-6">
									<form onSubmit={handleSubmit} className="space-y-8">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div className="space-y-3">
												<Label htmlFor="name" className="text-sm font-semibold text-[#E2E8F0] tracking-wide">Full Name <span className="text-[#A855F7]">*</span></Label>
												<Input
													id="name"
													placeholder="John Smith"
													value={formData.name}
													onChange={(e) => handleChange('name', e.target.value)}
													required
													className="h-12 bg-[#0A0612] border-[#7C3AED]/30 text-[#F8FAFC] placeholder:text-[#64748B] focus:border-[#7C3AED] focus:ring-[#7C3AED]/20 rounded-xl transition-all"
												/>
											</div>

											<div className="space-y-3">
												<Label htmlFor="company" className="text-sm font-semibold text-[#E2E8F0] tracking-wide">Company Name <span className="text-[#A855F7]">*</span></Label>
												<Input
													id="company"
													placeholder="Acme Corporation"
													value={formData.company}
													onChange={(e) => handleChange('company', e.target.value)}
													required
													className="h-12 bg-[#0A0612] border-[#7C3AED]/30 text-[#F8FAFC] placeholder:text-[#64748B] focus:border-[#7C3AED] focus:ring-[#7C3AED]/20 rounded-xl transition-all"
												/>
											</div>
										</div>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div className="space-y-3">
												<Label htmlFor="email" className="text-sm font-semibold text-[#E2E8F0] tracking-wide">Email Address <span className="text-[#A855F7]">*</span></Label>
												<Input
													id="email"
													type="email"
													placeholder="john@acme.com"
													value={formData.email}
													onChange={(e) => handleChange('email', e.target.value)}
													required
													className="h-12 bg-[#0A0612] border-[#7C3AED]/30 text-[#F8FAFC] placeholder:text-[#64748B] focus:border-[#7C3AED] focus:ring-[#7C3AED]/20 rounded-xl transition-all"
												/>
											</div>

											<div className="space-y-3">
												<Label htmlFor="phone" className="text-sm font-semibold text-[#E2E8F0] tracking-wide">Phone Number</Label>
												<Input
													id="phone"
													type="tel"
													placeholder="+1 (555) 123-4567"
													value={formData.phone}
													onChange={(e) => handleChange('phone', e.target.value)}
													className="h-12 bg-[#0A0612] border-[#7C3AED]/30 text-[#F8FAFC] placeholder:text-[#64748B] focus:border-[#7C3AED] focus:ring-[#7C3AED]/20 rounded-xl transition-all"
												/>
											</div>
										</div>

										<div className="space-y-3">
											<Label htmlFor="systemNeeds" className="text-sm font-semibold text-[#E2E8F0] tracking-wide">What system do you need? <span className="text-[#A855F7]">*</span></Label>
											<Textarea
												id="systemNeeds"
												placeholder="Describe your current challenges and what you're looking to build. The more detail, the better we can help!"
												value={formData.systemNeeds}
												onChange={(e) => handleChange('systemNeeds', e.target.value)}
												rows={5}
												required
												className="bg-[#0A0612] border-[#7C3AED]/30 text-[#F8FAFC] placeholder:text-[#64748B] focus:border-[#7C3AED] focus:ring-[#7C3AED]/20 rounded-xl transition-all resize-none"
											/>
										</div>

										<div className="space-y-3">
											<Label htmlFor="timeline" className="text-sm font-semibold text-[#E2E8F0] tracking-wide">Desired Timeline <span className="text-[#A855F7]">*</span></Label>
											<Select
												value={formData.timeline}
												onValueChange={(value) => handleChange('timeline', value)}
												required
											>
												<SelectTrigger id="timeline" className="h-12 bg-[#0A0612] border-[#7C3AED]/30 text-[#F8FAFC] focus:border-[#7C3AED] focus:ring-[#7C3AED]/20 rounded-xl">
													<SelectValue placeholder="Select a timeline" className="text-[#64748B]" />
												</SelectTrigger>
												<SelectContent className="bg-[#160D24] border-[#7C3AED]/30">
													<SelectItem value="asap" className="text-[#F8FAFC] focus:bg-[#7C3AED]/20">ASAP (1-2 months)</SelectItem>
													<SelectItem value="3-6-months" className="text-[#F8FAFC] focus:bg-[#7C3AED]/20">3-6 months</SelectItem>
													<SelectItem value="6-12-months" className="text-[#F8FAFC] focus:bg-[#7C3AED]/20">6-12 months</SelectItem>
													<SelectItem value="exploring" className="text-[#F8FAFC] focus:bg-[#7C3AED]/20">Just exploring options</SelectItem>
												</SelectContent>
											</Select>
										</div>

										<Button
											type="submit"
											size="lg"
											disabled={isSubmitting}
											className="w-full h-14 bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#A855F7] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:scale-[1.02] transition-all duration-300 text-lg font-bold rounded-xl"
										>
											{isSubmitting ? (
												'Sending...'
											) : (
												<>
													Send Consultation Request
													<PaperPlaneTilt className="ml-2" size={22} weight="bold" />
												</>
											)}
										</Button>

										<p className="text-sm text-[#64748B] text-center pt-2">
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
								<Card className="border border-[#7C3AED]/20 bg-[#160D24]/90 backdrop-blur-xl shadow-xl">
									<CardHeader className="pb-4">
										<CardTitle className="text-xl font-bold text-[#F8FAFC]">Contact Information</CardTitle>
									</CardHeader>
									<CardContent className="space-y-5">
										<a
											href="mailto:sales@logicatechnology.com"
											className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#7C3AED]/10 transition-all duration-300 group"
										>
											<div className="w-12 h-12 bg-[#7C3AED]/20 group-hover:bg-[#7C3AED] rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg">
												<EnvelopeSimple size={22} weight="bold" className="text-[#A855F7] group-hover:text-white transition-colors" />
											</div>
											<div>
												<div className="text-xs font-medium text-[#64748B] uppercase tracking-wider">Email</div>
												<div className="font-semibold text-[#F8FAFC]">sales@logicatechnology.com</div>
											</div>
										</a>

										<a
											href="tel:+1234567890"
											className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#7C3AED]/10 transition-all duration-300 group"
										>
											<div className="w-12 h-12 bg-[#7C3AED]/20 group-hover:bg-[#7C3AED] rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg">
												<Phone size={22} weight="bold" className="text-[#A855F7] group-hover:text-white transition-colors" />
											</div>
											<div>
												<div className="text-xs font-medium text-[#64748B] uppercase tracking-wider">Phone</div>
												<div className="font-semibold text-[#F8FAFC]">+1 (234) 567-890</div>
											</div>
										</a>

										<div className="flex items-center gap-4 p-3 rounded-xl">
											<div className="w-12 h-12 bg-[#7C3AED]/20 rounded-xl flex items-center justify-center shadow-lg">
												<MapPin size={22} weight="bold" className="text-[#A855F7]" />
											</div>
											<div>
												<div className="text-xs font-medium text-[#64748B] uppercase tracking-wider">Address</div>
												<div className="font-semibold text-[#F8FAFC]">442 Silangan East Purok 3 Munting Mapino Naic, Cavite</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>

							<motion.div variants={fadeInUp}>
								<Card className="border border-[#9333EA]/20 bg-[#160D24]/90 backdrop-blur-xl shadow-xl">
									<CardHeader className="pb-4">
										<CardTitle className="text-xl font-bold flex items-center gap-3 text-[#F8FAFC]">
											<div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#A855F7] rounded-lg flex items-center justify-center">
												<CheckCircle size={18} weight="bold" className="text-white" />
											</div>
											What Happens Next?
										</CardTitle>
									</CardHeader>
									<CardContent className="space-y-4">
										<div className="flex gap-4 items-start">
											<div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#9333EA] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-lg shadow-[#7C3AED]/30">
												1
											</div>
											<p className="text-[#CBD5E1] text-sm leading-relaxed pt-1">We review your submission and respond within 24 hours</p>
										</div>
										<div className="flex gap-4 items-start">
											<div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#9333EA] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-lg shadow-[#7C3AED]/30">
												2
											</div>
											<p className="text-[#CBD5E1] text-sm leading-relaxed pt-1">Schedule a 30-minute discovery call to understand your needs</p>
										</div>
										<div className="flex gap-4 items-start">
											<div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#9333EA] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-lg shadow-[#7C3AED]/30">
												3
											</div>
											<p className="text-[#CBD5E1] text-sm leading-relaxed pt-1">Receive a detailed proposal with timeline and pricing</p>
										</div>
										<div className="flex gap-4 items-start">
											<div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#9333EA] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-lg shadow-[#7C3AED]/30">
												4
											</div>
											<p className="text-[#CBD5E1] text-sm leading-relaxed pt-1">Start building your custom solution</p>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="py-24 bg-[#050309]">
				<div className="max-w-4xl mx-auto px-6 lg:px-8">
					<motion.div
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						variants={staggerContainer}
						className="text-center mb-12"
					>
						<motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
							<div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#9333EA] rounded-xl flex items-center justify-center shadow-lg">
								<Question size={22} weight="bold" className="text-white" />
							</div>
							<h2 className="text-[#F8FAFC] text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
						</motion.div>
						<motion.p variants={fadeInUp} className="text-xl text-[#94A3B8]">
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
									className="bg-[#160D24]/80 border border-[#7C3AED]/15 rounded-xl px-6 backdrop-blur-sm hover:border-[#7C3AED]/30 transition-colors"
								>
									<AccordionTrigger className="text-left font-heading font-bold text-[#F8FAFC] hover:text-[#A855F7] py-5">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="text-[#94A3B8] leading-relaxed pb-5">
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

