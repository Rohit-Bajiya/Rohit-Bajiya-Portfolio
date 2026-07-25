import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Terminal,
  Code2,
  FileCode,
  GitBranch,
  Github,
  Box,
  Cpu,
  Layers,
  Cloud,
  Workflow,
  Server,
  GitPullRequest,
  Activity,
  BarChart3,
  RefreshCw,
  Database,
  Sparkles,
  Layers3
} from 'lucide-react';
import { SKILLS_DATA, Skill } from '../data/portfolioData';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Cloud & IaC',
    'Containers & Orchestration',
    'CI/CD & Automation',
    'Core & Scripting',
    'Monitoring & GitOps'
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-5 h-5 text-purple-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-yellow-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-orange-400" />;
      case 'Github': return <Github className="w-5 h-5 text-white" />;
      case 'Box': return <Box className="w-5 h-5 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-purple-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-amber-400" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-red-400" />;
      case 'Server': return <Server className="w-5 h-5 text-[#8B5CF6]" />;
      case 'GitPullRequest': return <GitPullRequest className="w-5 h-5 text-teal-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-pink-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-orange-300" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-indigo-400" />;
      case 'Database': return <Database className="w-5 h-5 text-[#8B5CF6]" />;
      default: return <Layers3 className="w-5 h-5 text-purple-400" />;
    }
  };

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      {/* Background Radial Ambient */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>TECHNICAL PROFICIENCY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Skills & <span className="text-gradient-purple">Tooling</span>
          </motion.h2>

          <p className="text-gray-400 text-sm max-w-2xl mt-3">
            Core technologies and automated devops toolchains used for high-reliability cloud architecture.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-4xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#8B5CF6] text-white font-semibold shadow-lg shadow-purple-950/60 scale-105'
                    : 'bg-white/[0.03] text-gray-400 hover:text-white border border-white/10 hover:border-purple-500/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card glass-card-hover p-5 rounded-2xl border border-white/10 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Glow accent */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all pointer-events-none" />

                <div>
                  {/* Top row with icon & tag */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-purple-500/40 transition-colors">
                      {getIcon(skill.icon)}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.05] text-purple-300 border border-white/10">
                      {skill.tag}
                    </span>
                  </div>

                  {/* Name & description */}
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Proficiency Meter */}
                <div className="mt-5 pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-1.5">
                    <span>Proficiency</span>
                    <span className="text-purple-300 font-bold">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-purple-600 to-indigo-400 rounded-full"
                    />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
