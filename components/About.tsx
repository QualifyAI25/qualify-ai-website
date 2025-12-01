import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import headshot from '../ferdi-headshot.jpg';

const About: React.FC = () => {
  const principles = [
    "AI that researches like your best SDR.",
    "Writes like your best copywriter.",
    "Follows up like your most disciplined operator.",
    "But at scale.",
    "24/7.",
    "Without burning out."
  ];

  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-accent to-highlight rounded-2xl blur-2xl opacity-30 transform -rotate-6"></div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square group">
            <img 
              src={headshot}
              alt="Ferdi Labuschagne" 
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              <h4 className="text-xl font-bold font-display">Ferdi Labuschagne</h4>
              <p className="text-accent text-sm">Founder, Qualify AI (Pty) Ltd</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-300">
            <div className="rounded-2xl border border-white/10 p-4 bg-white/5">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Age</p>
              <p className="text-white font-semibold">22</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-4 bg-white/5">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Location</p>
              {/* CHANGED: Cape Town */}
              <p className="text-white font-semibold">Cape Town, South Africa</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-4 bg-white/5 col-span-2">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Contact</p>
              <div className="flex flex-col">
                <a href="mailto:ferdi@qualifyai.io" className="text-accent hover:underline">ferdi@qualifyai.io</a>
                <a href="https://www.linkedin.com/in/ferdi-labuschagne" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent">LinkedIn /ferdi-labuschagne</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
            Meet the Builder Behind Qualify AI
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            {/* CHANGED: Cape Town */}
            <p>I'm Ferdi Labuschagne. 22 years old. Building from Cape Town, South Africa.</p>
            <p>I built Qualify AI because I watched too many incredible B2B SaaS products struggle with empty pipelines.</p>
            <p>Not because they weren't good enough.</p>
            <p>Because manual outbound doesn't scale.</p>
            <p>You can't hire fast enough. You can't personalize at scale. Your follow-ups fall apart. Your best reps burn out.</p>
            <p>So I built what I wish existed:</p>
            
            {/* CHANGED: 6 bullet points */}
            <ul className="space-y-2 pl-6">
              {principles.map((principle, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="text-accent mt-1">→</span>
                  <span>{principle}</span>
                </motion.li>
              ))}
            </ul>

            <p>Qualify AI isn't another lead gen agency.</p>
            <p className="text-white font-semibold">It's how B2B SaaS companies will build pipeline in the AI era.</p>
            <p className="text-accent font-display font-bold">We're just getting started.</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;