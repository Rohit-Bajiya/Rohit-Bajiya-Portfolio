import { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Terminal, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Asia/Kolkata (Rajasthan, India)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070707] border-t border-white/10 py-12 relative z-10 text-xs font-mono text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 text-white font-serif text-lg font-bold">
            <span className="text-[#8B5CF6]">&lt;/&gt;</span>
            <span>Rohit Bajiya</span>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Designed & Developed by <span className="text-white font-semibold">Rohit Bajiya</span>
          </p>
          <p className="text-[10px] text-gray-400">
            DevOps Engineer • Cloud Infrastructure & Automation
          </p>
        </div>

        {/* Live Local Time Indicator */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <div className="text-center md:text-left">
            <span className="text-[10px] text-gray-400 block">DIDWANA, RAJASTHAN (IST)</span>
            <span className="text-xs font-bold text-white tracking-wider">{localTime || '10:45:00 AM'}</span>
          </div>
        </div>

        {/* Links & Back To Top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors interactive"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors interactive"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#8B5CF6] hover:bg-purple-600 text-white font-semibold text-xs transition-all shadow-lg shadow-purple-950/50 hover:-translate-y-0.5 interactive"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
