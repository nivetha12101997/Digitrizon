

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useState, useRef } from "react";
import AboutSectionPage from "./new";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: {
    default: 'Digital Product Development Company | About DIGITRIZON',
    template: '%s | Digital Product Development Company',
  },
  description: 'Partner with DIGITRIZON, a digital product development company delivering scalable solutions designed to accelerate modern business growth.',
};


/* ------------------ PAGE ------------------ */
export default function AboutPage() {
  return (
    <main className="bg-black text-white font-sans overflow-hidden">
      {/* <MouseGlow />
      <Hero />

      <SplitParallax
        title="Where Digital Thinking Meets Real Business Intent"
        content={[
          "DIGITRIZON was built with a simple belief, strong businesses deserve digital experiences that feel current, intuitive, and purposeful.",
          "In a world where everything is becoming more digital, many brands still struggle to find the right team to turn ideas into something real, usable, and ready to grow. That gap is what led to DIGITRIZON.",
          "The brand was created to bring together creative thinking, modern technology, and business direction in a way that feels practical, collaborative, and future-focused.",
          "It is not just about launching digital products.",
          "It is about creating with intention.",
        ]}
        image="https://images.unsplash.com/photo-1551434678-e076c223a692"
      />

      <BrandStorySection
        title="More Than a Brand Name"
        content={[
          "DIGITRIZON reflects a vision of helping businesses grow in a world shaped by digital change.",
          "The name represents a space where ideas evolve into digital possibilities, where businesses can create, adapt, and move ahead with greater confidence.",
          "At its core, DIGITRIZON is about progress.",
          "Not rushed progress.",
          "Not trend-driven progress.",
          "But meaningful growth built on the right digital foundation.",
        ]}
      /> */}

{/* <GlassEnvelopeSection
  title="Building Things That Actually Matter"
  content={[
    "Some digital products are built just to exist.",
    "DIGITRIZON believes they should do more than that.",
    "They should create value for businesses, meaningful experiences for users, and real momentum for growth.",
    "That is why the focus always stays on creating things that feel intentional, products, platforms, and digital experiences that are not just visually modern, but useful, relevant, and worth investing in.",
    "Because when digital is done right, it does more than support a business.",
    "It helps shape where that business can go next.",
  ]}
/> */}

      {/* <TimelineSection
        title="For Businesses Ready to Think Bigger"
        content={[
          "DIGITRIZON is being built for a new generation of businesses, brands that want to move faster, look sharper, and grow through stronger digital experiences.",
          "The long-term vision is to become a trusted digital partner for businesses that want to build with more intention and less guesswork.",
          "This is only the beginning.",
          "And the goal is clear, to help more businesses step into the digital future with confidence.",
        ]}
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
      />

      <CTA /> */}
      <AboutSectionPage />
    </main>
  );
}