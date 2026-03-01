import { Code2, ShoppingCart, Zap, Workflow, PenTool, Layout } from "lucide-react";

export function TechStackSection() {
  const techs = [
    { name: "WordPress", color: "#21759b" },
    { name: "Shopify", color: "#95bf46" },
    { name: "WooCommerce", color: "#96588a" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "Framer", color: "#0055ff" },
    { name: "Figma UI/UX", color: "#f24e1e" }
  ];

  return (
    <div className="bg-white py-[60px] sm:py-[70px] lg:py-[80px]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="relative flex items-center justify-center min-h-[500px]">

          {/* Background glow */}
          <div
            className="absolute w-[600px] h-[600px] rounded-full opacity-10"
            style={{
              background: `radial-gradient(circle, #ff7a00 0%, transparent 70%)`
            }}
          />

          <div className="relative w-full max-w-[1000px] h-[500px]">

            {techs.map((tech, index) => {
              const positions = [
                { top: "8%", left: "10%" },
                { top: "12%", right: "10%" },
                { bottom: "22%", left: "8%" },
                { bottom: "18%", right: "12%" },
                { top: "35%", left: "2%" },
                { top: "35%", right: "2%" }
              ];

              return (
                <div
                  key={index}
                  className="absolute bg-white rounded-[20px] p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hidden sm:flex flex-col items-center"
                  style={{
                    ...positions[index],
                    animation: `float${index} 6s ease-in-out infinite`,
                    animationDelay: `${index * 0.4}s`
                  }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white text-[22px] font-bold"
                      style={{ backgroundColor: tech.color }}
                    >
                      {tech.name[0]}
                    </div>
                    <div className="text-[15px] font-semibold text-[#111]">
                      {tech.name}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Center card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111111] text-white rounded-[24px] p-10 shadow-2xl z-10">
              <div className="text-[48px] font-extrabold text-center">
                <span className="text-[#ff7a00]">10+</span>
                <div className="text-[18px] mt-2 opacity-80 font-medium">
                  Technologies Mastered
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float0 {
            0%,100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
          @keyframes float1 {
            0%,100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-25px) rotate(-2deg); }
          }
          @keyframes float2 {
            0%,100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-18px) rotate(3deg); }
          }
          @keyframes float3 {
            0%,100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-22px) rotate(-3deg); }
          }
          @keyframes float4 {
            0%,100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-16px) rotate(2deg); }
          }
          @keyframes float5 {
            0%,100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-24px) rotate(-2deg); }
          }
        `}</style>

      </div>
    </div>
  );
}