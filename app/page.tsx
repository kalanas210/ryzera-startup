import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import PartnersSection from '@/components/home/PartnersSection';
import ClientsSection from '@/components/home/ClientsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import WhySpecialSection from '@/components/home/WhySpecialSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ServicesSection />
      <WhySpecialSection />
      <ClientsSection />
      <PartnersSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}