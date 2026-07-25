import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, FileText, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export default function ContactSection({ onOpenResume }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Hi Rohit,

You received a message via your Portfolio Contact Form:

• Sender Name: ${formData.name}
• Sender Email: ${formData.email}

MESSAGE:
${formData.message}

------------------------------------------
Sent to: ${PERSONAL_INFO.email}`;

    // Trigger native mailto dispatch to PERSONAL_INFO.email
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      {/* Background Animated Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-purple-950/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-indigo-950/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-3"
          >
            <Mail className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>LET'S CONNECT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Get In <span className="text-gradient-purple">Touch</span>
          </motion.h2>

          <p className="text-gray-400 text-sm max-w-lg mt-3">
            Open to full-time DevOps & Cloud Engineer roles, internships, and cloud infrastructure consulting.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Quick Action Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col gap-6">
              <h3 className="font-serif text-2xl font-bold text-white">
                Direct Contact
              </h3>

              <p className="text-xs text-gray-300 leading-relaxed">
                Reach out directly via email, phone, or LinkedIn. I respond quickly to recruiter inquiries.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase block">EMAIL ADDRESS</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-medium text-white hover:text-purple-300 transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase block">PHONE NUMBER</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs sm:text-sm font-medium text-white hover:text-purple-300 transition-colors">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyPhone}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase block">LOCATION</span>
                  <span className="text-xs sm:text-sm font-medium text-white">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-colors interactive"
                >
                  <Github className="w-4 h-4 text-purple-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-colors interactive"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Resume CTA */}
              <button
                onClick={onOpenResume}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/40 text-purple-200 hover:text-white text-xs font-semibold transition-all interactive"
              >
                <FileText className="w-4 h-4 text-[#8B5CF6]" />
                <span>Download Official Resume</span>
              </button>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-2xl relative">
              
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                Fill in the form below to send an automated dispatch to my inbox.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center flex flex-col items-center gap-3 my-8"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
                  <h4 className="font-serif text-xl font-bold text-white">Message Transmitted!</h4>
                  <p className="text-xs text-gray-300 max-w-md">
                    Thank you for reaching out. I have received your message and will get back to you promptly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] text-sm text-white placeholder-gray-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-2">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@techcompany.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] text-sm text-white placeholder-gray-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-2">
                      MESSAGE DETAILS *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hi Rohit, we saw your DevOps projects and would love to discuss a Cloud Infrastructure role..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] text-sm text-white placeholder-gray-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-purple-950/50 transition-all duration-300 interactive disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
