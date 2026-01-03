import { Link } from 'react-router-dom'
import { EnvelopeSimple, Phone, MapPin, LinkedinLogo, TwitterLogo, GithubLogo } from '@phosphor-icons/react'

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Contact', path: '/contact' },
    ],
    solutions: [
      { name: 'Custom Systems', path: '/solutions' },
      { name: 'Automation', path: '/solutions' },
      { name: 'Analytics', path: '/solutions' },
      { name: 'Integrations', path: '/solutions' },
    ],
    industries: [
      { name: 'SMEs & Startups', path: '/industries' },
      { name: 'Education', path: '/industries' },
      { name: 'Healthcare', path: '/industries' },
      { name: 'Logistics', path: '/industries' },
    ],
  }

  return (
    <footer className="bg-deep-space text-soft-white border-t border-galactic-violet/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-galaxy-gradient rounded-lg flex items-center justify-center">
                <span className="text-soft-white font-bold text-xl">U</span>
              </div>
              <span className="text-soft-white font-heading font-bold text-xl">
                UVL Technology
              </span>
            </div>
            <p className="text-soft-white/70 mb-6 max-w-sm">
              Skip all the stress. Automate the rest. Your universal partner for business systems and digital transformation.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:hello@uvltechnology.com" className="flex items-center gap-2 text-soft-white/70 hover:text-electric-purple transition-colors">
                <EnvelopeSimple size={18} weight="bold" />
                hello@uvltechnology.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-soft-white/70 hover:text-electric-purple transition-colors">
                <Phone size={18} weight="bold" />
                +1 (234) 567-890
              </a>
              <span className="flex items-center gap-2 text-soft-white/70">
                <MapPin size={18} weight="bold" />
                Global Remote Operations
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-soft-white/70 hover:text-electric-purple transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-soft-white/70 hover:text-electric-purple transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-soft-white/70 hover:text-electric-purple transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-soft-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-soft-white/50 text-sm">
            © {new Date().getFullYear()} UVL Technology. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft-white/50 hover:text-electric-purple transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={24} weight="fill" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft-white/50 hover:text-electric-purple transition-colors"
              aria-label="Twitter"
            >
              <TwitterLogo size={24} weight="fill" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft-white/50 hover:text-electric-purple transition-colors"
              aria-label="GitHub"
            >
              <GithubLogo size={24} weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
