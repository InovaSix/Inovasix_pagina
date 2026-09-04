'use client';

import { useEffect } from 'react';
import InovasixHero from '@/components/inovasix/InovasixHero';
import CurrentScenario from '@/components/inovasix/CurrentScenario';
import QuemSomos from '@/components/inovasix/QuemSomos';
import Leadership from '@/components/inovasix/Leadership';
import Clients from '@/components/inovasix/Clients';
import SmartCompanies from '@/components/inovasix/SmartCompanies';
import IAAutomation from '@/components/inovasix/IAAutomation';
import Integrations from '@/components/inovasix/Integrations';
import WhyInovasix from '@/components/inovasix/WhyInovasix';
import RealGuarantees from '@/components/inovasix/RealGuarantees';
import InovaLabsSpotlight from '@/components/inovasix/InovaLabsSpotlight';
import CTAFinal from '@/components/inovasix/CTAFinal';
import InovasixNav from '@/components/inovasix/InovasixNav';
import InovasixFooter from '@/components/inovasix/InovasixFooter';
import WhatsAppFAB from '@/components/inovasix/WhatsAppFAB';

export default function InovasixPage() {
  useEffect(() => {
    // Scroll reveal animation
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#020817] text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
      </div>

      {/* Navigation */}
      <InovasixNav />

      {/* Sections */}
      <main className="relative z-10">
        <InovasixHero />
        <CurrentScenario />
        <QuemSomos />
        <Leadership />
        <Clients />
        <SmartCompanies />
        <WhyInovasix />
        <RealGuarantees />
        <IAAutomation />
        <Integrations />
        <InovaLabsSpotlight />
        <CTAFinal />
      </main>

      {/* Footer */}
      <InovasixFooter />

      {/* WhatsApp Floating Button */}
      <WhatsAppFAB />
    </div>
  );
}
