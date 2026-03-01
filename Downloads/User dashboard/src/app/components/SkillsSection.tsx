import { Search, Workflow, Code2, ShoppingCart, Zap, Monitor } from 'lucide-react';

export function SkillsSection() {
  const skills = [
    {
      icon: <Search className="w-10 h-10" />,
      title: "SEO / SEM",
      description:
        "Data-driven search optimization strategies focused on increasing visibility, traffic, and measurable ROI.",
      outcomes: [
        "Technical SEO audits",
        "On-page & schema optimization",
        "Google Ads & conversion tracking"
      ]
    },
    {
      icon: <Workflow className="w-10 h-10" />,
      title: "Figma & UI/UX",
      description:
        "High-converting interface systems with user-centered design, responsive layouts, and interaction-focused prototyping.",
      outcomes: [
        "Wireframing & prototyping",
        "Design systems creation",
        "User flow optimization"
      ]
    },
    {
      icon: <Code2 className="w-10 h-10" />,
      title: "WordPress",
      description:
        "Custom theme development, plugin integration, and scalable WordPress builds optimized for speed and performance.",
      outcomes: [
        "Custom theme architecture",
        "WooCommerce development",
        "Performance optimization"
      ]
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "Shopify",
      description:
        "Conversion-focused Shopify stores with custom Liquid sections and seamless third-party integrations.",
      outcomes: [
        "Custom Liquid development",
        "Optimized checkout flows",
        "App integrations"
      ]
    },
    {
      icon: <Monitor className="w-10 h-10" />,
      title: "Framer",
      description:
        "Modern, high-performance landing pages built with interactive animations and responsive UI experiences.",
      outcomes: [
        "High-converting landing pages",
        "Advanced animations",
        "Responsive layout systems"
      ]
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "React JS",
      description:
        "Component-based frontend architecture focused on scalability, clean state management, and API-driven systems.",
      outcomes: [
        "Reusable component systems",
        "REST API integrations",
        "Performance optimization"
      ]
    }
  ];

  return (
    <div className="bg-[#f5f5f5] py-[60px] sm:py-[70px] lg:py-[80px]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2
            className="text-[36px] sm:text-[46px] lg:text-[56px] leading-[1.2] tracking-tight mb-4 sm:mb-6 font-extrabold text-[#111]"
          >
            Systems That Convert & Scale
          </h2>
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.6] max-w-[700px] mx-auto text-[#666]">
            Performance-first engineering mindset focused on building
            scalable digital systems that drive measurable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-8 sm:p-9 lg:p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-[#ff7a00]/20"
            >
              <div className="text-[#ff7a00] mb-6">
                {skill.icon}
              </div>

              <h3 className="text-[24px] sm:text-[26px] lg:text-[28px] mb-4 font-bold text-[#111]">
                {skill.title}
              </h3>

              <p className="text-[15px] sm:text-[15.5px] lg:text-[16px] leading-[1.7] mb-6 text-[#666]">
                {skill.description}
              </p>

              <ul className="space-y-2">
                {skill.outcomes.map((outcome, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-[14px] sm:text-[14.5px] lg:text-[15px] font-medium text-[#111]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a00] mr-3"></span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}