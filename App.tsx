import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Comparison from './components/Comparison';
import ROI from './components/ROI';
import Pricing from './components/Pricing';
import About from './components/About';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary text-white overflow-hidden selection:bg-accent selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Comparison />
        <ROI />
        <Pricing />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;