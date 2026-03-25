import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary opacity-5 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 mb-12 border-b border-slate-800">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              Genz<span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Tech</span>
            </h3>
            <p className="text-slate-400 mb-6">
              Transforming ideas into exceptional software solutions for the modern world.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-slate-700/50 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Custom Software',
                'Web Applications',
                'Automation',
                'AI Solutions',
                'Consulting',
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Portfolio',
                'Blog',
                'Careers',
                'Contact',
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@genztech.com" className="flex items-center gap-3 text-slate-400 hover:text-accent transition-colors group">
                  <Mail className="w-5 h-5 text-secondary group-hover:text-accent transition-colors" />
                  <span className="text-sm">hello@genztech.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+18005551234" className="flex items-center gap-3 text-slate-400 hover:text-accent transition-colors group">
                  <Phone className="w-5 h-5 text-secondary group-hover:text-accent transition-colors" />
                  <span className="text-sm">+1 (800) 555-1234</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm">123 Tech Avenue, San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 text-sm">
          <p>© 2024 GenzTech. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
