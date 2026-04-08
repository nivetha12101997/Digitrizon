'use client';
import React from 'react';
const Blogs = () => {
    return (
        <section className="relative bg-[#050505] py-24 px-6 overflow-hidden">
            {/* Decorative Glow Orb */}
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-r from-[#FF6B00] to-[#FF0000] rounded-full opacity-30 blur-3xl animate-pulse"></div>
            <div className="relative max-w-7xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">Insights & Blogs</h1>
                <p className="text-lg text-white/70 mb-12">Stay updated with the latest trends, insights, and stories from our team.</p>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Sample Blog Post */}
                    <div className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg">
                        <img src="/images/futureApp.jpg" alt="Blog Post 1" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-white mb-4">The Future of Mobile App Development</h2>
                            <p className="text-white/70 mb-4">Discover the latest trends and technologies shaping the future of mobile app development.</p>
                            <a href="#" className="text-[#FF6B00] hover:text-[#FF0000] transition-colors font-medium">Read More</a>
                        </div>
                    </div>
                    {/* Sample Blog Post */}
                    <div className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg">
                        <img src="/images/Saas.jpg" alt="Blog Post 2" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-white mb-4">How to Choose the Right SaaS Product</h2>
                            <p className="text-white/70 mb-4">A comprehensive guide to help you select the best SaaS product for your business needs.</p>
                            <a href="#" className="text-[#FF6B00] hover:text-[#FF0000] transition-colors font-medium">Read More</a>
                        </div>
                    </div>
                    {/* Sample Blog Post */}
                    <div className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg">
                        <img src="/images/website.jpg" alt="Blog Post 3" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-white mb-4">Web App Development Best Practices</h2>
                            <p className="text-white/70 mb-4">Learn about the best practices for developing high-quality web applications that stand out.</p>
                            <a href="#" className="text-[#FF6B00] hover:text-[#FF0000] transition-colors font-medium">Read More</a>
                        </div>
                    </div>
                </div>

            </div>

                {/* Decorative Glow Orb */}
                <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-r from-[#FF6B00] to-[#FF0000] rounded-full opacity-30 blur-3xl animate-pulse">

                </div>

                </section>
    );
}

export default Blogs;






