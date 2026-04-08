'use client';
import Image from 'next/image';
const MobileApp = () => {
    return (
        <section className="relative bg-[#050505] py-24 px-6 overflow-hidden">
            {/* Decorative Glow Orb */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,107,0,0.08)_0%,_transparent_70%)] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-4">
                        Mobile App
                        <span className="text-[#FF6B00] pl-4">Development</span>
                    </h1>
                    <p className="text-gray-400 text-base max-w-2xl mx-auto">
                        Crafting intuitive and engaging mobile applications tailored to your business needs.
                    </p>
                </div>
                {/* Content Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {[
                        {
                            title: "iOS & Android Development",
                            description: "Build high-performance apps for both iOS and Android platforms."
                        },
                        {
                            title: "Cross-Platform Solutions",
                            description: "Leverage frameworks like React Native and Flutter for efficient development."
                        },
                        {
                            title: "UI/UX Design",

                            description: "Create visually stunning and user-friendly interfaces for your mobile apps."
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

export default MobileApp;