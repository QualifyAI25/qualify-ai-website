import React, { useMemo, useState, useRef, useCallback } from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/ferdi-qualifyai';
const QUALIFY_AI_COST = 60000;
const QUALIFY_MEETINGS_PER_MONTH = 25;
const QUALIFY_COST_PER_MEETING = QUALIFY_AI_COST / 300;

const numberFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const decimalFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const InputField = React.memo(({
  label,
  defaultValue,
  onValueChange,
  prefix,
}: {
  label: string;
  defaultValue: number;
  onValueChange: (value: number) => void;
  prefix?: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  }, []);

  const handleInput = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const cleaned = input.value.replace(/[^\d]/g, '');
    input.value = cleaned;
    const numValue = cleaned === '' ? 0 : parseInt(cleaned, 10);
    onValueChange(numValue);
  }, [onValueChange]);

  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm text-gray-400 uppercase tracking-widest">{label}</span>
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none z-10">
            {prefix}
          </span>
        )}
        <input
          ref={inputRef}
          type="text"
          inputMode="numeric"
          defaultValue={defaultValue}
          onInput={handleInput}
          onFocus={handleFocus}
          className={`w-full rounded-2xl bg-white/5 border border-white/10 ${prefix ? 'pl-8' : 'pl-4'} pr-4 py-4 text-white text-lg focus:outline-none focus:ring-2 focus:ring-accent/60 transition-all`}
        />
      </div>
    </label>
  );
});

const ROI: React.FC = () => {
  const [salary, setSalary] = useState(60000);
  const [sdrs, setSdrs] = useState(2);
  const [benefits, setBenefits] = useState(40000);
  const [meetings, setMeetings] = useState(15);

  const metrics = useMemo(() => {
    const totalCurrentCost = salary * sdrs + benefits;
    const annualSavings = totalCurrentCost - QUALIFY_AI_COST;
    const monthlySavings = annualSavings / 12;
    const meetingsIncrease = QUALIFY_MEETINGS_PER_MONTH - meetings;
    const costPerMeetingCurrent = meetings > 0 ? totalCurrentCost / (meetings * 12) : 0;
    const roi = QUALIFY_AI_COST > 0 ? (annualSavings / QUALIFY_AI_COST) * 100 : 0;
    const paybackPeriod = monthlySavings > 0 ? QUALIFY_AI_COST / monthlySavings : 0;
    const meetingLiftPercent = meetings > 0 ? ((QUALIFY_MEETINGS_PER_MONTH / meetings) - 1) * 100 : 0;

    return {
      totalCurrentCost,
      annualSavings,
      monthlySavings,
      meetingsIncrease,
      costPerMeetingCurrent,
      roi,
      paybackPeriod,
      meetingLiftPercent,
    };
  }, [salary, sdrs, benefits, meetings]);

  return (
    <Section id="roi" className="relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent -z-10"></div>
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-display font-bold mb-4"
        >
          Calculate Your Exact Savings
        </motion.h2>
        <p className="text-gray-400 text-lg">
          See how much you'd save by switching to Qualify AI
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg space-y-6 shadow-[0_30px_80px_rgba(5,8,28,0.75)]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center">
              <Calculator className="text-accent" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Inputs</p>
              <h3 className="text-xl font-semibold text-white">Your Current SDR Setup</h3>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <InputField label="Current SDR Salary" defaultValue={salary} onValueChange={setSalary} prefix="$" />
            <InputField label="Number of SDRs" defaultValue={sdrs} onValueChange={setSdrs} />
            <InputField label="Benefits & Tools Cost" defaultValue={benefits} onValueChange={setBenefits} prefix="$" />
            <InputField label="Current Meetings Per Month" defaultValue={meetings} onValueChange={setMeetings} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Total Current Cost</p>
              <p className="text-2xl font-display font-bold text-white">{numberFormatter.format(metrics.totalCurrentCost)}</p>
            </div>
            <div className="rounded-2xl bg-accent/10 p-4 border border-accent/30">
              <p className="text-xs uppercase tracking-[0.4em] text-accent">Qualify AI Cost</p>
              <p className="text-2xl font-display font-bold text-accent">{numberFormatter.format(QUALIFY_AI_COST)}</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-green-400/30 bg-gradient-to-br from-green-500/10 via-transparent to-accent/10 p-8 backdrop-blur-lg shadow-[0_30px_80px_rgba(15,118,110,0.45)]"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-green-500/20 border border-green-400/40 flex items-center justify-center">
              <TrendingUp className="text-green-300" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-green-200">📊 Your Savings Breakdown</p>
              <h3 className="text-2xl font-display font-bold text-white">Live Results</h3>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-2xl bg-black/20 border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-2">Annual Savings</p>
              <p className="text-4xl font-display font-bold text-white">{numberFormatter.format(metrics.annualSavings)}</p>
              <p className="text-sm text-gray-400 mt-2">Monthly Savings: <span className="text-white font-semibold">{numberFormatter.format(metrics.monthlySavings)}</span></p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Additional Meetings</p>
                <p className="text-2xl font-bold text-white">+{Math.max(metrics.meetingsIncrease, 0)} /mo</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">ROI</p>
                <p className="text-2xl font-bold text-green-300">{Math.max(metrics.roi, 0).toFixed(0)}%</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Payback Period</p>
                <p className="text-2xl font-bold text-white">
                  {metrics.paybackPeriod > 0 ? `${decimalFormatter.format(metrics.paybackPeriod)} months` : 'Instant'}
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Cost Per Meeting (Current)</p>
                <p className="text-xl font-bold text-white">
                  {metrics.costPerMeetingCurrent > 0 ? numberFormatter.format(metrics.costPerMeetingCurrent) : '—'}
                </p>
                <p className="text-xs text-gray-400 mt-1">Qualify AI: {numberFormatter.format(QUALIFY_COST_PER_MEETING)}</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 border border-white/15">
              <p className="text-lg font-display text-white mb-4">📊 YOUR SAVINGS BREAKDOWN</p>
              <ul className="space-y-2 text-gray-200">
                <li>Annual Savings: <span className="text-white font-semibold">{numberFormatter.format(metrics.annualSavings)}</span></li>
                <li>Monthly Savings: <span className="text-white font-semibold">{numberFormatter.format(metrics.monthlySavings)}</span></li>
                <li>Additional Meetings: <span className="text-white font-semibold">+{Math.max(metrics.meetingsIncrease, 0)} per month</span></li>
                <li>ROI: <span className="text-green-300 font-semibold">{Math.max(metrics.roi, 0).toFixed(0)}%</span></li>
                <li>Payback Period: <span className="text-white font-semibold">{metrics.paybackPeriod > 0 ? `${decimalFormatter.format(metrics.paybackPeriod)} months` : 'Instant'}</span></li>
              </ul>
            </div>

            <div className="rounded-2xl bg-black/30 border border-green-500/30 p-6 space-y-3">
              <p className="text-sm text-gray-300">
                ✅ With Qualify AI, you save {numberFormatter.format(Math.max(metrics.annualSavings, 0))} per year while booking {Math.max(metrics.meetingLiftPercent, 0).toFixed(0)}% more qualified meetings.
              </p>
              <a 
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-primary font-semibold shadow-[0_0_25px_rgba(34,197,94,0.5)] hover:shadow-[0_0_35px_rgba(34,197,94,0.8)] transition"
              >
                Book Your Free Strategy Call →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ROI;