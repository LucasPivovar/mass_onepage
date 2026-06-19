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
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal();

  const isQuemSomos = window.location.pathname === '/quem-somos';

  return (
    <>
      <Header />
      <main>
        {isQuemSomos ? (
          <QuemSomos />
        ) : (
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
        )}
      </main>
      <Footer />
    </>
  )
}

export default App

