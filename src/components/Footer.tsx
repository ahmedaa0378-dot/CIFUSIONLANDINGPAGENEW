import { Link } from 'react-router-dom';

const footerLinks = {
  Product: [
    { name: 'Platform', path: '/platform' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Request a Demo', path: '/demo' },
  ],
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '#' },
    { name: 'Blog', path: '#' },
  ],
  Resources: [
    { name: 'Help Center', path: '#' },
    { name: 'Case Studies', path: '#' },
    { name: 'Webinars', path: '#' },
],
  Legal: [
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms of Service', path: '#' },
    { name: 'Security', path: '#' },
    { name: 'GDPR', path: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="CIFusion" className="w-8 h-8 object-contain" />
              <span className="font-heading text-lg font-extrabold gradient-text">CIFusion.ai</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mb-6">
              AI-powered continuous improvement platform that turns frontline ideas into measurable business impact.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 text-sm rounded-lg border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30"
              />
              <button className="btn-primary !py-2.5 !px-4 !text-xs whitespace-nowrap">Subscribe</button>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} CIFusion.ai by Allegiant InfoTech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['LinkedIn', 'Twitter', 'YouTube'].map((social) => (
              <a key={social} href="#" className="text-xs text-gray-400 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
