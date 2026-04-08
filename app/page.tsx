
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
import ServiceShowcase from './components/ServiceShowcase';
import ServicesShowcase from './components/ServicesShowcase';
import IndustriesSection from './components/IndustriesSection';
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
  icons:{
icon: '/favicon.ico', 
// icon:[
//   { url: '/images/Digitrizon_Favi.png', sizes: '512x512', type: 'image/png' },
// ],
    shortcut: '/images/Digitrizon_Favi.png'  }
};





export default function Home() {
  return (
    <main className="main-container">
      {/* Hero Section */}
      <section className="hero-section">
        <HeroSection />
      </section>


        <ServicesShowcase />

      {/* What Makes Us Different Section */}
      {/* <section className="differentiators-section"> */}
        <WhatMakeUsDifferentSection />
        {/* </section> */}

      {/* Process Section */}
      {/* <section className="process-section"> */}
        <ProcessSection />
      {/* </section> */}

      {/* <section> */}
        <IndustriesSection />
      {/* </section> */}
      {/* Why Choose Section */}
      <section className="why-choose-section"><WhyChooseSection /></section>

      {/* {CTA Section} */}
      <section className="cta-section"><CTASection /></section>

      {/* FAQ Section */}
      <section className="faq-section"><FAQSection /></section>
      





      


      {/* Form Section */}
      <section className="form-section"><FormSection /></section>

      <Footer/>

    </main >
  );
}
