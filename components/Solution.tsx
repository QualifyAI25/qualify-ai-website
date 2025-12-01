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
    <Section id="solution" className="relative overflow-hidden">
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[80%] bg-gradient-to-r from-accent/10 via-transparent to-highlight/10 blur-3xl -z-10"></div>

      <div className="mb-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-display font-bold mb-6 text-white"
        >
          AI Does The Heavy Lifting. Your Team Does The Closing.
        </motion.h2>
        <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
          Automate research, personalization, follow-up, and booking so your closers only spend time with qualified buyers.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 relative mb-20">
        {steps.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(5,8,28,0.55)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/10 via-transparent to-highlight/20"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center text-3xl border border-accent/30">
                  {item.emoji}
                </div>
                <div>
                  <p className="text-xs tracking-[0.4em] text-gray-500 font-mono">STEP {`0${index + 1}`}</p>
                  <h3 className="text-sm font-semibold uppercase text-gray-300">{item.title}</h3>
                </div>
              </div>
              <p className="text-2xl font-display font-bold text-white mb-4 leading-tight">{item.headline}</p>
              <p className="text-gray-400 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-accent via-highlight to-accent bg-[length:200%_200%] animate-gradient-x shadow-[0_0_30px_rgba(0,212,255,0.2)]">
            <div className="bg-[#0A0E27] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-highlight/20 animate-pulse-slow"></div>
                <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-3 relative z-10">
                    RESULT: <span className="text-accent">20-30 Qualified Meetings Per Month</span>
                </h3>
                <p className="text-lg md:text-xl text-gray-300 relative z-10 font-medium">
                    Guaranteed. Or you don't pay.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs uppercase tracking-wider text-gray-400 relative z-10">
                  <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">Research</span>
                  <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">Personalization</span>
                  <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">Follow-Up</span>
                  <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">Meetings</span>
                </div>
            </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Solution;