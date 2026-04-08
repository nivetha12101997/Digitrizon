'use client';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';

const TermsOfServiceDark = () => {
  const legalData = [
    { id: "01", title: 'Acceptance of Terms', content: 'By using this website or engaging with DIGITRIZON’s services, you confirm that you have read, understood, and agreed to these Terms. If you do not agree, you must not use our services.' },
    { id: "02", title: 'Services', content: 'DIGITRIZON provides digital solutions including, but not limited to, web and mobile application development, SaaS product development, and digital growth services. The scope, timeline, and deliverables will be defined separately in project agreements.' },
    { id: "03", title: 'User Responsibilities', content: 'You agree to: Provide accurate and complete information, use the website and services only for lawful purposes, and not attempt to disrupt or compromise the security of our systems.' },
    { id: "04", title: 'Intellectual Property', content: 'All content, designs, code, and materials provided by DIGITRIZON are the intellectual property of DIGITRIZON unless otherwise stated. Unauthorized use, reproduction, or distribution is strictly prohibited.' },
    { id: "05", title: 'Payments and Billing', content: 'All payments must be made as per agreed terms in project contracts or proposals. Failure to complete payments may result in suspension or termination of services.' },
    { id: "06", title: 'Confidentiality', content: 'Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of the engagement.' },
    { id: "07", title: 'Limitation of Liability', content: 'DIGITRIZON shall not be held liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services.' },
    { id: "08", title: 'Service Modifications', content: 'We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.' },
    { id: "09", title: 'Termination', content: 'We reserve the right to terminate access to our services if there is a violation of these Terms or misuse of our platform.' },
    { id: "10", title: 'Third-Party Services', content: 'Our services may include integrations or links to third-party tools or platforms. DIGITRIZON is not responsible for the policies or practices of these external services.' },
    { id: "11", title: 'Governing Law', content: 'These Terms shall be governed and interpreted in accordance with the laws of India.' },
    { id: "12", title: 'Changes to Terms', content: 'We may update these Terms of Service at any time. Continued use of our services after changes indicates your acceptance of the updated Terms.' },
    { id: "13", title: 'Disclaimer', content: 'All services and content are provided “as is” without warranties of any kind, either express or implied. DIGITRIZON does not guarantee uninterrupted or error-free service and disclaims all liability to the fullest extent permitted by law.', isDisclaimer: true },
    { id: "14", title: 'Contact Information', content: 'For any questions regarding these Terms, please contact us at:',
         Email: 'contact@digitrizon.com',
         Company: 'DIGITRIZON' },
  ];

  return (
    /* PARENT CONTAINER WITH STRONG GRADIENT */
    <div className="min-h-screen text-white bg-[#0a0a0a]"
         style={{
           background: `linear-gradient(135deg, #2b1300 0%, #0a0a0a 50%, #000000 100%)`,
           backgroundAttachment: 'fixed'
         }}>
      
      <Navbar />

      <div className="max-w-3xl mx-auto px-8 py-16">
        <h1 className="text-7xl font-bold mt-10 mb-12 text-[#FF6B00]">
          Terms of Service
        </h1>
                <div className="space-y-6 mb-12">
                <div>Effective Date: [Insert Date]</div>

<div>Welcome to DIGITRIZON. By accessing or using our website, products, or services, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.</div>
        </div>

        <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl transition-all hover:border-[#FF6B00]/30 hover:bg-white/10">
          {legalData.map((item) => (
            /* GLASSY BOX EFFECT */
            <div 
              key={item.id} 
              className="pl-4 pr-4"
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#FF6B00]/90">
                 {item.title}
              </h2>
              <p className="text-white/70 leading-relaxed font-light">
                {item.content}

                <br/>
                <br />
                {item.Email && (
                  <span className="text-white/70 font-bold">Email : {item.Email}</span>
                )}
                <br />
                {item.Company && (
                  <span className="text-white/70 font-bold">Company : {item.Company}</span>    
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfServiceDark;