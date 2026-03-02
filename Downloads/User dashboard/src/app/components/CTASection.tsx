import { Mail, FileText } from 'lucide-react';

export function CTASection() {
  return (
    <div 
      className="py-[80px] sm:py-[90px] lg:py-[100px] relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)'
      }}
    >
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #ff7a00 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
        <div className="text-center max-w-[900px] mx-auto">
          <h2 
            className="text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.2] tracking-tight mb-4 sm:mb-5 lg:mb-6 text-white"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800
            }}
          >
            Let's Build Something<br />
            <span className="text-[#ff7a00]">That Scales</span>
          </h2>
          
          <p 
            className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.6] mb-10 sm:mb-11 lg:mb-12 text-gray-300"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400
            }}
          >
            Ready to work with a developer who understands both code and business? Let's create something powerful together.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5 lg:gap-6">
            <a
              href="mailto:sravan@example.com"
              className="flex items-center justify-center gap-3 px-10 sm:px-11 lg:px-12 py-4 sm:py-4.5 lg:py-5 bg-[#ff7a00] text-white rounded-full hover:bg-[#e66d00] transition-all duration-300 shadow-2xl hover:shadow-[#ff7a00]/50 hover:scale-105"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '17px',
                textDecoration: 'none'
              }}
            >
              <Mail className="w-5 h-5" />
              Work With Me
            </a>
            
            <button 
              className="flex items-center justify-center gap-3 px-10 sm:px-11 lg:px-12 py-4 sm:py-4.5 lg:py-5 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-[#111111] transition-all duration-300"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '17px'
              }}
            >
              <FileText className="w-5 h-5" />
              View Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}