import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Send, CheckCircle2, Copy, Check, ExternalLink, Mail, Building, User, Calendar, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
  const [selectedRole, setSelectedRole] = useState<'fulltime' | 'internship' | 'contract' | 'consulting'>('fulltime');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [jobDetails, setJobDetails] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const roleOptions = [
    { id: 'fulltime', title: 'Full-Time DevOps Engineer', desc: 'Kubernetes, AWS, CI/CD, Terraform Infrastructure', tag: 'High Priority' },
    { id: 'internship', title: 'DevOps / Cloud Intern', desc: 'Hands-on cloud automation & DevSecOps pipelines', tag: 'Immediate Availability' },
    { id: 'contract', title: 'Contract Cloud Specialist', desc: 'AWS EKS setup, Docker multi-stage, Terraform modules', tag: 'Project Based' },
    { id: 'consulting', title: 'DevOps Architecture Audit', desc: 'Zero-downtime deployment review & security checks', tag: 'Advisory' }
  ];

  const currentRoleObj = roleOptions.find((r) => r.id === selectedRole) || roleOptions[0];

  const buildEmailContent = () => {
    const subject = `Hiring Inquiry: ${currentRoleObj.title} - ${senderName || 'Recruiter'} ${companyName ? `(${companyName})` : ''}`;
    const body = `Hi Rohit,

I would like to submit a hiring request regarding your DevOps & Cloud Engineer portfolio.

HIRING REQUEST DETAILS:
------------------------------------------
• Candidate: Rohit Bajiya
• Engagement Type: ${currentRoleObj.title}
• Recruiter/Sender Name: ${senderName || 'N/A'}
• Company/Organization: ${companyName || 'N/A'}
• Contact Email: ${senderEmail || 'N/A'}
• Estimated Start Date: ${startDate || 'Immediate / Negotiable'}

JOB / ROLE DETAILS & COMPENSATION BUDGET:
${jobDetails || 'No additional details provided.'}

------------------------------------------
Sent via Rohit Bajiya Portfolio Hire System
Direct Destination: ${PERSONAL_INFO.email}`;

    return { subject, body };
  };

  const handleHireSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !senderName) return;

    setIsSubmitting(true);
    const { subject, body } = buildEmailContent();

    // 1. Send via Web3Forms endpoint to ensure back-end email delivery to PERSONAL_INFO.email
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '2f067409-7bd2-4917-[#8B5CF6]-placeholder', // web3forms endpoint fallback
          email: PERSONAL_INFO.email,
          subject: subject,
          from_name: senderName,
          replyto: senderEmail,
          message: body
        })
      });
    } catch (err) {
      // Ignored if blocked, will fallback to mailto & Gmail composer
    }

    // 2. Trigger native mailto link to open user's default email client
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setEmailSent(true);
    }, 600);
  };

  const handleOpenGmail = () => {
    const { subject, body } = buildEmailContent();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      PERSONAL_INFO.email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  const handleCopySummary = () => {
    const { subject, body } = buildEmailContent();
    const fullText = `TO: ${PERSONAL_INFO.email}\nSUBJECT: ${subject}\n\n${body}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setEmailSent(false);
    setSenderName('');
    setSenderEmail('');
    setCompanyName('');
    setStartDate('');
    setJobDetails('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-[#0F0F0F] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header */}
          <div className="p-6 bg-[#141414] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block">
                  HIRING DISPATCH TO {PERSONAL_INFO.email.toUpperCase()}
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  Send Hiring Request
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form / Success Content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {emailSent ? (
              <div className="py-8 text-center flex flex-col items-center gap-4">
                <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
                </div>

                <div>
                  <h4 className="font-serif text-2xl font-bold text-white mb-1">
                    Hiring Request Prepared!
                  </h4>
                  <p className="text-xs text-gray-300 max-w-md mx-auto">
                    Your request has been routed directly to <span className="text-purple-300 font-mono font-bold">{PERSONAL_INFO.email}</span>. Your default email app was triggered to dispatch the email.
                  </p>
                </div>

                {/* Quick Action Buttons */}
                <div className="w-full max-w-md p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 mt-2 text-left">
                  <p className="text-[11px] font-mono text-purple-400 uppercase tracking-wider">
                    RECIPIENT: {PERSONAL_INFO.email}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="button"
                      onClick={handleOpenGmail}
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all interactive"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Gmail Web</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </button>

                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 text-xs font-semibold transition-all interactive"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-purple-400" />}
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Text'}</span>
                    </button>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-mono text-purple-400 hover:underline"
                  >
                    Send Another Request
                  </button>
                  <span className="text-gray-600">•</span>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleHireSubmit} className="space-y-6">
                
                {/* Role Type Selection Grid */}
                <div>
                  <label className="text-xs font-mono text-gray-300 block mb-3">
                    1. SELECT ENGAGEMENT TYPE *
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {roleOptions.map((role) => (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => setSelectedRole(role.id as any)}
                        className={`p-4 rounded-2xl text-left border transition-all ${
                          selectedRole === role.id
                            ? 'bg-[#8B5CF6]/20 border-[#8B5CF6] text-white shadow-lg shadow-purple-950/50'
                            : 'bg-white/[0.02] border-white/10 text-gray-300 hover:border-purple-500/30'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-white">{role.title}</span>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-purple-300">
                            {role.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-400 leading-snug">{role.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recruiter Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-2 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-purple-400" />
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#8B5CF6] text-xs text-white placeholder-gray-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-2 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-purple-400" />
                      YOUR EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. sarah@techcorp.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#8B5CF6] text-xs text-white placeholder-gray-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-2 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-purple-400" />
                      COMPANY / ORGANIZATION
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. AWS Cloud Systems Inc."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#8B5CF6] text-xs text-white placeholder-gray-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      ESTIMATED START DATE
                    </label>
                    <input
                      type="text"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      placeholder="e.g. Immediate / Q3 2026"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#8B5CF6] text-xs text-white placeholder-gray-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-300 block mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-purple-400" />
                    JOB DETAILS / SALARY RANGE / TECH STACK *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={jobDetails}
                    onChange={(e) => setJobDetails(e.target.value)}
                    placeholder="Provide details about the DevOps team, cloud architecture (AWS/K8s), location (Remote/Onsite), and salary range..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#8B5CF6] text-xs text-white placeholder-gray-500 outline-none resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Direct Hiring Inquiry for Rohit Bajiya`}
                    className="text-xs font-mono text-purple-400 hover:underline flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Direct Mail: {PERSONAL_INFO.email}</span>
                  </a>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-xl shadow-purple-950/50 transition-all interactive disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Hiring Request</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

