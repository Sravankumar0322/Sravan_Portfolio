import { PenTool, Code, Search, Gauge } from 'lucide-react';

export function DifferentiationSection() {
  const highlights = [
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Design + Development",
      description:
        "I design in Figma and build the final product — ensuring consistency between idea and implementation."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean & Maintainable Code",
      description:
        "Structured, readable code that’s easy to update, scale, and hand over to teams."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO-Focused Builds",
      description:
        "Websites optimized for search visibility, performance, and real traffic growth."
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Performance First",
      description:
        "Fast-loading, responsive websites that improve user experience and conversions."
    }
  ];

  return (
    <div className="bg-[#f8f9fa] py-[60px] sm:py-[70px] lg:py-[80px]">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-10">

        <div className="text-center mb-12">
          <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#111]">
            What Makes Me Different
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#666] mt-4 max-w-[600px] mx-auto">
            I combine UI/UX thinking with clean development practices
            to build websites that are fast, functional, and conversion-focused.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[18px] p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-[#ff7a00] mb-3">
                {item.icon}
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-2">
                {item.title}
              </h3>

              <p className="text-[14px] leading-[1.6] text-[#666]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}