import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';

const Solution: React.FC = () => {
  const steps = [
    {
      emoji: "🎯",
      title: "AI PROSPECT INTELLIGENCE",
      headline: "Research 100-200 Perfect-Fit Prospects Per Month",
      description: "Our AI analyzes companies based on your exact ICP: revenue, tech stack, recent funding, hiring patterns, pain indicators. We don't just find companies—we find companies actively experiencing the problems you solve."
    },
    {
      emoji: "✍️",
      title: "HYPER-PERSONALIZED OUTREACH AT SCALE",
      headline: "Every Email Sounds Like You Wrote It Personally",
      description: "No templates. No mail-merge placeholders. Our AI writes unique emails for each prospect, referencing their company, their challenges, their recent news. It's like having your best copywriter working 24/7."
    },
    {
      emoji: "🔄",
      title: "RELENTLESS FOLLOW-UP (NOTHING FALLS THROUGH)",
      headline: "5-7 Touchpoints Over 10 Days. Automatically.",
      description: "Most deals are lost because reps forget to follow up. We don't forget. Ever. Our AI manages the entire sequence: timing, messaging, persistence—until they respond or opt out."
    },
    {
      emoji: "📅",
      title: "QUALIFIED MEETINGS ON YOUR CALENDAR",
      headline: "20-30 Meetings Per Month. Guaranteed.",
      description: "Not leads. Not replies. Actual booked meetings with qualified prospects who match your ICP and are interested in your solution. They show up ready to talk. You handle the conversations and close deals."
    }
  ];

  return (
    <Section id="solution" className="bg-[#05081c]">
      {/* ADDED: Solution heading in blue */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <span className="text-accent text-sm font-mono uppercase tracking-[0.4em] px-4 py-2 rounded-full border border-accent/30 bg-accent/10">
            Solution
          </span>
        </motion.div>
      </div>

      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-display font-bold mb-4"
        >
          {/* CHANGED: "Qualify AI" with blue "AI" */}
          Qualify <span className="text-accent">AI</span> Does The Heavy Lifting. Your Team Does The Closing.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          We built the AI system we wish existed. Now it's yours.
        </motion.p>
      </div>

      <div className="grid gap-8 md:gap-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-4xl md:text-5xl backdrop-blur">
                  {step.emoji}
                </div>
              </div>
              
              <div className="flex-1 space-y-3">
                <div className="text-xs md:text-sm uppercase tracking-[0.3em] text-accent font-mono">
                  {step.title}
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                  {step.headline}
                </h3>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
            
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute left-10 top-20 bottom-0 w-px bg-gradient-to-b from-accent/50 to-transparent"></div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-accent/10 border border-accent/30">
          <span className="text-2xl">🎯</span>
          <p className="text-lg md:text-xl font-display font-bold text-white">
            RESULT: <span className="text-accent">20-30 Qualified Meetings Per Month. Guaranteed.</span> Or you don't pay.
          </p>
        </div>
      </motion.div>
    </Section>
  );
};

export default Solution;