import { useState } from 'react';
import { motion } from 'motion/react';
import { FolderGit2, ExternalLink, Github, ArrowUpRight, BookOpen, Layers } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import CaseStudyModal from './CaseStudyModal';

export default function ProjectsSection() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>FEATURED WORK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            DevOps <span className="text-gradient-purple">Projects</span>
          </motion.h2>

          <p className="text-gray-400 text-sm max-w-xl mt-3">
            Production-grade automated pipelines, GitOps workflows, and cloud infrastructure as code architectures.
          </p>
        </div>

        {/* Projects Cards Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card glass-card-hover rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group relative shadow-2xl"
            >
              {/* Image Thumbnail Container with Hover Reveal Zoom */}
              <div className="relative aspect-video overflow-hidden bg-[#121212]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent" />

                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono text-purple-300 flex items-center gap-1.5">
                  <Layers className="w-3 h-3 text-[#8B5CF6]" />
                  <span>PROJECT 0{index + 1}</span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-6">
                
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-purple-400 mt-1">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-300 hover:border-purple-500/40 hover:text-white transition-colors"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons Row */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  
                  {/* Case Study Trigger Modal */}
                  <button
                    onClick={() => setSelectedCaseStudy(project)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:text-white text-xs font-semibold transition-all interactive"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    <span>Case Study</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {/* GitHub Code Link */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs transition-colors interactive"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    {/* Live Demo Link */}
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-semibold transition-colors interactive"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
