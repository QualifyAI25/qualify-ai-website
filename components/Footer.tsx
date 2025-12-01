import React from 'react';
import { Zap, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-[#05081c] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-accent to-highlight flex items-center justify-center text-primary font-bold">
                <Zap size={18} fill="currentColor" />
              </div>
              <span className="font-display font-bold text-xl tracking-wide text-white">
                QUALIFY<span className="text-accent">AI</span>
              </span>
            </a>
            
            <div className="space-y-4">
              <div className="text-gray-400">
                <h5 className="text-white font-semibold mb-1">QUALIFY AI (PTY) LTD</h5>
                <p>Paarl, Western Cape, South Africa</p>
              </div>

              <div className="flex flex-col gap-2 text-gray-400">
                <a href="mailto:ferdi@qualifyai.io" className="hover:text-accent transition-colors w-fit">
                  Email: ferdi@qualifyai.io
                </a>
                <a href="https://www.linkedin.com/in/ferdi-labuschagne" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors w-fit">
                  LinkedIn: Ferdi Labuschagne
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#problem" className="hover:text-accent transition-colors">Problem</a></li>
              <li><a href="#solution" className="hover:text-accent transition-colors">Solution</a></li>
              <li><a href="#pricing" className="hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Qualify AI. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-gray-600 text-sm font-mono flex items-center gap-2">
              <SparklesIcon /> Built with AI. Obviously.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SparklesIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export default Footer;