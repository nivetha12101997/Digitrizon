
import { Metadata } from 'next';
import Image from 'next/image';
import ServicesSection from './components/ServicesSection';
import HeroSection from './components/HeroSection';
import SolutionSection from './components/Solution';
import CaseStudiesSection from './components/CaseStudiesSection';
import PricingSection from './components/PricingSection';
import FormSection from './components/FormSection';
import ContactSection from './components/ContactSection';
import WhatMakeUsDifferentSection from './components/WhatMakeUsDifferentSection';
import ProcessSection from './components/Process';
import WhyChooseSection from './components/WhyChooseSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'DIGITRIZON - Mobile Apps, Web Apps & Digital Marketing',
  description: 'Transform your vision into digital reality with DIGITRIZON. We build cutting-edge mobile apps, web applications, and digital marketing strategies that drive business growth.',
  keywords: 'mobile app development, web app development, digital marketing, app development company, web development',
  authors: [{ name: 'DIGITRIZON' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'DIGITRIZON - Mobile Apps, Web Apps & Digital Marketing',
    description: 'Transform your vision into digital reality with DIGITRIZON.',
  },
};





export default function Home() {
  return (
    <main className="main-container">
      {/* Hero Section */}
      <section className="hero-section">
        <HeroSection />
      </section>

      {/* Features Section */}
      <section className="features-section">
        <ServicesSection />
      </section>

      {/* Solutions Section */}
      {/* <section className="solutions-section">
        <SolutionSection />
      </section> */}

      {/* What Makes Us Different Section */}
      <section className="differentiators-section"><WhatMakeUsDifferentSection /></section>

      {/* Process Section */}
      <section className="process-section">
        <ProcessSection />
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section"><WhyChooseSection /></section>
      {/* Case Studies Section */}
      {/* <section className="case-studies-section"><CaseStudiesSection /></section> */}

      {/* {CTA Section} */}
      <section className="cta-section"><CTASection /></section>
           {/* <section className="contact-section"><ContactSection /></section> */}

      {/* FAQ Section */}
      <section className="faq-section"><FAQSection /></section>
      





      


      {/* Form Section */}
      <section className="form-section"><FormSection /></section>

      <Footer/>

    </main >
  );
}
