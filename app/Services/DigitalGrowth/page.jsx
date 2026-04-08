'use client';
import Image from 'next/image';

const DigitalGrowth = () => {
  return (
    <section className="relative bg-[#050505] py-24 px-6 overflow-hidden">
      {/* Decorative Glow Orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,107,0,0.08)_0%,_transparent_70%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-4">
                    Digital Growth
                    <span className="text-[#FF6B00] pl-4">Services</span>
                </h1>
                <p className="text-gray-400 text-base max-w-2xl mx-auto">
                    Accelerate your online presence with our tailored digital growth strategies.
                </p>
            </div>
            {/* Content Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                    {
                        title: "Search Engine Optimization",
                        description: "Improve your website's visibility in search engine results."
                    },
                    {
                        title: "Social Media Marketing",
                        description: "Engage with your audience and build brand awareness."
                    },
                    {
                        title: "Content Marketing",
                        description: "Create valuable content that attracts and retains customers."
                    }
                ].map((service, index) => (
                    <div key={index} className="bg-[#111111] p-6 rounded-lg border border-[#333333] hover:border-[#FF6B00] transition-colors duration-300">
                        <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
}

export default DigitalGrowth;