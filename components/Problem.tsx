import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { BarChart3, PenTool, RefreshCw, DollarSign, Activity, Hourglass } from 'lucide-react';

const Problem: React.FC = () => {
  const problems = [
    {
      emoji: "📊",
      icon: <BarChart3 size={28} className="text-blue-400" />,
      title: "60% Research Time",
      description: "Your reps spend 24 hours per week on LinkedIn and Google instead of actually selling. That's work AI does in seconds."
    },
    {
      emoji: "✍️",
      icon: <PenTool size={28} className="text-purple-400" />,
      title: "Personalization Doesn't Scale",
      description: "Generic emails get 1% replies. Personalized get 15%. But writing 50 unique emails per day? Your team burns out in weeks."
    },
    {
      emoji: "🔄",
      icon: <RefreshCw size={28} className="text-red-400" />,
      title: "Follow-Up Falls Apart",
      description: "Your best rep sends a great first email. Prospect doesn't reply. Rep gets busy. Follow-up never happens. You just lost a $50K deal because of timing."
    },
    {
      emoji: "💸",
      icon: <DollarSign size={28} className="text-green-300" />,
      title: "$120K+ Per Rep (And Rising)",
      description: "Salary, benefits, tools, training, turnover costs. Lose your best rep and pipeline dies for 3-6 months. True cost: 2-3x their salary."
    },
    {
      emoji: "📉",
      icon: <Activity size={28} className="text-amber-300" />,
      title: "Pipeline Rollercoaster",
      description: "25 meetings one month. 8 the next. The rep got sick, distracted, or is job hunting. You can't build a predictable business on unpredictable people."
    },
    {
      emoji: "⏰",
      icon: <Hourglass size={28} className="text-pink-300" />,
      title: "3-6 Month Ramp Time",
      description: "Hire. Train. Ramp. Wait. Hope. Meanwhile competitors book meetings, your product ships unnoticed, investors ask about pipeline."
    }
  ];

  return (
    <Section id="problem" className="bg-primary relative z-10">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold mb-4"
        >
          Your Sales Team Is Drowning In The Wrong Work
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          (And It's Costing You More Than You Think)
        </motion.p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 mb-16">
        {problems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group border border-white/10 bg-white/5"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 backdrop-blur">
                {item.icon}
              </div>
              <span className="text-3xl" aria-hidden>{item.emoji}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed text-base">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center max-w-3xl mx-auto space-y-6"
      >
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          The problem isn't your people. The problem is <span className="text-white font-semibold border-b border-accent/50 pb-0.5">manual outbound doesn't scale.</span> That's why we built Qualify AI.
        </p>
      </motion.div>
    </Section>
  );
};

export default Problem;