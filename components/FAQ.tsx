import React, { useState } from 'react';
import Section from './ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button 
        className="w-full py-6 flex justify-between items-center text-left hover:text-accent transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium pr-8">{question}</span>
        <span className="text-accent flex-shrink-0">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 pb-6 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
     question: "How is this different from other lead gen agencies?",
      answer: "Most agencies: hire cheap VAs, send generic templates, hope something sticks.\n\nQualify AI: AI does the research and writing at the level of your best SDR, but at scale. Every email is personalized. Every follow-up happens. Guaranteed results."
    },
    {
      question: "What if you don't deliver 20-30 meetings?",
      answer: "We guarantee 20-30 qualified meetings per month, or you don't pay. If we don't hit the number, that month is free. Simple."
    },
    {
      question: "How long until I see results?",
      answer: "First meetings booked within 14 days. Full pipeline flowing by day 30. We don't waste time with 90-day \"ramp periods\"—we deliver fast."
    },
    {
      question: "Do I need to provide the prospect list?",
      answer: "Nope. Our AI researches and builds your target list based on your ICP. You approve the criteria, we handle everything else."
    },
    {
      question: "What types of companies do you work with?",
      answer: "B2B SaaS companies between $2M-$50M in revenue. You have product-market fit and need consistent pipeline to scale.\n\nIf you're pre-revenue or B2C, we're not the right fit."
    },
    {
      question: "Can I pause or cancel anytime?",
      answer: "30-day notice for cancellation. No long-term contracts. We earn your business every month by delivering results."
    },
    {
      question: "Do you integrate with our CRM?",
      answer: "Yes. We sync with Salesforce, HubSpot, Pipedrive, and most major CRMs. (Enterprise tier includes full integration.)"
    }
  ];

  return (
    <Section className="max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Questions? <span className="text-accent">We've Got Answers.</span></h2>
      </div>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </Section>
  );
};

export default FAQ;