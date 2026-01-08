import { Link } from 'react-router-dom'
import { EnvelopeSimple, Phone, MapPin, LinkedinLogo, TwitterLogo, GithubLogo } from '@phosphor-icons/react'

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Projects', path: '/projects' },
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
    <footer id="galaxy-footer" className="bg-[#030108] text-[#F8FAFC] border-t border-[#8B5CF6]/20 relative overflow-hidden">
      {/* Cosmic glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#EC4899]/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-[#22D3EE]/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-galaxy-gradient flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-[#F8FAFC] font-heading font-bold text-xl tracking-wide">
                NEW_WEBSITE_NAME
              </span>
            </div>
            <p className="text-[#94A3B8] mb-6 max-w-sm leading-relaxed">
              Skip all the stress. Automate the rest. Your universal partner for business systems and digital transformation.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:hello@newwebsitename.com" className="flex items-center gap-3 text-[#94A3B8] hover:text-[#A78BFA] transition-colors duration-200">
                <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center">
                  <EnvelopeSimple size={16} weight="bold" className="text-[#8B5CF6]" />
                </div>
                hello@newwebsitename.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-[#94A3B8] hover:text-[#A78BFA] transition-colors duration-200">
                <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center">
                  <Phone size={16} weight="bold" className="text-[#8B5CF6]" />
                </div>
                +1 (234) 567-890
              </a>
              <span className="flex items-center gap-3 text-[#94A3B8]">
                <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center">
                  <MapPin size={16} weight="bold" className="text-[#8B5CF6]" />
                </div>
                Global Remote Operations
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-5 text-[#F8FAFC] text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#94A3B8] hover:text-[#A78BFA] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-5 text-[#F8FAFC] text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#94A3B8] hover:text-[#A78BFA] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-5 text-[#F8FAFC] text-sm uppercase tracking-wider">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#94A3B8] hover:text-[#A78BFA] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#8B5CF6]/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#64748B] text-sm">
            © {new Date().getFullYear()} NEW_WEBSITE_NAME. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center text-[#64748B] hover:text-[#A78BFA] hover:bg-[#8B5CF6]/20 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={20} weight="fill" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center text-[#64748B] hover:text-[#A78BFA] hover:bg-[#8B5CF6]/20 transition-all duration-200"
              aria-label="Twitter"
            >
              <TwitterLogo size={20} weight="fill" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center text-[#64748B] hover:text-[#A78BFA] hover:bg-[#8B5CF6]/20 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubLogo size={20} weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
