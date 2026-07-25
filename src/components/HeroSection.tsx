import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Download,
  FolderGit2,
  Send,
  Cloud,
  Terminal,
  Cpu,
  Layers,
  Box,
  Server,
  Activity,
  Sparkles,
  ArrowDownRight,
  Camera
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenHireMe: () => void;
  profileImage: string;
  onOpenEditPhoto: () => void;
}

export default function HeroSection({
  onOpenResume,
  onOpenHireMe,
  profileImage,
  onOpenEditPhoto
}: HeroSectionProps) {
  // Animated rotating role text
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = PERSONAL_INFO.typingRoles[roleIndex];
    const updateSpeed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.typingRoles.length);
        }
      }
    }, updateSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:py-0 flex items-center justify-center overflow-hidden bg-[#0B0B0B]">
      {/* Background Grid & Glow Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating Animated DevOps Badges in Background */}
      <motion.div
        className="absolute top-36 left-12 hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl z-10"
        animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
          <Cpu className="w-4 h-4" />
        </div>
        <div className="text-[11px] font-mono">
          <p className="text-gray-400">Cluster</p>
          <p className="text-white font-semibold">AWS EKS Cluster</p>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-28 left-20 hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl z-10"
        animate={{ y: [0, 14, 0], rotate: [2, -2, 2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
          <Layers className="w-4 h-4" />
        </div>
        <div className="text-[11px] font-mono">
          <p className="text-gray-400">IaC Engine</p>
          <p className="text-white font-semibold">Terraform Modular</p>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-44 right-16 hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl z-10"
        animate={{ y: [0, -10, 0], rotate: [1, -1, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
          <Box className="w-4 h-4" />
        </div>
        <div className="text-[11px] font-mono">
          <p className="text-gray-400">Containers</p>
          <p className="text-white font-semibold">Docker Multi-Stage</p>
        </div>
      </motion.div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Headline & Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Status & Subtitle Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-6 w-fit"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6] animate-pulse" />
              <span>DevOps & Infrastructure Automation</span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            </motion.div>

            {/* Huge Luxury Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05]">
                <span className="block text-gray-400 font-light italic text-3xl sm:text-4xl lg:text-5xl mb-1">
                  HELLO, I'M
                </span>
                <span className="text-gradient-purple block">
                  ROHIT BAJIYA
                </span>
              </h1>
            </motion.div>

            {/* Dynamic Rotating Role Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center gap-3 text-lg sm:text-2xl font-mono text-gray-300"
            >
              <span className="text-[#8B5CF6] font-bold">$&gt;</span>
              <span className="text-white font-medium min-w-[220px]">
                {displayText}
                <span className="animate-pulse text-[#8B5CF6]">|</span>
              </span>
            </motion.div>

            {/* Tagline Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-gray-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed border-l-2 border-[#8B5CF6]/50 pl-4"
            >
              {PERSONAL_INFO.tagline}
            </motion.p>

            {/* Skill Pills preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-gray-400"
            >
              {['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Jenkins', 'Ansible', 'DevSecOps'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 hover:border-purple-500/40 hover:text-white transition-colors"
                >
                  #{tech}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              {/* Download Resume Button */}
              <button
                onClick={onOpenResume}
                className="group flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#8B5CF6] text-white font-semibold text-sm hover:bg-purple-600 transition-all duration-300 shadow-xl shadow-purple-950/50 hover:shadow-purple-600/30 hover:-translate-y-0.5 interactive"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>

              {/* View Projects Button */}
              <a
                href="#projects"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/[0.04] text-gray-200 hover:text-white font-semibold text-sm border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.08] transition-all duration-300 interactive"
              >
                <FolderGit2 className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                <span>View Projects</span>
              </a>

              {/* Hire Me CTA Button */}
              <button
                onClick={onOpenHireMe}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-transparent text-purple-300 hover:text-white font-semibold text-sm border border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 interactive"
              >
                <Send className="w-4 h-4 text-[#8B5CF6]" />
                <span>Hire Me</span>
              </button>
            </motion.div>

            {/* Live Terminal Status Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-10 p-3 rounded-2xl glass-card flex items-center gap-4 max-w-md border-white/10"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Activity className="w-4 h-4 animate-pulse" />
              </div>
              <div className="flex-1 font-mono text-xs">
                <p className="text-gray-400 flex items-center justify-between">
                  <span>DEPLOYMENT PIPELINE</span>
                  <span className="text-emerald-400 font-bold">READY</span>
                </p>
                <p className="text-white font-medium mt-0.5 truncate">
                  kubectl apply -f prod-cluster.yaml [Success]
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Column - Large Awwwards Editorial Hero Portrait Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Outer Decorative Glow & Borders */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#8B5CF6]/30 via-purple-500/10 to-indigo-500/20 blur-2xl opacity-70" />
              
              {/* Image Frame Container */}
              <div className="relative rounded-3xl overflow-hidden glass-card border border-white/15 p-2 group shadow-2xl">
                
                {/* Background Pattern behind portrait */}
                <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />

                {/* Main Portrait Image Container */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#121212] group">
                  <img
                    src={profileImage}
                    alt="Rohit Bajiya - DevOps Engineer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Clickable Hover Overlay to Edit Photo */}
                  <button
                    onClick={onOpenEditPhoto}
                    type="button"
                    className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2 text-white font-mono text-xs z-30 cursor-pointer"
                  >
                    <div className="p-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl shadow-purple-950/80 scale-90 group-hover:scale-100 transition-transform">
                      <Camera className="w-6 h-6" />
                    </div>
                    <span className="bg-black/80 px-3.5 py-1.5 rounded-full border border-purple-500/40 text-purple-200 font-semibold shadow-lg">
                      Click to Edit Photo
                    </span>
                  </button>

                  {/* Overlaid Editorial Text */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10 pointer-events-none">
                    <div>
                      <p className="text-xs font-mono text-purple-300 uppercase tracking-widest">
                        LOCATION
                      </p>
                      <p className="text-sm font-semibold text-white">
                        {PERSONAL_INFO.location}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white">
                      <Cloud className="w-5 h-5 text-[#8B5CF6]" />
                    </div>
                  </div>
                </div>

                {/* Top Left Badge */}
                <div className="absolute top-6 left-6 z-20 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono text-gray-200 flex items-center gap-1.5 pointer-events-none">
                  <Terminal className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>K8s & Cloud Specialist</span>
                </div>

                {/* Top Right Clickable Edit Photo Button Badge */}
                <button
                  onClick={onOpenEditPhoto}
                  type="button"
                  className="absolute top-6 right-6 z-30 px-3.5 py-1 rounded-full bg-purple-600/90 hover:bg-purple-500 backdrop-blur-md border border-purple-400/50 text-xs font-mono text-white flex items-center gap-1.5 shadow-xl transition-all duration-300 hover:scale-105 interactive"
                  title="Click to Edit / Change Photo"
                >
                  <Camera className="w-3.5 h-3.5 text-white" />
                  <span className="font-semibold">Edit Photo</span>
                </button>
              </div>

              {/* Floating Stat Widget */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 z-30 p-4 rounded-2xl glass-card border border-purple-500/30 shadow-2xl bg-[#0B0B0B]/90 backdrop-blur-xl hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-lg font-mono">
                  99%
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-mono">RELIABILITY</p>
                  <p className="text-sm font-bold text-white">Zero Downtime</p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 hover:text-white transition-colors group z-20"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL DOWN</span>
        <ArrowDownRight className="w-4 h-4 text-[#8B5CF6] group-hover:translate-y-1 transition-transform" />
      </a>
    </section>
  );
}
