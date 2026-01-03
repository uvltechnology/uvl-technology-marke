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
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
      icon: Rocket,
      name: 'SMEs & Startups',
      description: 'Scale fast with systems built for growth',
      painPoints: [
        'Manual processes consuming valuable time',
        'Spreadsheet chaos and version control issues',
        'Lack of real-time visibility into operations',
        'Limited budget for expensive enterprise software'
      ],
      solutions: [
        'Lightweight, affordable custom tools',
        'Automated workflows that save hours daily',
        'Scalable architecture that grows with you',
        'Quick deployment (weeks, not months)'
      ],
      exampleModules: [
        'Customer pipeline tracking',
        'Internal project management',
        'Simple inventory systems',
        'Team collaboration tools'
      ]
    },
    {
      icon: GraduationCap,
      name: 'Schools & Universities',
      description: 'Student management and academic platforms',
      painPoints: [
        'Disconnected systems for admissions, enrollment, and grading',
        'Manual data entry and paper-based processes',
        'Poor communication between parents, teachers, and admin',
        'Difficulty tracking student progress and outcomes'
      ],
      solutions: [
        'Unified student lifecycle management',
        'Automated enrollment and registration',
        'Parent portals and communication tools',
        'Grade tracking and transcript generation'
      ],
      exampleModules: [
        'Student information system',
        'Learning management integration',
        'Fee collection and accounting',
        'Attendance and behavior tracking'
      ]
    },
    {
      icon: FirstAid,
      name: 'Healthcare & Clinics',
      description: 'HIPAA-compliant patient management systems',
      painPoints: [
        'Paper-based patient records prone to errors',
        'Long wait times and scheduling conflicts',
        'Compliance and security concerns',
        'Inefficient billing and insurance processing'
      ],
      solutions: [
        'Electronic health records (EHR)',
        'Online appointment booking',
        'HIPAA-compliant data encryption',
        'Automated billing and claims'
      ],
      exampleModules: [
        'Patient registration and records',
        'Appointment scheduling',
        'Prescription management',
        'Lab results and imaging'
      ]
    },
    {
      icon: Truck,
      name: 'Logistics & Warehousing',
      description: 'Supply chain and inventory optimization',
      painPoints: [
        'No visibility into stock levels across locations',
        'Manual order fulfillment causing delays',
        'Difficulty tracking shipments and deliveries',
        'Inventory discrepancies and shrinkage'
      ],
      solutions: [
        'Real-time inventory tracking',
        'Barcode/RFID scanning systems',
        'Route optimization and delivery tracking',
        'Automated reordering and alerts'
      ],
      exampleModules: [
        'Multi-warehouse management',
        'Order fulfillment system',
        'Fleet and driver tracking',
        'Supplier and procurement tools'
      ]
    },
    {
      icon: Bank,
      name: 'Government & NGOs',
      description: 'Secure, transparent operational tools',
      painPoints: [
        'Legacy systems that are outdated and slow',
        'Lack of transparency and audit trails',
        'Security and compliance requirements',
        'Budget constraints and procurement complexity'
      ],
      solutions: [
        'Modern, user-friendly interfaces',
        'Complete audit logging and reporting',
        'Role-based access control',
        'Cost-effective custom development'
      ],
      exampleModules: [
        'Citizen service portals',
        'Grant and fund management',
        'Document management systems',
        'Project tracking and reporting'
      ]
    },
    {
      icon: Storefront,
      name: 'Retail & E-commerce',
      description: 'Point of sale and customer management',
      painPoints: [
        'Disconnected online and offline sales',
        'Manual inventory updates leading to stock-outs',
        'Limited customer data and insights',
        'Inefficient checkout and payment processing'
      ],
      solutions: [
        'Unified commerce platform',
        'Real-time inventory synchronization',
        'Customer relationship management',
        'Integrated payment processing'
      ],
      exampleModules: [
        'Point of sale (POS) system',
        'E-commerce integration',
        'Loyalty and rewards programs',
        'Sales analytics and forecasting'
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 bg-deep-space text-soft-white overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="absolute inset-0 bg-galaxy-radial opacity-30" />
        
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center"
        >
          <div className="inline-block mb-6 px-6 py-2 bg-galactic-violet/20 border border-galactic-violet/50 rounded-full">
            <span className="text-electric-purple font-semibold text-sm">Industry Expertise</span>
          </div>
          
          <h1 className="text-soft-white mb-6">
            Trusted Across<br />
            <span className="text-gradient">Diverse Industries</span>
          </h1>
          
          <p className="text-xl text-soft-white/80 mb-10 max-w-3xl mx-auto">
            We understand the unique challenges each industry faces and build solutions that address your specific needs.
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
            className="space-y-16"
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="overflow-hidden border-2 border-border/50 hover:border-galactic-violet/50 transition-all">
                    <div className="bg-linear-to-r from-galactic-violet/10 to-electric-purple/10 p-8 border-b border-border">
                      <div className="flex items-center gap-6">
                        <div className="w-20 h-20 bg-galaxy-gradient rounded-2xl flex items-center justify-center shrink-0 shadow-xl">
                          <Icon size={40} weight="bold" className="text-soft-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-heading font-bold text-deep-space mb-2">
                            {industry.name}
                          </h2>
                          <p className="text-lg text-muted-foreground">{industry.description}</p>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Warning size={24} weight="fill" className="text-destructive" />
                            <h3 className="text-xl font-heading font-bold text-deep-space">
                              Common Pain Points
                            </h3>
                          </div>
                          <ul className="space-y-2">
                            {industry.painPoints.map((pain, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-destructive mt-1">•</span>
                                <span>{pain}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Lightbulb size={24} weight="fill" className="text-galactic-violet" />
                            <h3 className="text-xl font-heading font-bold text-deep-space">
                              How UVL Helps
                            </h3>
                          </div>
                          <ul className="space-y-2">
                            {industry.solutions.map((solution, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle size={18} weight="fill" className="text-galactic-violet mt-0.5 shrink-0" />
                                <span>{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <CheckCircle size={24} weight="fill" className="text-electric-purple" />
                            <h3 className="text-xl font-heading font-bold text-deep-space">
                              Example Modules
                            </h3>
                          </div>
                          <ul className="space-y-2">
                            {industry.exampleModules.map((module, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <span className="text-electric-purple font-bold mt-0.5">→</span>
                                <span className="text-deep-space font-medium">{module}</span>
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
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-soft-white/90 mb-10 max-w-2xl mx-auto">
            We've worked with businesses across countless sectors. Whatever your industry, we can build the perfect system for your needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-soft-white text-deep-space hover:bg-soft-white/90 hover:scale-105 transition-all text-lg px-10 py-6 shadow-2xl">
              Let's Discuss Your Industry
              <ArrowRight className="ml-2" size={20} weight="bold" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
