import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WorkingProcess from './components/WorkingProcess'
import Features from './components/Features'
import Templates from './components/Templates'
import WhyChooseUs from './components/WhyChooseUs'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import QuemSomos from './components/QuemSomos'
import PoliticaPrivacidade from './components/PoliticaPrivacidade'
import TermosUso from './components/TermosUso'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal();

  const path = window.location.pathname;
  const isQuemSomos = path === '/quem-somos';
  const isPolitica = path === '/politica-de-privacidade';
  const isTermos = path === '/termos-de-uso';

  const renderContent = () => {
    if (isQuemSomos) {
      return <QuemSomos />;
    }
    if (isPolitica) {
      return <PoliticaPrivacidade />;
    }
    if (isTermos) {
      return <TermosUso />;
    }
    return (
      <>
        <Hero />
        <WorkingProcess />
        <Features />
        <Templates />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <FAQ />
      </>
    );
  };

  return (
    <>
      <Header />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </>
  )
}

export default App

