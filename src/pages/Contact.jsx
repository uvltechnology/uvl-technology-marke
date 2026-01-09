import { useState } from 'react'
import { motion } from 'framer-motion'
import {
	EnvelopeSimple,
	Phone,
	MapPin,
	PaperPlaneTilt,
	CheckCircle
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
// Accordion imports removed as FAQ section is hidden
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

	// FAQ data removed as the section is hidden

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
        
				<motion.div
					initial="initial"
					animate="animate"
					variants={fadeInUp}
					className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center"
				>
					<div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 rounded-full backdrop-blur-sm">
						<span className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse" />
						<span className="text-[#A78BFA] font-semibold text-sm tracking-wide">Get in Touch</span>
					</div>
          
					<h1 className="text-[#F8FAFC] mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
						Let's Build Your<br />
						<span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#22D3EE] bg-clip-text text-transparent">Perfect System</span>
					</h1>
          
					<p className="text-lg md:text-xl text-[#CBD5E1] mb-10 max-w-3xl mx-auto leading-relaxed">
						Book a free consultation to discuss your needs. No obligations, just honest advice on the best path forward.
					</p>
				</motion.div>
			</section>

			<section className="py-24 bg-[#0F0A1F]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
						<motion.div
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							variants={staggerContainer}
							className="lg:col-span-2"
						>
							<Card className="relative overflow-hidden border border-[#8B5CF6]/40 bg-gradient-to-br from-[#1A1033]/95 via-[#0F0A1F]/90 to-[#1A1033]/95 backdrop-blur-xl shadow-2xl shadow-[#8B5CF6]/20">
								{/* Decorative corner glow */}
								<div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#8B5CF6]/20 to-transparent rounded-full blur-3xl -z-10" />
								<div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#EC4899]/15 to-transparent rounded-full blur-3xl -z-10" />
								
								<CardHeader className="border-b border-[#8B5CF6]/20 pb-8">
									<CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#F8FAFC] to-[#CBD5E1] bg-clip-text text-transparent">Book a Free Consultation</CardTitle>
									<CardDescription className="text-base text-[#94A3B8] mt-3">
										Tell us about your project and we'll schedule a call to discuss how we can help
									</CardDescription>
								</CardHeader>
								<CardContent className="pt-8">
									<form onSubmit={handleSubmit} className="space-y-8">
										{/* Name & Company Row */}
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div className="space-y-3">
												<Label htmlFor="name" className="text-[#F8FAFC] font-semibold">Full Name *</Label>
												<Input
													id="name"
													placeholder="John Smith"
													value={formData.name}
													onChange={(e) => handleChange('name', e.target.value)}
													className="bg-[#0F0A1F]/50 border border-[#8B5CF6]/30 rounded-lg px-4 py-3 text-[#F8FAFC] placeholder-[#64748B] focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 transition-all"
													required
												/>
											</div>

											<div className="space-y-3">
												<Label htmlFor="company" className="text-[#F8FAFC] font-semibold">Company Name</Label>
												<Input
													id="company"
													placeholder="Acme Corporation"
													value={formData.company}
													onChange={(e) => handleChange('company', e.target.value)}
													className="bg-[#0F0A1F]/50 border border-[#8B5CF6]/30 rounded-lg px-4 py-3 text-[#F8FAFC] placeholder-[#64748B] focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 transition-all"
												/>
											</div>
										</div>

										{/* Email & Phone Row */}
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div className="space-y-3">
												<Label htmlFor="email" className="text-[#F8FAFC] font-semibold">Email Address *</Label>
												<Input
													id="email"
													type="email"
													placeholder="john@acme.com"
													value={formData.email}
													onChange={(e) => handleChange('email', e.target.value)}
													className="bg-[#0F0A1F]/50 border border-[#8B5CF6]/30 rounded-lg px-4 py-3 text-[#F8FAFC] placeholder-[#64748B] focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 transition-all"
													required
												/>
											</div>

											<div className="space-y-3">
												<Label htmlFor="phone" className="text-[#F8FAFC] font-semibold">Phone Number</Label>
												<Input
													id="phone"
													type="tel"
													placeholder="+1 (555) 123-4567"
													value={formData.phone}
													onChange={(e) => handleChange('phone', e.target.value)}
													className="bg-[#0F0A1F]/50 border border-[#8B5CF6]/30 rounded-lg px-4 py-3 text-[#F8FAFC] placeholder-[#64748B] focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 transition-all"
												/>
											</div>
										</div>

										{/* System Needs */}
										<div className="space-y-3">
											<Label htmlFor="systemNeeds" className="text-[#F8FAFC] font-semibold">What system do you need? *</Label>
											<Textarea
												id="systemNeeds"
												placeholder="Describe your current challenges and what you're looking to build. The more detail, the better we can help!"
												value={formData.systemNeeds}
												onChange={(e) => handleChange('systemNeeds', e.target.value)}
												rows={5}
												className="bg-[#0F0A1F]/50 border border-[#8B5CF6]/30 rounded-lg px-4 py-3 text-[#F8FAFC] placeholder-[#64748B] focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 transition-all resize-none"
												required
											/>
										</div>

										{/* Timeline section removed */}

										{/* Submit Button */}
										<Button
											type="submit"
											disabled={isSubmitting}
											className="w-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#EC4899] hover:shadow-2xl hover:shadow-[#8B5CF6]/40 hover:scale-[1.01] transition-all duration-300 text-white font-bold text-lg py-6 rounded-lg border-0"
										>
											{isSubmitting ? (
												<span className="flex items-center justify-center gap-2">
													<span className="inline-block animate-spin">⏳</span>
													Sending...
												</span>
											) : (
												<>
													Send Consultation Request
													<PaperPlaneTilt className="ml-2" size={20} weight="bold" />
												</>
											)}
										</Button>

										{/* Disclaimer */}
										<div className="flex items-start gap-3 p-4 bg-[#8B5CF6]/5 border border-[#8B5CF6]/20 rounded-lg">
											<div className="w-1 h-1 bg-[#8B5CF6] rounded-full mt-2 shrink-0" />
											<p className="text-sm text-[#94A3B8] leading-relaxed">
												We typically respond within 24 hours. Your information is kept confidential and secure.
											</p>
										</div>
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
								<Card className="border border-[#8B5CF6]/30 bg-[#1A1033]/80 backdrop-blur-sm">
									<CardHeader>
										<CardTitle className="text-xl text-[#F8FAFC]">Contact Information</CardTitle>
									</CardHeader>
									<CardContent className="space-y-4">
										<a
											href="mailto:hello@newwebsitename.com"
											className="flex items-center gap-3 text-[#CBD5E1] hover:text-[#A78BFA] transition-colors group"
										>
											<div className="w-10 h-10 bg-[#8B5CF6]/20 group-hover:bg-[#8B5CF6] rounded-lg flex items-center justify-center transition-colors">
												<EnvelopeSimple size={20} weight="bold" className="text-[#A78BFA] group-hover:text-white" />
											</div>
											<div>
												<div className="text-xs text-[#64748B]">Email</div>
												<div className="font-medium text-[#F8FAFC]">hello@newwebsitename.com</div>
											</div>
										</a>

										<a
											href="tel:+1234567890"
											className="flex items-center gap-3 text-[#CBD5E1] hover:text-[#A78BFA] transition-colors group"
										>
											<div className="w-10 h-10 bg-[#8B5CF6]/20 group-hover:bg-[#8B5CF6] rounded-lg flex items-center justify-center transition-colors">
												<Phone size={20} weight="bold" className="text-[#A78BFA] group-hover:text-white" />
											</div>
											<div>
												<div className="text-xs text-[#64748B]">Phone</div>
												<div className="font-medium text-[#F8FAFC]">+1 (234) 567-890</div>
											</div>
										</a>

										<div className="flex items-center gap-3 text-[#CBD5E1]">
											<div className="w-10 h-10 bg-[#8B5CF6]/20 rounded-lg flex items-center justify-center">
												<MapPin size={20} weight="bold" className="text-[#A78BFA]" />
											</div>
											<div>
												<div className="text-xs text-[#64748B]">Location</div>
												<div className="font-medium text-[#F8FAFC]">Global Remote Operations</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>

							<motion.div variants={fadeInUp}>
								<Card className="border border-[#EC4899]/30 bg-[#1A1033]/80 backdrop-blur-sm">
									<CardHeader>
										<CardTitle className="text-xl flex items-center gap-2 text-[#F8FAFC]">
											<CheckCircle size={24} weight="bold" className="text-[#EC4899]" />
											What Happens Next?
										</CardTitle>
									</CardHeader>
									<CardContent className="space-y-3 text-sm text-[#CBD5E1]">
										<div className="flex gap-3">
											<div className="w-6 h-6 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
												1
											</div>
											<p>We review your submission and respond within 24 hours</p>
										</div>
										<div className="flex gap-3">
											<div className="w-6 h-6 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
												2
											</div>
											<p>Schedule a 30-minute discovery call to understand your needs</p>
										</div>
										<div className="flex gap-3">
											<div className="w-6 h-6 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
												3
											</div>
											<p>Receive a detailed proposal with timeline and pricing</p>
										</div>
										<div className="flex gap-3">
											<div className="w-6 h-6 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
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

			{/* FAQ section hidden */}
		</div>
	)
}

