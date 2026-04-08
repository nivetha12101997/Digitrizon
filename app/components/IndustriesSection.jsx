"use client";
import Image from 'next/image';

const industries = [
  { name: 'Agriculture & AgriTech', url: '/images/agriculture_d.png' },
  { name: 'Automotive & Mobility', url: '/images/automotive_d.png' },
  { name: 'Education & EdTech', url: '/images/education_d.png' },
  { name: 'Energy & Utilities', url: '/images/energy_d.png' },
  { name: 'Fintech & Banking', url: '/images/bank_d.png' },
  { name: 'FoodTech & Delivery', url: '/images/food_d.png' },
  { name: 'Healthcare & Wellness', url: '/images/healthcare_d.png' },
  { name: 'Hospitality & Travel', url: '/images/tourism_d.png' },
  { name: 'Logistics & Supply Chain', url: '/images/logistics_d.png' },
  { name: 'Manufacturing & Industrial', url: '/images/manufacturing_d.png' },
  { name: 'Media & Entertainment', url: '/images/media_d.png' },
  { name: 'Real Estate & PropTech', url: '/images/real-estate_d.png' },
  { name: 'Retail & E-commerce', url: '/images/retail_d.png' },
  { name: 'Startups & Scaleups', url: '/images/startup_d.png' },
  { name: 'Telecom & Networking', url: '/images/telecom_d.png' },
];

const IndustriesSection = () => {
  return (
    /* Background with a subtle radial gradient for depth */
    <section className="relative bg-[#050505] py-24 px-6 overflow-hidden">
      
      {/* Updated Decorative Glow Orb: Changed 70% to 50% to ensure it doesn't hit the bottom edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,107,0,0.08)_0%,_transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-4">
            Industries 
             <span className="text-[#FF6B00] pl-4">We Serve</span> 
          </h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Building scalable digital solutions for businesses across diverse industries.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group relative p-2 transition-all duration-500
                         /* Glassmorphism Classes */
                         bg-white/[0.03] backdrop-blur-md 
                         border border-white/[0.08] rounded-2xl
                         /* Hover Effects */
                         hover:bg-white/[0.07] hover:border-[#FF6B00]/50 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(255,107,0,0.15)]
                         /* Flex Layout */
                         flex flex-row lg:flex-col items-center lg:justify-center gap-4 lg:gap-3"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                <Image 
                  src={industry.url}
                  alt={industry.name}
                  width={20} 
                  height={20}
                  className="w-10 h-10 lg:w-14 lg:h-14 object-contain brightness-125 grayscale group-hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-start lg:items-center">
                <h3 className="text-gray-300 text-sm md:text-base font-medium group-hover:text-white transition-colors duration-300 leading-tight">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;