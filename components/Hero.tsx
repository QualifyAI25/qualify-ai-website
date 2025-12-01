import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-blob mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-highlight/20 rounded-full blur-[128px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[64px] z-10 opacity-80"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-[1]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] z-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6"
        >
          Stop Hiring SDRs. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-highlight animate-gradient-x">
            Start Booking Meetings.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed"
        >
          We're an AI-powered sales intelligence platform that books 20-30 meetings/month while automating your entire SDR function.
          <br className="hidden md:block my-2" />
          <span className="text-gray-300">
            No more empty pipelines. No more hiring headaches.
            <br className="hidden md:block" />
            Just consistent, qualified meetings with your ideal customers.
          </span>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-6 w-full justify-center"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <a 
              href="https://calendly.com/ferdi-qualifyai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto"
            >
              <Button variant="primary" icon={<ArrowRight size={18} />} className="w-full sm:w-auto h-14 text-lg px-8 shadow-[0_0_40px_rgba(0,212,255,0.3)]">
                Book Your Strategy Call
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-y-3 gap-x-6 text-sm md:text-base text-gray-400">
            <div className="flex items-center gap-2">
              <div className="bg-green-500/20 rounded-full p-1"><Check size={12} className="text-green-400" /></div>
              <span>91.89% inbox placement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-500/20 rounded-full p-1"><Check size={12} className="text-green-400" /></div>
              <span>Zero spam complaints</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-500/20 rounded-full p-1"><Check size={12} className="text-green-400" /></div>
              <span>Results in 14 days</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/10 hidden lg:flex items-center justify-center z-0 rotate-12"
      >
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
        </div>
      </motion.div>

       <motion.div 
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-[10%] w-64 h-16 rounded-xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md border border-white/10 hidden lg:flex items-center gap-4 px-4 z-0 -rotate-6"
      >
        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✓</div>
        <div className="flex flex-col">
            <div className="h-2 w-24 bg-white/20 rounded mb-2"></div>
            <div className="h-2 w-16 bg-white/10 rounded"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;