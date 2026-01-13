import { Link } from 'react-router-dom'
import { EnvelopeSimple, Phone, MapPin, LinkedinLogo, TwitterLogo, GithubLogo } from '@phosphor-icons/react'
import logo from '@/assets/logica1.jpg'

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Projects', path: '/projects' },
      { name: 'Contact', path: '/contact' },
    ],
    solutions: [
      { name: 'Customized Systems', path: '/solutions' },
      { name: 'Templated Systems', path: '/solutions' },
      { name: 'API & Integration Services', path: '/solutions' },
      { name: 'Maintenance & Support', path: '/solutions' },
    ],
    industries: [
      { name: 'Real Estate & Rentals', path: '/industries' },
      { name: 'Tool Rental & Equipment', path: '/industries' },
      { name: 'Retail & E-commerce Marketplaces', path: '/industries' },
    ],
  }

  return (
    <footer id="galaxy-footer" className="bg-[#050309] text-[#F8FAFC] border-t border-[#7C3AED]/20 relative overflow-hidden">
      {/* Cosmic glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#9333EA]/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-[#A855F7]/3 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Logica" className="w-11 h-11 rounded-xl object-cover shadow-[0_0_12px_rgba(124,58,237,0.15)]" />
              <span className="text-[#F8FAFC] font-heading font-bold text-xl tracking-wide">
                Logica
              </span>
            </div>
            <p className="text-[#94A3B8] mb-6 max-w-sm leading-relaxed">
              Skip all the stress. Automate the rest. Your universal partner for business systems and digital transformation.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:sales@logicatechnology.com" className="flex items-center gap-3 text-[#94A3B8] hover:text-[#A855F7] transition-colors duration-200">
                <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center">
                  <EnvelopeSimple size={16} weight="bold" className="text-[#7C3AED]" />
                </div>
                sales@logicatechnology.com
              </a>
              <a href="tel:+63959877321" className="flex items-center gap-3 text-[#94A3B8] hover:text-[#A855F7] transition-colors duration-200">
                <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center">
                  <Phone size={16} weight="bold" className="text-[#7C3AED]" />
                </div>
                (+63) 9959877321
              </a>
              <span className="flex items-center gap-3 text-[#94A3B8]">
                <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center">
                  <MapPin size={16} weight="bold" className="text-[#7C3AED]" />
                </div>
                442 Silangan East Purok 3 Munting Mapino Naic, Cavite
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
                    className="text-[#94A3B8] hover:text-[#A855F7] transition-colors duration-200 text-sm"
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
                    className="text-[#94A3B8] hover:text-[#A855F7] transition-colors duration-200 text-sm"
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
                    className="text-[#94A3B8] hover:text-[#A855F7] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#7C3AED]/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#64748B] text-sm">
            © {new Date().getFullYear()} Logica. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center text-[#64748B] hover:text-[#A855F7] hover:bg-[#7C3AED]/20 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={20} weight="fill" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center text-[#64748B] hover:text-[#A855F7] hover:bg-[#7C3AED]/20 transition-all duration-200"
              aria-label="Twitter"
            >
              <TwitterLogo size={20} weight="fill" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center text-[#64748B] hover:text-[#A855F7] hover:bg-[#7C3AED]/20 transition-all duration-200"
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
