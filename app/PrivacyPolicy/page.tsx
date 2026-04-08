'use client';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import { describe } from 'node:test';
const PrivacyPolicy = () => {

    const legalData = [
        {
            id: "01", title: 'Information We Collect',

            content_1: {
                describe: 'We may collect personal and non-personal information in various ways, including when you:',
                bulletPoints: [
                    'Visit our website',
                    'Fill out contact forms',
                    'Subscribe to newsletters',
                    'Engage with our services'
                ]
            },
            content_2: {
                describe: 'Personal Information may include:',
                bulletPoints: [
                    'Name',
                    'Email address',
                    'Phone number',
                    'Business details'
                ]
            },
            content_3: {
                describe: 'Our website may use cookies and similar technologies to:',
                bulletPoints: [
                    'Improve user experience',
                    'Analyze website traffic',
                    'Remember user preferences'
                ]
            },

        },
        {
            id: "02", title: 'How We Use Your Information',

            content_1: {
                describe: 'We use the collected information to:',
                bulletPoints: [
                    'Provide, operate, and improve our services',
                    'Respond to inquiries and communicate with you',
                    'Send updates, promotions, or relevant information',
                    'Enhance website performance and user experience',
                    'Ensure security and prevent fraud',
                    'Sharing of Information'

                ]
            },
            content_2: {
                describe: 'DIGITRIZON does not sell, trade, or rent your personal information. We may share information with:',
                bulletPoints: [
                    'Trusted third-party service providers assisting in operations',
                    'Legal authorities if required by law',
                    'Business partners, only when necessary for service delivery',
                    'Cookies and Tracking Technologies'
                ]
            },
            content_3: {
                describe: 'Non-Personal Information may include:',
                bulletPoints: [
                    'Browser type',
                    'IP address',
                    'Device information',
                    'Pages visited and time spent',
                    'How We Use Your Information'
                ]
            },
            content_4: {
                describe: 'You can choose to disable cookies through your browser settings.'
            }
        },
        {
            id: "03", title: 'Data Security',

            content_1: {
                describe: 'We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',

            },
        },
        {
            id: "04", title: 'Third-Party Links',

            content_1: {
                describe: 'Our website may contain links to third-party websites. DIGITRIZON is not responsible for the privacy practices or content of those external sites.',

            },

        },
        {
            id: "05", title: 'Your Rights',

            content_1: {
                describe: 'Depending on your location, you may have the right to:',
                bulletPoints: [
                    'Access your personal data',
                    'Request corrections or updates',
                    'Request deletion of your data',
                    'Withdraw consent at any time'
                ]
            },
            content_2: {
                describe: 'To exercise these rights, please contact us using the details below.'
            }

        },
        {
            id: "06", title: 'Children’s Privacy',
            content_1: {
                describe: 'DIGITRIZON does not knowingly collect personal information from children under the age of 18. If such information is identified, we will take steps to remove it promptly.',
            },
        },
        {
            id: "07", title: 'Changes to This Privacy Policy',
            content_1: {
                describe: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.',
            },
        },
                {
            id: "08", title: 'Contact Us',
            content_1: {
                describe: 'If you have any questions or concerns about this Privacy Policy, you can contact us at:',
                contact:[
                    'DIGITRIZON',
                    'Email: contact@digitrizon.com',
                    'Website: https://www.digitrizon.com',
                ]
            },
        },

    ];

    return (
        <div className="min-h-screen text-white bg-[#0a0a0a]"
         style={{
           background: `linear-gradient(135deg, #2b1300 0%, #0a0a0a 50%, #000000 100%)`,
           backgroundAttachment: 'fixed'
         }}>
            <Navbar />

            <div className="max-w-3xl mx-auto px-8 py-16">
                     <h1 className="text-7xl font-bold mt-10 mb-12 text-[#FF6B00]">
            Privacy Policy
        </h1>
        <div className="space-y-6 mb-12">
                <div>Effective Date: [Insert Date]</div>

                <div>DIGITRIZON (“we,” “our,” or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.

                    By accessing or using our website, you agree to the terms of this Privacy Policy.</div>

        </div>

        <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl transition-all hover:border-[#FF6B00]/30 hover:bg-white/10">
                {legalData.map((item) => (
                    <div key={item.id}
className="pl-4 pr-4"   >
    <br />
                        <h2 className="text-2xl font-semibold mb-4 text-[#FF6B00]">{item.title}</h2>   
                        <p className="mb-4 text-white/70">{item.content_1.describe}</p>
                        {item.content_1.bulletPoints && (
                            <ul className="list-disc list-inside mb-4">
                                {item.content_1.bulletPoints.map((point, index) => (
                                    <li key={index} className="text-white/70">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {item.content_2 && (
                            <><p className="mb-4 text-white/70">{item.content_2.describe}</p>
                                {item.content_2.bulletPoints && (
                                    <ul className="list-disc list-inside mb-4">
                                        {item.content_2.bulletPoints.map((point, index) => (
                                            <li key={index} className="text-white/70">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        )}
                        {item.content_3 && (
                            <><p className="mb-4 text-white/70">{item.content_3.describe}</p>

                                {item.content_3.bulletPoints && (
                                    <ul className="list-disc list-inside mb-4">
                                        {item.content_3.bulletPoints.map((point, index) => (
                                            <li key={index} className="text-white/70">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        )}
                        {item.content_4 && (
                            <p className="mb-4 text-white/70">{item.content_4.describe}</p>
                        )}
                        {item.content_1.contact && (
                            <ul className="list-disc list-inside mb-4">
                                {item.content_1.contact.map((contact, index) => (
                                    <li key={index} className="text-white/70 list-none">
                                        {contact}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
</div>
{/* <br />
<br/> */}
                {/* Thank you for trusting DIGITRIZON with your information. We are committed to protecting your privacy and providing a secure experience on our website. */}
            </div>
            <Footer />
        </div>
    );
}
export default PrivacyPolicy;