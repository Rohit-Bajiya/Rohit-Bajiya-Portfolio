import { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, CheckCircle2, ShieldCheck, Activity, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<'summary' | 'terminal'>('summary');
  const [copied, setCopied] = useState(false);

  const terminalOutput = `{
  "developer": "Rohit Bajiya",
  "role": "DevOps Engineer",
  "status": "Ready for Hire",
  "education": "B.Tech Computer Science (JIET)",
  "location": "Didwana, Rajasthan, India",
  "core_competencies": [
    "Cloud Native Infrastructure (AWS)",
    "Kubernetes Cluster Management (EKS)",
    "Infrastructure as Code (Terraform)",
    "CI/CD Automation (Jenkins, GitHub Actions)",
    "Containerization & Registry (Docker)",
    "DevSecOps & Secrets Security"
  ],
  "philosophy": "Automate everything, secure by default, deploy with zero downtime."
}`;

  const copyTerminal = () => {
    navigator.clipboard.writeText(terminalOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative py-24 bg-[#0B0B0B] overflow-hidden border-t border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-3"
          >
            <Terminal className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>DISCOVER THE ENGINEER</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            About <span className="text-gradient-purple">Me</span>
          </motion.h2>

          <div className="w-16 h-1 bg-[#8B5CF6] rounded-full mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Editorial Story & Bio */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* View Switcher Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-white/[0.03] border border-white/10 rounded-2xl w-fit">
              <button
                onClick={() => setActiveTab('summary')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeTab === 'summary'
                    ? 'bg-[#8B5CF6] text-white shadow-lg shadow-purple-900/40'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Story Overview
              </button>
              <button
                onClick={() => setActiveTab('terminal')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                  activeTab === 'terminal'
                    ? 'bg-[#8B5CF6] text-white shadow-lg shadow-purple-900/40'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>profile.json</span>
              </button>
            </div>

            {activeTab === 'summary' ? (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col gap-5"
              >
                <h3 className="font-serif text-2xl font-bold text-white leading-snug">
                  DevOps Engineer focused on building secure, scalable, and automated cloud infrastructure.
                </h3>

                {PERSONAL_INFO.summary.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {/* Core Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Kubernetes & AWS</h4>
                      <p className="text-xs text-gray-400 mt-0.5">Orchestrating high availability cloud deployments.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">DevSecOps & IaC</h4>
                      <p className="text-xs text-gray-400 mt-0.5">Modular Terraform with security scanning baked in.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl overflow-hidden border border-white/15 bg-[#080808] shadow-2xl font-mono text-xs"
              >
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-[#121212] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-gray-400 text-[11px]">cat profile.json</span>
                  </div>

                  <button
                    onClick={copyTerminal}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-gray-300 text-[10px] transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                {/* Terminal Content */}
                <pre className="p-6 text-purple-300 overflow-x-auto leading-relaxed">
                  <code>{terminalOutput}</code>
                </pre>
              </motion.div>
            )}

          </div>

          {/* Right Side: Animated 4 Statistics Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-6 rounded-3xl border border-white/10 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-bl-full pointer-events-none group-hover:bg-purple-500/20 transition-colors" />

                <div>
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block mb-2">
                    METRIC 0{idx + 1}
                  </span>
                  <div className="font-serif text-4xl sm:text-5xl font-black text-white group-hover:text-purple-300 transition-colors">
                    {stat.value}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-white tracking-wide">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    {stat.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
