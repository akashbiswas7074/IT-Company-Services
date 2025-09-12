import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Counters from '@/components/Counters';
import Portfolio from '@/components/Portfolio';
import Communicate from '@/components/Communicate';
import Testimonials from '@/components/Testimonials';
import Clients from '@/components/Clients';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Counters />
      <Portfolio />
      <Communicate />
      <Testimonials />
      <Clients />
      <Team />
      <Contact />
      <FAQ />
      <Footer />
      <BackToTop />
    </main>
  );
}