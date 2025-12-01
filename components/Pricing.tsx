import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const tiers = [
    {
      name: "CORE",
      emoji: "📦",
      subtitle: "MEETINGS ENGINE",
      price: "$5,000",
      period: "/month",
      target: "Perfect for: Series A SaaS looking to fill pipeline",
      features: [
        "100-200 prospect research/month",
        "AI-powered email personalization",
        "5-email sequence management",
        "Response handling & qualification",
        "20-30 meetings booked per month",
        "Monthly performance reporting",
        "Dedicated account manager"
      ],
      roi: "Replaces 1 SDR ($120K/year)",
      payback: "2.4 months",
      cta: "Start With Core",
      popular: false
    },
    {
      name: "PRO",
      emoji: "📊",
      subtitle: "MEETINGS + VISIBILITY",
      price: "$5,500",
      period: "/month",
      setup: "$12,500 setup - includes dashboard build",
      target: "Perfect for: Companies needing board-level metrics",
      featureLabel: "Everything in Core, plus:",
      features: [
        "Custom performance dashboard",
        "Real-time campaign analytics",
        "Prospect engagement tracking",
        "ROI calculator (cost per meeting)",
        "Pipeline forecasting (30-day view)",
        "Custom branded for your company",
        "Automatic data sync from Apollo"
      ],
      roi: "Replaces 1 SDR + reporting tools",
      payback: "2.3 months",
      cta: "Upgrade to Pro",
      popular: false
    },
    {
      name: "ENTERPRISE",
      emoji: "🤖",
      subtitle: "FULL SDR AUTOMATION",
      price: "$7,500",
      period: "/month",
      setup: "$20,000 setup - includes automation build",
      target: "Perfect for: Series B+ replacing entire SDR team",
      featureLabel: "Everything in Pro, plus:",
      features: [
        "Custom AI research tool",
        "Auto-enrichment (LinkedIn, funding)",
        "Smart sequence routing",
        "CRM sync (Salesforce, HubSpot)",
        "Slack alerts for hot leads",
        "Meeting scheduler integration",
        "Complete SDR workflow automation"
      ],
      roi: "Replaces 2-3 SDRs ($240K-$360K/year)",
      payback: "2.7 months",
      cta: "Go Enterprise",
      popular: true
    },
    {
      name: "ULTIMATE",
      emoji: "🧠",
      subtitle: "COMPLETE INTELLIGENCE",
      price: "$9,000",
      period: "/month",
      setup: "$27,500 setup - includes all systems",
      target: "Perfect for: Enterprise accounts, $10M+ ARR",
      featureLabel: "Everything in Enterprise, plus:",
      features: [
        "Trigger event monitoring",
        "Competitive intelligence tracking",
        "Intent signal detection",
        "Auto-alerts for buying signals",
        "AI-generated talking points",
        "Multi-channel orchestration",
        "White-glove implementation"
      ],
      roi: "Replaces entire outbound function ($500K+/year)",
      payback: "3.1 months",
      cta: "Book Ultimate Demo",
      popular: false
    }
  ];

  return (
    <Section id="pricing" className="relative">
       {/* Background glow */}
       <div className="absolute inset-0 bg-gradient-radial from-highlight/10 to-transparent opacity-30 pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Choose Your Growth Engine
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Every tier includes our core AI prospecting engine.<br/>
          <span className="text-accent">Add intelligence layers as you scale.</span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16 relative z-10">
        {tiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`
              relative p-6 rounded-3xl border flex flex-col h-full bg-[#0A0E27]/80 backdrop-blur-sm
              ${tier.popular 
                ? 'border-accent shadow-[0_0_30px_rgba(0,212,255,0.15)]' 
                : 'border-white/10 hover:border-white/20'
              }
            `}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                <Sparkles size={12} /> Most Popular
              </div>
            )}

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold font-display tracking-wide">{tier.name} {tier.emoji}</h3>
              </div>
              <div className="text-xs font-mono text-accent mb-4 tracking-wider">{tier.subtitle}</div>
              
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold font-display">{tier.price}</span>
                <span className="text-gray-500 text-sm">{tier.period}</span>
              </div>
              {tier.setup && (
                <div className="text-xs text-gray-500 mb-3">{tier.setup}</div>
              )}
              
              <p className="text-xs text-gray-400 italic border-t border-white/5 pt-3 mt-1 min-h-[40px]">
                {tier.target}
              </p>
            </div>

            <div className="flex-1 mb-6">
              {tier.featureLabel && (
                <div className="text-xs font-semibold text-gray-300 mb-2">{tier.featureLabel}</div>
              )}
              <ul className="space-y-3">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed">
                    <div className="mt-0.5 min-w-[14px]">
                       <Check size={14} className="text-accent" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-6 border-t border-white/10 space-y-4">
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">ROI</div>
                <div className="text-xs font-medium text-white mb-1">{tier.roi}</div>
                <div className="text-[10px] text-green-400">Payback: {tier.payback}</div>
              </div>
              
              <a 
                href="https://calendly.com/ferdi-qualifyai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button 
                  variant={tier.popular ? 'primary' : 'outline'}
                  className="w-full justify-center text-sm py-2"
                >
                  {tier.cta} <ArrowRight size={14} />
                </Button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-highlight via-accent to-highlight bg-[length:200%_200%] animate-gradient-x shadow-[0_0_40px_rgba(178,75,243,0.2)]">
          <div className="bg-[#0A0E27] rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-highlight/5"></div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-highlight/20 text-highlight text-xs font-bold uppercase tracking-wider mb-4 border border-highlight/30">
                  <Zap size={12} fill="currentColor" /> Founding Client Offer
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  First 5 clients get <br/>
                  <span className="text-accent">50% off first 2 months</span>
                </h3>
                
                <div className="space-y-2 mb-6 text-gray-300">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Core Plan:</span>
                    <span className="font-mono text-white">$2,500/mo <span className="text-gray-600 line-through text-xs ml-1">$5,000</span></span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Setup Fee:</span>
                    <span className="font-mono text-white">$2,500 <span className="text-gray-600 line-through text-xs ml-1">$5,000</span></span>
                  </div>
                </div>

                <div className="text-sm text-gray-400">
                  <span className="text-green-400 font-bold">● 3 spots remaining</span> for this cohort.
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="font-bold text-white mb-4">Requirements:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Check size={16} className="text-highlight" /> Commit to 90-day pilot
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Check size={16} className="text-highlight" /> Provide testimonial if results delivered
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Check size={16} className="text-highlight" /> Available for case study
                  </li>
                </ul>
                <a 
                  href="https://calendly.com/ferdi-qualifyai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="glow" className="w-full justify-center">
                    Claim Your Pilot Spot <ArrowRight size={16} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Pricing;