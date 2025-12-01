import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  const rows = [
    { feature: "Cost", sdr: "$120K+/year", ai: "$60K/year", save: "$60K+/year" },
    { feature: "Ramp Time", sdr: "3-6 months", ai: "2 weeks", save: "2.5-5.5 mo." },
    { feature: "Capacity", sdr: "600/month", ai: "800/month", save: "+200/month" },
    { feature: "Consistency", sdr: "Variable", ai: "24/7/365", save: "100% uptime" },
    { feature: "Personalization", sdr: "Burns out", ai: "Infinite", save: "No burnout" },
    { feature: "Follow-Up", sdr: "Drops ~40%", ai: "Never drops", save: "+40% done" },
    { feature: "Results", sdr: "10-15 meetings", ai: "20-30", save: "+10-15/mo." },
  ];

  return (
    <Section className="bg-[#05081c]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Why <span className="text-accent">Qualify AI</span> Beats Traditional SDRs
        </h2>
        <p className="text-gray-400">Evolution is not a choice. It's a necessity.</p>
      </div>

      <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm relative z-10">
        <div className="grid grid-cols-4 p-6 border-b border-white/10 bg-white/5">
          <div className="text-gray-400 font-mono text-sm uppercase tracking-wider flex items-center">Feature</div>
          <div className="text-center font-bold text-gray-400">Traditional SDRs</div>
          <div className="text-center font-bold text-accent text-lg">Qualify AI</div>
          <div className="text-center font-bold text-green-400 text-lg">You Save</div>
        </div>

        {rows.map((row, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.08 }}
            className="grid grid-cols-4 p-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors items-center"
          >
            <div className="font-medium text-gray-200">{row.feature}</div>
            
            <div className="text-center text-gray-500 flex justify-center items-center gap-2">
              <span className="md:hidden"><X size={14}/></span>
              {row.sdr}
            </div>
            
            <div className="text-center text-white font-semibold flex justify-center items-center gap-2 shadow-accent">
               <span className="hidden md:block text-accent"><Check size={16} /></span>
               <span className="bg-accent/10 px-3 py-1 rounded-full text-accent border border-accent/20">
                 {row.ai}
               </span>
            </div>
            <div className="text-center font-semibold text-green-300">
              {row.save}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-xl md:text-3xl font-display font-bold text-white leading-tight">
          Same Output. <span className="text-accent">Half the cost.</span> <br className="md:hidden" />Zero Management headaches.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <div className="relative rounded-[32px] border border-green-400/40 bg-gradient-to-br from-green-500/15 to-transparent text-center px-8 py-12 shadow-[0_0_60px_rgba(34,197,94,0.25)] animate-fade-glow">
          <div className="absolute inset-0 rounded-[32px] border border-white/5 pointer-events-none animate-pulse-soft"></div>
          <p className="text-2xl md:text-3xl font-display font-bold text-white mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl" aria-hidden>💰</span> THE BOTTOM LINE
          </p>
          <div className="space-y-2 text-lg md:text-xl text-gray-200 font-medium">
            <p>Total Savings: <span className="text-white font-bold">$60,000+ per year</span></p>
            <p>Time Savings: <span className="text-white font-bold">2.5-5.5 months faster to results</span></p>
            <p>Meeting Boost: <span className="text-white font-bold">+10-15 qualified meetings per month</span></p>
            <p>ROI: <span className="text-green-300 font-bold">100% cost savings in Year 1 alone</span></p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Comparison;