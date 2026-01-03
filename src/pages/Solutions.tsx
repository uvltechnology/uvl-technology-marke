import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Gear,
  ChartBar,
  Lightning,
  Users,
  Database,
  ShoppingCart,
  Money,
  GraduationCap,
  FirstAid,
  Calendar,
  Package,
  ArrowRight,
  CheckCircle
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

export default function Solutions() {
  const solutionCategories = [
    {
      icon: Users,
      title: 'Human Resources (HRIS)',
      tagline: 'Complete employee lifecycle management',
      benefits: [
        'Employee onboarding and offboarding',
        'Leave and attendance tracking',
        'Performance management',
        'Payroll integration',
        'Benefits administration'
      ],
      useCases: 'Perfect for companies scaling from 10 to 1,000+ employees'
    },
    {
      icon: Gear,
      title: 'Enterprise Resource Planning (ERP)',
      tagline: 'Unified business operations platform',
      benefits: [
        'Financial management and accounting',
        'Procurement and supply chain',
        'Manufacturing and production',
        'Project management',
        'Multi-location support'
      ],
      useCases: 'Ideal for manufacturing, distribution, and multi-department organizations'
    },
    {
      icon: ShoppingCart,
      title: 'Customer Relationship Management (CRM)',
      tagline: 'Build stronger customer relationships',
      benefits: [
        'Contact and lead management',
        'Sales pipeline tracking',
        'Email campaign automation',
        'Customer service ticketing',
        'Analytics and forecasting'
      ],
      useCases: 'Essential for sales teams, agencies, and customer-focused businesses'
    },
    {
      icon: GraduationCap,
      title: 'School Management Systems',
      tagline: 'Streamline academic operations',
      benefits: [
        'Student enrollment and records',
        'Grade and transcript management',
        'Class scheduling',
        'Parent-teacher communication',
        'Fee collection and accounting'
      ],
      useCases: 'Built for K-12 schools, universities, and training centers'
    },
    {
      icon: Calendar,
      title: 'Booking & Reservation Systems',
      tagline: 'Automate appointments and bookings',
      benefits: [
        'Online appointment scheduling',
        'Resource allocation',
        'Payment processing',
        'Automated reminders',
        'Calendar synchronization'
      ],
      useCases: 'Great for clinics, salons, hotels, and service providers'
    },
    {
      icon: Money,
      title: 'Point of Sale (POS)',
      tagline: 'Modern retail and restaurant solutions',
      benefits: [
        'Fast transaction processing',
        'Inventory management',
        'Customer loyalty programs',
        'Sales reporting and analytics',
        'Multi-location support'
      ],
      useCases: 'Perfect for retail stores, restaurants, and hospitality businesses'
    },
    {
      icon: Package,
      title: 'Inventory & Warehouse Management',
      tagline: 'Complete stock visibility and control',
      benefits: [
        'Real-time inventory tracking',
        'Barcode/QR code scanning',
        'Stock alerts and reordering',
        'Warehouse location mapping',
        'Multi-warehouse support'
      ],
      useCases: 'Essential for warehouses, distributors, and logistics companies'
    },
    {
      icon: ChartBar,
      title: 'Analytics & Business Intelligence',
      tagline: 'Transform data into decisions',
      benefits: [
        'Custom dashboards',
        'Real-time KPI monitoring',
        'Predictive analytics',
        'Automated reporting',
        'Data visualization'
      ],
      useCases: 'Critical for data-driven organizations and executive teams'
    },
    {
      icon: Lightning,
      title: 'Workflow Automation & Integration',
      tagline: 'Connect your systems seamlessly',
      benefits: [
        'Process automation',
        'Third-party integrations',
        'API development',
        'Document automation',
        'Notification systems'
      ],
      useCases: 'Valuable for any business with repetitive manual tasks'
    },
    {
      icon: Database,
      title: 'Custom Internal Tools',
      tagline: 'Built exactly for your unique needs',
      benefits: [
        'Bespoke functionality',
        'Legacy system modernization',
        'Department-specific tools',
        'Data migration',
        'Custom reporting'
      ],
      useCases: 'When off-the-shelf software just won\'t cut it'
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
            <span className="text-electric-purple font-semibold text-sm">Complete Solutions Portfolio</span>
          </div>
          
          <h1 className="text-soft-white mb-6">
            Every System Your<br />
            <span className="text-gradient">Business Needs</span>
          </h1>
          
          <p className="text-xl text-soft-white/80 mb-10 max-w-3xl mx-auto">
            From HR to analytics, inventory to CRM—we build custom systems tailored to your exact requirements. No templates, no compromises.
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {solutionCategories.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full card-hover border-border/50 hover:border-galactic-violet/50">
                    <CardHeader>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 bg-galaxy-gradient rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                          <Icon size={28} weight="bold" className="text-soft-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{solution.title}</CardTitle>
                          <CardDescription className="text-base text-galactic-violet font-semibold">
                            {solution.tagline}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <h4 className="font-heading font-bold text-deep-space mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle size={18} weight="fill" className="text-galactic-violet mt-0.5 shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground italic">
                          <strong className="text-deep-space">Best for:</strong> {solution.useCases}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-deep-space mb-6">Don't See What You Need?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              We specialize in building custom solutions for unique business challenges. If you have a specific need, we'll design and develop it from scratch.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-galaxy-gradient hover:shadow-xl hover:shadow-galactic-violet/50 hover:scale-105 transition-all text-lg px-10 py-6">
                Discuss Your Custom Solution
                <ArrowRight className="ml-2" size={20} weight="bold" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-deep-space text-soft-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-soft-white mb-4">
              Our Development Approach
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-soft-white/80 max-w-2xl mx-auto">
              Every solution is built with the same commitment to quality
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <div className="text-center">
                <div className="w-16 h-16 bg-galaxy-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} weight="bold" className="text-soft-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Scalable Architecture</h3>
                <p className="text-soft-white/70">Built to grow from 10 to 10,000 users without performance issues</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="text-center">
                <div className="w-16 h-16 bg-galaxy-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} weight="bold" className="text-soft-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Security First</h3>
                <p className="text-soft-white/70">Enterprise-grade encryption, access control, and compliance standards</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="text-center">
                <div className="w-16 h-16 bg-galaxy-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} weight="bold" className="text-soft-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Beautiful UX</h3>
                <p className="text-soft-white/70">Intuitive interfaces your team will actually enjoy using</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
