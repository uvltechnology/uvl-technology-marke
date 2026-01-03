import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  TrendUp,
  Clock,
  Money,
  CheckCircle,
  ArrowRight,
  FirstAid,
  Package,
  GraduationCap,
  Storefront,
  Truck,
  Buildings
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
    transition: { staggerChildren: 0.1 }
  }
}

export default function CaseStudies() {
  const caseStudies = [
    {
      icon: FirstAid,
      industry: 'Healthcare',
      client: 'Regional Healthcare Network',
      clientType: '3 clinics, 45 staff members',
      challenge: 'The healthcare network was managing patient records using a combination of paper files and disconnected spreadsheets. This led to frequent data entry errors, long patient wait times, and compliance concerns. Staff spent hours each week manually consolidating reports.',
      solution: 'We developed a custom Electronic Health Records (EHR) system with integrated appointment scheduling, automated patient check-in via tablets, real-time staff coordination, and HIPAA-compliant data encryption. The system included a patient portal for appointment booking and medical history access.',
      results: [
        { metric: '70%', description: 'Reduction in manual administrative tasks' },
        { metric: '50%', description: 'Decrease in average patient wait times' },
        { metric: '98%', description: 'Data accuracy improvement' },
        { metric: '12 hrs/week', description: 'Staff time saved per clinic' }
      ],
      timeline: '8 weeks',
      technologies: 'React, Node.js, PostgreSQL, AWS',
      testimonial: 'UVL transformed how we operate. Our staff can now focus on patient care instead of paperwork.'
    },
    {
      icon: Package,
      industry: 'Manufacturing',
      client: 'Multi-Site Manufacturing Company',
      clientType: '5 warehouses, 200+ SKUs',
      challenge: 'With inventory spread across five warehouses, the company had zero real-time visibility into stock levels. This resulted in frequent stockouts, overstock situations, and emergency rush orders that cost thousands in expedited shipping. Monthly reconciliation took days.',
      solution: 'We built an integrated inventory management platform with barcode scanning, automated reorder triggers based on historical sales data, multi-warehouse visibility dashboard, predictive analytics for demand forecasting, and mobile apps for warehouse staff.',
      results: [
        { metric: '98%', description: 'Stock accuracy across all locations' },
        { metric: '$200K', description: 'Annual cost savings from optimized ordering' },
        { metric: '85%', description: 'Reduction in stockout incidents' },
        { metric: '3 days to 2 hours', description: 'Monthly reconciliation time improved' }
      ],
      timeline: '10 weeks',
      technologies: 'React Native, Python, MongoDB, Azure',
      testimonial: 'We finally have complete control over our inventory. The ROI paid for itself in the first quarter.'
    },
    {
      icon: GraduationCap,
      industry: 'Education',
      client: 'University Admissions Office',
      clientType: '5,000+ applications annually',
      challenge: 'The university was juggling three separate systems for applications, enrollment, and fee payments. Data had to be manually transferred between systems, leading to errors and delays. The admissions team spent weeks processing applications that should have taken days.',
      solution: 'We created a unified student lifecycle management system that integrated application review workflows, automated document verification, online enrollment with e-signatures, integrated payment processing, and an applicant portal for status tracking.',
      results: [
        { metric: '2 weeks to 2 days', description: 'Application processing time reduced' },
        { metric: '90%', description: 'Decrease in data entry errors' },
        { metric: '60%', description: 'Reduction in support inquiries' },
        { metric: '100%', description: 'Digital document processing (zero paper)' }
      ],
      timeline: '12 weeks',
      technologies: 'React, Express, MySQL, DocuSign API',
      testimonial: 'This system has revolutionized our enrollment process. We can now handle double the applications with the same team.'
    },
    {
      icon: Storefront,
      industry: 'Retail',
      client: 'Multi-Channel Retail Chain',
      clientType: '8 physical stores + e-commerce',
      challenge: 'The retail chain operated with separate systems for online and in-store sales, creating inventory nightmares. Online orders frequently showed items as available that were actually sold out in stores. Customer data was siloed, preventing effective marketing.',
      solution: 'We developed a unified commerce platform with real-time inventory synchronization across all channels, integrated POS systems for all stores, customer loyalty program with purchase history, omnichannel analytics dashboard, and buy-online-pickup-in-store functionality.',
      results: [
        { metric: '45%', description: 'Increase in customer retention' },
        { metric: '99.5%', description: 'Inventory accuracy across channels' },
        { metric: '30%', description: 'Growth in online sales' },
        { metric: '$150K', description: 'Annual savings from reduced inventory errors' }
      ],
      timeline: '14 weeks',
      technologies: 'React, Node.js, Redis, Stripe, Shopify API',
      testimonial: 'Our customers now have a seamless experience whether they shop online or in-store. Sales have skyrocketed.'
    },
    {
      icon: Truck,
      industry: 'Logistics',
      client: 'Regional Distribution Company',
      clientType: '50+ delivery routes daily',
      challenge: 'Delivery routes were planned manually each morning, often resulting in inefficient routing and late deliveries. Customers had no visibility into delivery status, generating dozens of daily phone calls. Driver performance was difficult to track.',
      solution: 'We built a comprehensive logistics platform with AI-powered route optimization, real-time GPS tracking and delivery updates, customer notification system with ETA, driver mobile app with turn-by-turn navigation, and performance analytics dashboard.',
      results: [
        { metric: '35%', description: 'Reduction in fuel costs' },
        { metric: '92%', description: 'On-time delivery rate improvement' },
        { metric: '80%', description: 'Decrease in "where\'s my order" calls' },
        { metric: '25 routes/day', description: 'Increased daily route capacity' }
      ],
      timeline: '11 weeks',
      technologies: 'React Native, Python, Google Maps API, PostgreSQL',
      testimonial: 'Route planning used to take 2 hours every morning. Now it takes 5 minutes and results in better routes.'
    },
    {
      icon: Buildings,
      industry: 'Property Management',
      client: 'Commercial Property Portfolio',
      clientType: '120 units across 8 properties',
      challenge: 'Managing maintenance requests, tenant communications, rent collection, and occupancy tracking across multiple properties was chaotic. Maintenance issues often went unresolved for weeks due to poor tracking.',
      solution: 'We created an integrated property management system with tenant portal for maintenance requests and rent payments, automated work order routing to contractors, financial tracking and reporting, occupancy and lease management, and mobile app for property managers.',
      results: [
        { metric: '48 hours', description: 'Average maintenance response time (from 2 weeks)' },
        { metric: '95%', description: 'On-time rent collection rate' },
        { metric: '40%', description: 'Increase in tenant satisfaction scores' },
        { metric: '15 hrs/week', description: 'Admin time saved' }
      ],
      timeline: '9 weeks',
      technologies: 'React, Firebase, Stripe, Twilio',
      testimonial: 'This platform gave us back control of our properties. Tenant satisfaction has never been higher.'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 bg-deep-space text-soft-white overflow-hidden">
        <div className="absolute inset-0 bg-galaxy-radial" />
        <div className="absolute inset-0 pattern-grid opacity-30" />
        
        {/* Animated glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-galactic-violet/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-electric-purple/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Star particles effect */}
        <StarField count={60} />
        
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center"
        >
          <div className="inline-block mb-6 px-6 py-2 bg-galactic-violet/20 border border-galactic-violet/50 rounded-full">
            <span className="text-electric-purple font-semibold text-sm">Proven Results</span>
          </div>
          
          <h1 className="text-soft-white mb-6">
            Real Businesses,<br />
            <span className="text-gradient">Real Results</span>
          </h1>
          
          <p className="text-xl text-soft-white/80 mb-10 max-w-3xl mx-auto">
            See how we've helped organizations across industries transform their operations with custom systems.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {caseStudies.map((study, index) => {
              const Icon = study.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="overflow-hidden border-2 border-border/50 hover:border-galactic-violet/30 transition-all">
                    <div className="bg-linear-to-r from-galactic-violet/5 to-electric-purple/5 border-b border-border p-8">
                      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                        <div className="w-16 h-16 bg-galaxy-gradient rounded-2xl flex items-center justify-center shrink-0 shadow-xl">
                          <Icon size={32} weight="bold" className="text-soft-white" />
                        </div>
                        <div className="flex-1">
                          <div className="inline-block px-3 py-1 bg-galactic-violet/10 border border-galactic-violet/30 rounded-full mb-3">
                            <span className="text-galactic-violet font-semibold text-sm">{study.industry}</span>
                          </div>
                          <h2 className="text-3xl font-heading font-bold text-deep-space mb-2">
                            {study.client}
                          </h2>
                          <p className="text-muted-foreground">{study.clientType}</p>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <div className="space-y-8">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-1 bg-destructive/50 rounded-full" />
                            <h3 className="text-xl font-heading font-bold text-deep-space">The Challenge</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-1 bg-galactic-violet rounded-full" />
                            <h3 className="text-xl font-heading font-bold text-deep-space">Our Solution</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-1 bg-electric-purple rounded-full" />
                            <h3 className="text-xl font-heading font-bold text-deep-space">The Results</h3>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="bg-linear-to-br from-galactic-violet/10 to-electric-purple/10 p-4 rounded-xl border border-galactic-violet/20">
                                <div className="text-3xl font-heading font-bold text-galactic-violet mb-2">
                                  {result.metric}
                                </div>
                                <p className="text-sm text-muted-foreground">{result.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Clock size={18} weight="bold" className="text-galactic-violet" />
                              <span><strong className="text-deep-space">Timeline:</strong> {study.timeline}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle size={18} weight="bold" className="text-galactic-violet" />
                              <span><strong className="text-deep-space">Tech:</strong> {study.technologies}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-muted p-6 rounded-xl border-l-4 border-galactic-violet">
                          <p className="text-deep-space italic">"{study.testimonial}"</p>
                          <p className="text-sm text-muted-foreground mt-2">— {study.client}</p>
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-soft-white/90 mb-10 max-w-2xl mx-auto">
            Join the growing list of businesses transforming their operations with UVL Technology.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-soft-white text-deep-space hover:bg-soft-white/90 hover:scale-105 transition-all text-lg px-10 py-6 shadow-2xl">
              Start Your Transformation
              <ArrowRight className="ml-2" size={20} weight="bold" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
