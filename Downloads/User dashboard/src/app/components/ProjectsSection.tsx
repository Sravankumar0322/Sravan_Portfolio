import { ArrowRight } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: "Shopify Store Performance Overhaul",
      problem:
        "An underperforming Shopify store with slow mobile speeds and high cart abandonment rates.",
      description:
        "Refactored theme structure using optimized Liquid templates, reduced third-party app bloat, and improved checkout UX for smoother conversions.",
      metrics: [
        { label: "Page Speed", value: "45% faster" },
        { label: "Conversion Rate", value: "+18%" },
        { label: "Cart Abandonment", value: "-22%" }
      ]
    },
    {
      title: "Custom WordPress Membership Platform",
      problem:
        "A growing online community required features beyond standard plugin limitations.",
      description:
        "Developed a lightweight custom plugin, built dynamic member dashboards with ACF, and automated onboarding workflows to reduce admin workload.",
      metrics: [
        { label: "User Engagement", value: "+30%" },
        { label: "Admin Time Saved", value: "10hrs/week" },
        { label: "Member Retention", value: "+19%" }
      ]
    },
    {
      title: "SaaS Landing Page UX Redesign (Figma)",
      problem:
        "Low trial sign-ups due to unclear messaging hierarchy and weak conversion flow.",
      description:
        "Conducted UX audit, redesigned user journey in Figma, created a scalable design system, and delivered high-fidelity responsive prototypes ready for development.",
      metrics: [
        { label: "Sign-up Rate", value: "+27%" },
        { label: "Bounce Rate", value: "-16%" },
        { label: "Time on Page", value: "+21%" }
      ]
    }
  ];

  return (
    <div className="bg-[#f5f5f5] py-[60px] sm:py-[70px] lg:py-[80px]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        
        <div className="mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-[36px] sm:text-[46px] lg:text-[56px] leading-[1.2] tracking-tight font-extrabold text-[#111]">
            Selected Work
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#666] mt-4 max-w-[600px]">
            Real-world projects focused on measurable business impact,
            performance optimization, and user-centered design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
          {/* Render first two projects as normal cards */}
          {projects.slice(0, 2).map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-[24px] p-8 sm:p-9 lg:p-10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-[24px] sm:text-[28px] lg:text-[30px] leading-[1.3] mb-4 font-bold text-[#111]">
                {project.title}
              </h3>
              <div className="text-[14px] sm:text-[15px] mb-3 italic font-medium text-[#ff7a00]">
                Challenge: {project.problem}
              </div>
              <p className="text-[15px] sm:text-[16px] leading-[1.7] mb-8 text-[#666]">
                {project.description}
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {project.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div className="text-[22px] sm:text-[25px] lg:text-[26px] font-extrabold text-[#ff7a00] mb-1">
                      {metric.value}
                    </div>
                    <div className="text-[12px] sm:text-[13px] font-medium text-[#666]">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Render Figma project as a full-width card */}
          <div
            className="col-span-1 lg:col-span-2 bg-white border border-gray-200 rounded-[24px] p-8 sm:p-9 lg:p-10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-[24px] sm:text-[28px] lg:text-[30px] leading-[1.3] mb-4 font-bold text-[#111]">
              {projects[2].title}
            </h3>
            <div className="text-[14px] sm:text-[15px] mb-3 italic font-medium text-[#ff7a00]">
              Challenge: {projects[2].problem}
            </div>
            <p className="text-[15px] sm:text-[16px] leading-[1.7] mb-8 text-[#666]">
              {projects[2].description}
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {projects[2].metrics.map((metric, idx) => (
                <div key={idx}>
                  <div className="text-[22px] sm:text-[25px] lg:text-[26px] font-extrabold text-[#ff7a00] mb-1">
                    {metric.value}
                  </div>
                  <div className="text-[12px] sm:text-[13px] font-medium text-[#666]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}