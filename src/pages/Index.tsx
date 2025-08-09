import { Helmet } from 'react-helmet-async';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import WorkGrid from '@/components/portfolio/WorkGrid';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Portfolio | Video Editing & Graphics</title>
        <meta name="description" content="Creative portfolio featuring video editing and graphics work. Explore long/short form edits and design galleries." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <WorkGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
