import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import CompanyLogo from '../components/CompanyLogo';
import PurposeSection from '../components/PurposeSection';
import FeaturesSection from '../components/FeaturesSection';
import ServiceSection from '../components/ServiceSection';
import ContactForm from '../components/Contact';

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const timer = setTimeout(() => {
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
          });

          
          navigate(location.pathname, { replace: true });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  return (
    <main className="relative">
      <Hero />
      <CompanyLogo />
      <PurposeSection />
      <FeaturesSection />
      <ServiceSection />
      <section id="contacto" className="scroll-mt-20">
        <ContactForm />
      </section>
    </main>
  );
}
