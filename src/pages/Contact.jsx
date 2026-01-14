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
// Removed Select import (timeline removed)
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion.jsx'
import { toast } from 'sonner'
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

export default function Contact() {
	const [submissions, setSubmissions] = useState([])
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [errors, setErrors] = useState({})
	const [formData, setFormData] = useState({
		name: '',
		company: '',
		email: '',
		phone: '',
		systemNeeds: ''
	})

	const validateForm = () => {
		const errs = {}
		if (!formData.name || typeof formData.name !== 'string' || formData.name.trim().length < 2) {
			errs.name = 'Please enter your full name.'
		}
		if (!formData.email || typeof formData.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			errs.email = 'Please enter a valid email address.'
		}
		if (!formData.systemNeeds || typeof formData.systemNeeds !== 'string' || formData.systemNeeds.trim().length < 10) {
			errs.systemNeeds = 'Please provide more details (min 10 characters).'
		}
		return errs
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		// client-side validation
		const validationErrors = validateForm()
		if (Object.keys(validationErrors).length) {
			setErrors(validationErrors)
			toast.error('Please fix the highlighted fields before submitting.')
			// focus first invalid field (ids match form keys)
			const firstKey = Object.keys(validationErrors)[0]
			if (firstKey) {
				const el = document.getElementById(firstKey)
				if (el && typeof el.focus === 'function') el.focus()
			}
			return
		}

		setIsSubmitting(true)

		try {
			const apiBase = import.meta.env.VITE_API_URL || ''
			const res = await fetch(`${apiBase}/api/contact`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			})

			if (!res.ok) {
				const payload = await res.json().catch(() => null)
				const message = payload && payload.message ? payload.message : 'Submission failed'
				throw new Error(message)
			}

			const newSubmission = {
				id: Date.now().toString(),
				timestamp: new Date().toISOString(),
				data: formData
			}

			setSubmissions((current) => [...(current || []), newSubmission])

			toast.success('Consultation request sent!', {
				description: "We'll get back to you within 24 hours."
			})

			setFormData({
				name: '',
				company: '',
				email: '',
				phone: '',
				systemNeeds: ''
			})
		} catch (err) {
			console.error(err)
			toast.error('Submission failed. Please try again later.')
		} finally {
			setIsSubmitting(false)
		}
	}

	const handleChange = (field, value) => {
		setFormData(prev => ({ ...prev, [field]: value }))
		setErrors(prev => ({ ...prev, [field]: undefined }))
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
		<div className="min-h-screen">
			<Navbar />
			<section id="contact-hero" className="pt-24 bg-[#0A0612]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 ">
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
																className={`h-12 bg-[#0A0612] text-[#F8FAFC] placeholder:text-[#64748B] rounded-xl transition-all focus:ring-0 px-3 py-2 ${errors.name ? 'border-red-400 ring-1 ring-red-400 focus:border-red-400' : 'border-[#7C3AED]/30 focus:border-[#7C3AED] focus:ring-[#7C3AED]/20'}`}
												/>
															{errors.name && <p className="text-sm text-red-400 mt-1">{errors.name}</p>}
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
													className={`h-12 bg-[#0A0612] text-[#F8FAFC] placeholder:text-[#64748B] rounded-xl transition-all focus:ring-0 px-3 py-2 ${errors.email ? 'border-red-400 ring-1 ring-red-400 focus:border-red-400' : 'border-[#7C3AED]/30 focus:border-[#7C3AED] focus:ring-[#7C3AED]/20'}`}
												/>
												{errors.email && <p className="text-sm text-red-400 mt-1">{errors.email}</p>}
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
												className={`bg-[#0A0612] text-[#F8FAFC] placeholder:text-[#64748B] rounded-xl transition-all resize-none p-3 ${errors.systemNeeds ? 'border-red-400 ring-1 ring-red-400 focus:border-red-400' : 'border-[#7C3AED]/30 focus:border-[#7C3AED] focus:ring-[#7C3AED]/20'}`}
											/>
											{errors.systemNeeds && <p className="text-sm text-red-400 mt-1">{errors.systemNeeds}</p>}
										</div>

										{/* Desired Timeline removed per request */}

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

						{/* Right column removed: Contact Information & What Happens Next */}
					</div>
				</div>
			</section>

			{/* <section className="py-24 bg-[#050309]">
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
			</section> */}
		</div>
	)
}

