import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { ArrowRight, Check } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <Section className="py-32">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 p-12 md:p-24 text-center group">
        {/* Animated background noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">
            Ready To Fill Your Pipeline?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Book a 15-minute strategy call. We'll audit your current outbound process and show you exactly how we'd generate 20-30 meetings per month for your business.
            <br className="block my-4"/>
            <span className="text-white font-medium">No pitch. No pressure. Just a clear plan.</span>
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <a 
              href="https://calendly.com/ferdi-qualifyai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto"
            >
              <Button variant="primary" className="h-16 px-10 text-xl shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_50px_rgba(0,212,255,0.5)] w-full sm:w-auto" icon={<ArrowRight />}>
                Book Your Free Strategy Call
              </Button>
            </a>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <div className="bg-green-500/20 rounded-full p-0.5"><Check size={12} className="text-green-400" /></div>
                15 minutes
              </span>
              <span className="flex items-center gap-2">
                <div className="bg-green-500/20 rounded-full p-0.5"><Check size={12} className="text-green-400" /></div>
                No obligation
              </span>
              <span className="flex items-center gap-2">
                <div className="bg-green-500/20 rounded-full p-0.5"><Check size={12} className="text-green-400" /></div>
                Clear action plan
              </span>
            </div>

            <a href="mailto:ferdi@qualifyai.io" className="text-gray-500 hover:text-accent transition-colors text-sm border-b border-transparent hover:border-accent/50 pb-0.5">
              Or email me directly: ferdi@qualifyai.io
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTA;