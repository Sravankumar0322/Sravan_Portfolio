import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const navLinks = [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center text-center sm:text-left">
          {/* Left - Name & Title */}
          <div>
            <div 
              className="text-[22px] sm:text-[23px] lg:text-[24px] mb-2"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#111111'
              }}
            >
              Sravan Kumar Kasireddi
            </div>
            <div 
              className="text-[13px] sm:text-[13.5px] lg:text-[14px]"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#666666'
              }}
            >
              Web Developer & Systems Builder
            </div>
          </div>

          {/* Center - Navigation */}
          <nav className="flex flex-wrap justify-center gap-5 sm:gap-6 lg:gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-[14px] sm:text-[14.5px] lg:text-[15px] hover:text-[#ff7a00] transition-colors duration-300"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  color: '#111111'
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right - Social Icons */}
          <div className="flex justify-center sm:justify-end gap-3 sm:gap-3.5 lg:gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#ff7a00] text-[#111111] hover:text-white flex items-center justify-center transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-11 lg:mt-12 pt-6 sm:pt-7 lg:pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <div 
              className="text-[12.5px] sm:text-[12.75px] lg:text-[13px]"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#666666'
              }}
            >
              © 2026 Sravan Kumar Kasireddi. All rights reserved.
            </div>
            <div 
              className="text-[12.5px] sm:text-[12.75px] lg:text-[13px]"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#666666'
              }}
            >
              Built with precision and purpose.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}