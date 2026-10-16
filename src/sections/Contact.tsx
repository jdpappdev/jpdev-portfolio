import React, { useState } from 'react';
import { Linkedin, FileText, Send, CheckCircle2, Copy, ArrowUpRight, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { useReveal } from '../hooks/useReveal';

interface FormState {
  name: string;
  email: string;
  projectType: string;
  description: string;
  timeline: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  description?: string;
}

export const Contact: React.FC = () => {
  const containerRef = useReveal();

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    projectType: 'Product Prototype',
    description: '',
    timeline: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [preparedSubmission, setPreparedSubmission] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name or organization.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide a valid email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format (e.g., name@domain.com).';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please include a brief description of the project or opportunity.';
    } else if (formData.description.trim().length < 15) {
      newErrors.description = 'Please share at least a sentence or two (minimum 15 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const textSummary = `[BLUEPRINT PROJECT INQUIRY]
From: ${formData.name} (${formData.email})
Category: ${formData.projectType}
Timeline: ${formData.timeline || 'Not specified'}

Project Description:
${formData.description}`;

    setPreparedSubmission(textSummary);
  };

  const copyToClipboard = () => {
    if (!preparedSubmission) return;
    navigator.clipboard.writeText(preparedSubmission);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const copyEmailAddress = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const sendViaMailto = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} (${formData.name})`);
    const body = encodeURIComponent(
      `Hello Jade,\n\nI'm reaching out regarding a project inquiry:\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nTimeline: ${formData.timeline || 'Flexible'}\n\nProject Scope:\n${formData.description}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-20 md:py-28 bg-[var(--layer-1)] border-t border-[rgba(197,198,199,0.10)] relative scroll-mt-24"
      aria-label="Contact and Inquiries"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Work With Me"
          title={PORTFOLIO_DATA.contact.heading}
          subtitle={PORTFOLIO_DATA.contact.copy}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* AUDIENCE PATH 1: Employment & Hiring Managers */}
          <div className="lg:col-span-5 space-y-6 reveal-item" data-stagger-index="0">
            
            {/* Direct Email: Primary Element, Full-Width Raised Row */}
            <div className="p-6 sm:p-7 rounded-[24px] bg-[var(--layer-2)] border border-[rgba(197,198,199,0.10)] shadow-[var(--shadow-2)] space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#66FCF1] mb-2">
                  <span>Track 01</span>
                  <span aria-hidden="true" className="text-[#45A29E]">·</span>
                  <span className="text-[rgba(197,198,199,0.9)]">Direct Engagement</span>
                </div>
                <h3 className="font-['Barlow'] font-semibold text-white tracking-tight text-[22px] sm:text-[24px]">
                  Hiring & Frontend Roles
                </h3>
                <p className="font-['Barlow'] text-base text-[var(--text)] mt-2 leading-[1.6]">
                  Seeking a frontend developer who approaches problems pragmatically and iterates quickly? Let's connect directly.
                </p>
              </div>

              {/* Direct Email Row: Larger (mono 20px), Full-Width Raised */}
              <div className="p-4 sm:p-5 rounded-[16px] bg-[var(--layer-3)] border border-[rgba(197,198,199,0.12)] shadow-[var(--shadow-1)] space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.85)] block">
                  Direct Email
                </span>
                
                <div className="flex flex-col gap-3">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                    className="font-mono text-[15px] sm:text-[20px] font-semibold text-white hover:text-[#66FCF1] transition-colors break-all focus-ring rounded-[12px] py-1"
                  >
                    {PORTFOLIO_DATA.contact.email}
                  </a>

                  <button
                    type="button"
                    onClick={copyEmailAddress}
                    className="touch-target min-h-[44px] px-3.5 py-2 rounded-[12px] bg-[var(--layer-2)] border border-[rgba(197,198,199,0.15)] hover:border-[#66FCF1] text-xs font-mono text-[#C5C6C7] hover:text-[#66FCF1] transition-all flex items-center justify-center gap-2 shrink-0 focus-ring cursor-pointer"
                    aria-label="Copy email address"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-[#66FCF1]" aria-hidden="true" />
                        <span className="text-[#66FCF1] font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div aria-live="polite" className="sr-only">
                  {copiedEmail ? 'Email address copied to clipboard' : ''}
                </div>
              </div>

              {/* Raised Link Rows with Icon Chips for Résumé and LinkedIn */}
              <div className="space-y-3 pt-1">
                {/* Résumé Status Row */}
                <div className="p-4 rounded-[16px] bg-[var(--layer-3)] border border-[rgba(197,198,199,0.12)] shadow-[var(--shadow-1)] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-[12px] bg-[var(--layer-2)] shadow-[var(--edge)] border border-[rgba(197,198,199,0.10)] flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-[#45A29E]" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="font-['Barlow'] text-white font-medium text-sm block">
                        Résumé Document
                      </span>
                      <span className="text-[rgba(197,198,199,0.8)] text-xs font-mono">
                        {PORTFOLIO_DATA.owner.resumeStatus}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`mailto:${PORTFOLIO_DATA.contact.email}?subject=Resume%20Request%20-%20Jade%20Polo`}
                    className="touch-target min-h-[44px] px-3 inline-flex items-center text-xs font-mono text-[#66FCF1] hover:underline focus-ring rounded-[12px]"
                  >
                    Request Copy
                  </a>
                </div>

                {/* LinkedIn Profile Row */}
                <div className="p-4 rounded-[16px] bg-[var(--layer-3)] border border-[rgba(197,198,199,0.12)] shadow-[var(--shadow-1)] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-[12px] bg-[var(--layer-2)] shadow-[var(--edge)] border border-[rgba(197,198,199,0.10)] flex items-center justify-center shrink-0">
                      <Linkedin className="w-5 h-5 text-[#45A29E]" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="font-['Barlow'] text-white font-medium text-sm block">
                        LinkedIn Profile
                      </span>
                      <span className="text-[rgba(197,198,199,0.8)] text-xs font-mono">
                        Professional Network
                      </span>
                    </div>
                  </div>

                  <a
                    href={PORTFOLIO_DATA.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Jade Polo on LinkedIn (opens in a new tab)"
                    className="touch-target min-h-[44px] px-3 inline-flex items-center gap-1.5 text-xs font-mono text-[#66FCF1] hover:underline focus-ring rounded-[12px]"
                  >
                    <span>View</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="pt-1 text-xs font-mono text-[rgba(197,198,199,0.8)] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#45A29E]" aria-hidden="true" />
                <span>Response window: Typically within 24–48 hours</span>
              </div>

            </div>
          </div>

          {/* AUDIENCE PATH 2: Freelance & Product Prototypes Form */}
          <div className="lg:col-span-7 reveal-item" data-stagger-index="1">
            <div
              onMouseMove={handleMouseMove}
              className="interactive-card card-spotlight p-6 sm:p-8 rounded-[24px] bg-[var(--layer-2)] border border-[rgba(197,198,199,0.10)] shadow-[var(--shadow-2)]"
            >
              <div className="spotlight-layer" aria-hidden="true" />

              <div className="relative z-10">
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#66FCF1] mb-2">
                    <span>Track 02</span>
                    <span aria-hidden="true" className="text-[#45A29E]">·</span>
                    <span className="text-[rgba(197,198,199,0.9)]">Freelance & Independent Projects</span>
                  </div>
                  <h3 className="font-['Barlow'] font-semibold text-white tracking-tight text-[22px] sm:text-[24px]">
                    Project Inquiry
                  </h3>
                  <p className="font-['Barlow'] text-base text-[var(--text)] mt-1.5 leading-[1.6]">
                    Have an application idea, prototype, or interface workflow that needs dedicated building? Share details below.
                  </p>
                </div>

                {/* Prepared Submission Screen */}
                {preparedSubmission ? (
                  <div className="space-y-5 p-6 rounded-[20px] bg-[#0B0C10] border border-[rgba(197,198,199,0.12)] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#66FCF1]">
                      <CheckCircle2 className="w-5 h-5 text-[#66FCF1]" aria-hidden="true" />
                      <span className="font-['Barlow'] text-base">Inquiry Validated & Formatted</span>
                    </div>

                    <p className="font-['Barlow'] text-xs sm:text-sm text-[var(--text)] leading-relaxed">
                      Your inquiry has been structured. Choose how you'd like to transmit it to Jade:
                    </p>

                    <div className="p-4 rounded-[12px] bg-[var(--layer-2)] border border-[rgba(197,198,199,0.12)] font-mono text-xs text-[var(--text)] whitespace-pre-wrap max-h-48 overflow-y-auto">
                      {preparedSubmission}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={sendViaMailto}
                        className="touch-target inline-flex items-center gap-2 px-5 py-3 rounded-[12px] bg-[#66FCF1] text-[#0B0C10] font-['Barlow'] font-semibold text-xs sm:text-sm shadow-[var(--shadow-1)] hover:shadow-[var(--glow-accent)] hover:bg-[#66FCF1]/90 transition-all focus-ring cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Open in Email Client (mailto)</span>
                      </button>

                      <button
                        type="button"
                        onClick={copyToClipboard}
                        className="touch-target inline-flex items-center gap-2 px-5 py-3 rounded-[12px] bg-[var(--layer-3)] text-white border border-[rgba(197,198,199,0.15)] font-['Barlow'] font-medium text-xs sm:text-sm hover:border-[#66FCF1] transition-all focus-ring cursor-pointer"
                      >
                        {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-[#66FCF1]" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Copied to Clipboard' : 'Copy Inquiry Text'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPreparedSubmission(null)}
                        className="touch-target px-3 py-2 text-xs font-mono text-[var(--text)] hover:text-white underline focus-ring rounded-[12px] cursor-pointer"
                      >
                        Edit Fields
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Interactive Form with Strict Accessibility and Inset Shadows */
                  <form onSubmit={handleFormSubmit} noValidate className="space-y-5">
                    
                    {/* Name field */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.85)] mb-2">
                        Your Name or Organization <span className="text-[#66FCF1]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        placeholder="e.g. Alex Rivera · Studio Alpha"
                        className={`w-full min-h-[44px] px-4 py-2.5 rounded-[12px] bg-[#0B0C10] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border text-white font-['Barlow'] text-base placeholder-[#C5C6C7]/30 transition-all focus:border-[#66FCF1] focus:outline-none focus:ring-0 focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_0_0_3px_rgba(102,252,241,0.18)] ${
                          errors.name ? 'border-red-400' : 'border-[rgba(197,198,199,0.12)]'
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-400 font-mono" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email field */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.85)] mb-2">
                        Your Email Address <span className="text-[#66FCF1]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        placeholder="e.g. alex@example.com"
                        className={`w-full min-h-[44px] px-4 py-2.5 rounded-[12px] bg-[#0B0C10] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border text-white font-['Barlow'] text-base placeholder-[#C5C6C7]/30 transition-all focus:border-[#66FCF1] focus:outline-none focus:ring-0 focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_0_0_3px_rgba(102,252,241,0.18)] ${
                          errors.email ? 'border-red-400' : 'border-[rgba(197,198,199,0.12)]'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-400 font-mono" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Project Type & Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-type" className="block text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.85)] mb-2">
                          Project Type
                        </label>
                        <select
                          id="contact-type"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full min-h-[44px] px-4 py-2.5 rounded-[12px] bg-[#0B0C10] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-[rgba(197,198,199,0.12)] text-white font-['Barlow'] text-base transition-all focus:border-[#66FCF1] focus:outline-none focus:ring-0 focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_0_0_3px_rgba(102,252,241,0.18)] cursor-pointer"
                        >
                          <option value="Product Prototype">Digital Product Prototype</option>
                          <option value="Frontend Implementation">Frontend UI Implementation</option>
                          <option value="Workflow & Form Design">Workflow / Form Usability</option>
                          <option value="Technical Collaboration">Other Exploration</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="contact-timeline" className="block text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.85)] mb-2">
                          Target Timeline (Optional)
                        </label>
                        <input
                          id="contact-timeline"
                          name="timeline"
                          type="text"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          placeholder="e.g. 2–4 weeks, flexible"
                          className="w-full min-h-[44px] px-4 py-2.5 rounded-[12px] bg-[#0B0C10] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-[rgba(197,198,199,0.12)] text-white font-['Barlow'] text-base placeholder-[#C5C6C7]/30 transition-all focus:border-[#66FCF1] focus:outline-none focus:ring-0 focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_0_0_3px_rgba(102,252,241,0.18)]"
                        />
                      </div>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label htmlFor="contact-desc" className="block text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.85)] mb-2">
                        Project Description & Requirements <span className="text-[#66FCF1]">*</span>
                      </label>
                      <textarea
                        id="contact-desc"
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleInputChange}
                        aria-required="true"
                        aria-invalid={!!errors.description}
                        aria-describedby={errors.description ? 'desc-error' : undefined}
                        placeholder="Describe what problem you're trying to solve, current project state, or key workflows needed..."
                        className={`w-full px-4 py-3 rounded-[12px] bg-[#0B0C10] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border text-white font-['Barlow'] text-base placeholder-[#C5C6C7]/30 transition-all focus:border-[#66FCF1] focus:outline-none focus:ring-0 focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_0_0_3px_rgba(102,252,241,0.18)] ${
                          errors.description ? 'border-red-400' : 'border-[rgba(197,198,199,0.12)]'
                        }`}
                      />
                      {errors.description && (
                        <p id="desc-error" className="mt-1 text-xs text-red-400 font-mono" role="alert">
                          {errors.description}
                        </p>
                      )}
                    </div>

                    {/* Submit CTA */}
                    <div className="pt-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <span className="text-xs font-mono text-[rgba(197,198,199,0.8)]">
                          * Required fields
                        </span>
                        <button
                          type="submit"
                          className="touch-target inline-flex items-center justify-center gap-2 px-7 py-3 rounded-[12px] bg-[#66FCF1] text-[#0B0C10] font-['Barlow'] font-semibold text-sm shadow-[var(--shadow-1)] hover:shadow-[var(--glow-accent)] hover:bg-[#66FCF1]/95 transition-all focus-ring cursor-pointer"
                        >
                          <span>Prepare Project Inquiry</span>
                          <Send className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </div>

                      {/* Single Plain Line Replacing the Notice Block */}
                      <p className="font-mono text-xs text-[var(--text)] mt-4 pt-3 border-t border-[rgba(197,198,199,0.10)]">
                        This form prepares your message to send from your email app, or to copy.
                      </p>
                    </div>

                  </form>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
