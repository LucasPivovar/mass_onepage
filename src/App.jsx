import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WorkingProcess from './components/WorkingProcess'
import Features from './components/Features'
import Templates from './components/Templates'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import QuemSomos from './components/QuemSomos'
import PoliticaPrivacidade from './components/PoliticaPrivacidade'
import TermosUso from './components/TermosUso'
import Status from './components/Status'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal();

  const path = window.location.pathname;
  const isQuemSomos = path === '/quem-somos';
  const isPolitica = path === '/politica-de-privacidade';
  const isTermos = path === '/termos-de-uso';
  const isStatus = path === '/status';

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
    if (isStatus) {
      return <Status />;
    }
    return (
      <>
        <Hero />
        <WorkingProcess />
        <Features />
        <Templates />
        <WhyChooseUs />
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
      <div className="custom-cursor">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 3v13.6a1 1 0 0 0 1.62.78l3.85-3.12a1 1 0 0 1 .63-.22h6.1a1 1 0 0 0 .78-1.62L6.12 3.22A1 1 0 0 0 4.5 3Z" fill="#000000" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
        </svg>
      </div>
    </>
  )
}

export default App

