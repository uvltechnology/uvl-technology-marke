import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  ShieldCheck,
  Handshake,
  Users,
  ArrowRight,
  CheckCircle,
  Rocket
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
    { number: '100+', label: 'Systems Delivered' },
    { number: '50+', label: 'Happy Clients' },
    { number: '15+', label: 'Industries Served' },
    { number: '99%', label: 'Client Satisfaction' }
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
            <span className="text-electric-purple font-semibold text-sm">About UVL Technology</span>
          </div>
          
          <h1 className="text-soft-white mb-6">
            Building the Systems<br />
            <span className="text-gradient">That Power Growth</span>
          </h1>
          
          <p className="text-xl text-soft-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            We're a team of engineers, designers, and problem-solvers dedicated to one mission: making your business run smoother through custom technology.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <Target size={32} weight="bold" className="text-galactic-violet" />
                <h2 className="text-deep-space">Our Story</h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  UVL Technology was born from a simple observation: too many businesses are held back by outdated systems, expensive software that doesn't quite fit, or manual processes that waste countless hours.
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
                  <Card className="text-center p-8 border-2 border-galactic-violet/20 bg-gradient-to-br from-galactic-violet/5 to-electric-purple/5">
                    <div className="text-5xl font-heading font-bold text-galactic-violet mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
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
                <Target size={32} weight="bold" className="text-galactic-violet" />
                <h2 className="text-deep-space">Our Mission</h2>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
                To empower every organization with custom technology solutions that eliminate operational friction, automate repetitive tasks, and unlock new growth opportunities—making powerful systems accessible regardless of size or budget.
              </motion.p>
            </div>

            <div>
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <Eye size={32} weight="bold" className="text-electric-purple" />
                <h2 className="text-deep-space">Our Vision</h2>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
                To become the universal solution provider for any organization needing systems for operations, HR, inventory, finance, CRM, analytics, workflow automation, dashboards, or fully custom platforms—a trusted partner for digital transformation across all industries.
              </motion.p>
            </div>
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
              Our Core Values
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                  <Card className="h-full text-center card-hover border-border/50 hover:border-galactic-violet/50">
                    <CardHeader>
                      <div className="w-16 h-16 bg-galaxy-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Icon size={32} weight="bold" className="text-soft-white" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-deep-space text-soft-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-soft-white mb-4">
              What Makes Us Different
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-soft-white/80 max-w-2xl mx-auto">
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
                <div className="flex items-start gap-3 bg-soft-white/5 p-6 rounded-xl border border-soft-white/10">
                  <CheckCircle size={24} weight="fill" className="text-electric-purple flex-shrink-0 mt-1" />
                  <p className="text-soft-white/90">{principle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-galaxy-gradient text-soft-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center"
        >
          <Rocket size={64} weight="bold" className="text-soft-white mx-auto mb-6" />
          <h2 className="text-soft-white mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-soft-white/90 mb-10 max-w-2xl mx-auto">
            Whether you need a complete business system or a simple automation tool, we're ready to help you transform your operations.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-soft-white text-deep-space hover:bg-soft-white/90 hover:scale-105 transition-all text-lg px-10 py-6 shadow-2xl">
              Start the Conversation
              <ArrowRight className="ml-2" size={20} weight="bold" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
