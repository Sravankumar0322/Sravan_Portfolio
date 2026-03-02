import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div 
          className="text-[150px] sm:text-[200px] lg:text-[280px] opacity-[0.03] tracking-tighter select-none"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
        >
          BUILD
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 py-10 sm:py-16 lg:py-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            <div 
              className="text-[32px] sm:text-[38px] lg:text-[42px] italic text-[#ff7a00] mb-2"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              hello,
            </div>
            
            <div>
              <h1 
                className="text-[48px] sm:text-[56px] lg:text-[72px] leading-[1.1] tracking-tight mb-4"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 800,
                  color: '#111111'
                }}
              >
                Sravan Kumar<br />Kasireddi
              </h1>
              
              <div 
                className="text-[20px] sm:text-[24px] lg:text-[28px] leading-[1.4] mb-6"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  color: '#111111'
                }}
              >
                Web Developer &<br />
                UI/UX Designer
              </div>
              
              <p 
                className="text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.7] max-w-[500px]"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  color: '#666666'
                }}
              >
              I craft responsive, high-converting websites using WordPress, Shopify, and modern frontend technologies — blending performance optimization with thoughtful UI/UX design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-4">
              <a
                href="mailto:sravankumarkasireddi1@gmail.com"
                className="px-8 sm:px-10 py-4 bg-[#ff7a00] text-white rounded-full hover:bg-[#e66d00] transition-all duration-300 shadow-lg hover:shadow-xl text-center flex items-center justify-center"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  textDecoration: 'none'
                }}
              >
                Let's Work Together
              </a>
{/*               
              <a 
                href="#projects"
                className="text-[#111111] hover:text-[#ff7a00] transition-colors duration-300 text-center sm:text-left"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px'
                }}
              >
                View My Work →
              </a> */}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative group order-first lg:order-last">
            <div className="relative rounded-[24px] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/hero-image.jpg"
                alt="Sravan Kumar Kasireddi"
                className="w-full h-[400px] sm:h-[500px] lg:h-[650px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}