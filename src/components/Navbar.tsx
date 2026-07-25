import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, Send, Sparkles, Terminal, Camera } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenHireMe: () => void;
  onOpenEditPhoto: () => void;
}

export default function Navbar({ onOpenResume, onOpenHireMe, onOpenEditPhoto }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple section observer
      const sections = ['about', 'skills', 'experience', 'projects', 'roadmap', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B0B0B]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-purple-950/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 text-white focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#8B5CF6] to-purple-400 p-[1px] shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
            <div className="w-full h-full bg-[#0B0B0B] rounded-[11px] flex items-center justify-center font-mono font-bold text-sm tracking-wider group-hover:bg-[#121212] transition-colors">
              <span className="text-white">R</span>
              <span className="text-[#8B5CF6]">/</span>
              <span className="text-purple-300">B</span>
            </div>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping opacity-75" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-[#0B0B0B]" />
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-tight group-hover:text-purple-300 transition-colors">
              Rohit Bajiya
            </span>
            <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase flex items-center gap-1">
              <Terminal className="w-2.5 h-2.5 text-[#8B5CF6]" /> DevOps Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-medium tracking-wider uppercase transition-colors rounded-full ${
                  isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-[#8B5CF6]/20 border border-[#8B5CF6]/50 rounded-full"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons & Status Badge */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Status Badge */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to Opportunities</span>
          </div>

          {/* Edit Photo Trigger */}
          <button
            onClick={onOpenEditPhoto}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide text-purple-200 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 interactive"
            title="Edit Portfolio Photo"
          >
            <Camera className="w-3.5 h-3.5 text-purple-400" />
            <span>Edit Photo</span>
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide text-gray-300 bg-white/[0.05] hover:bg-white/10 border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:text-white interactive"
          >
            <FileText className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>Resume</span>
          </button>

          {/* Hire Me CTA */}
          <button
            onClick={onOpenHireMe}
            className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-xs interactive"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-600 rounded-xl animate-pulse" />
            <span className="relative flex items-center gap-2 px-4 py-2 rounded-[11px] bg-[#0B0B0B] text-white transition-all duration-300 group-hover:bg-transparent">
              <Sparkles className="w-3.5 h-3.5 text-purple-300 group-hover:text-white" />
              <span>Hire Me</span>
            </span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-purple-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0B0B0B]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-gray-400">NAVIGATION</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                  Online
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif tracking-wide text-gray-300 hover:text-purple-400 transition-colors py-1 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-purple-500">→</span>
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-white"
                >
                  <FileText className="w-4 h-4 text-purple-400" />
                  <span>Download / View Resume</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenHireMe();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-sm font-semibold text-white shadow-lg shadow-purple-900/40"
                >
                  <Send className="w-4 h-4" />
                  <span>Hire Me Now</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
