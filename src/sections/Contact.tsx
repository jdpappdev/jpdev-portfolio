import React, { useState } from 'react';
import { Linkedin, FileText, Send, CheckCircle2, Copy, AlertCircle, ArrowUpRight, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';

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

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0B0C10] border-t border-[rgba(197,198,199,0.12)]" aria-label="Contact and Inquiries">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Work With Me"
          title={PORTFOLIO_DATA.contact.heading}
          subtitle={PORTFOLIO_DATA.contact.copy}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* AUDIENCE PATH 1: Employment & Hiring Managers */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-surface p-6 sm:p-7 space-y-6">
              
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#66FCF1] mb-1.5">
                  <span>Track 01</span>
                  <span aria-hidden="true" className="text-[#45A29E]">·</span>
                  <span className="text-[rgba(197,198,199,0.9)]">Employment & Contract</span>
                </div>
                <h3 className="font-['Barlow'] font-semibold text-white tracking-tight text-[22px] sm:text-[24px]">
                  Hiring & Frontend Roles
                </h3>
                <p className="font-['Barlow'] text-base text-[#C5C6C7] mt-2 leading-[1.6]">
                  Seeking a frontend developer who approaches problems pragmatically and iterates quickly? Let's connect directly.
                </p>
              </div>

              {/* Direct Email Action with Copy Button */}
              <div className="p-4 rounded-[6px] bg-[#0B0C10] border border-[rgba(197,198,199,0.12)] space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.85)] block">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                    className="text-sm font-mono text-white hover:text-[#66FCF1] transition-colors truncate focus-ring rounded-[6px] py-1"
                  >
                    {PORTFOLIO_DATA.contact.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmailAddress}
                    className="touch-target p-2 rounded-[6px] text-xs text-[#C5C6C7] hover:text-[#66FCF1] hover:bg-[#1F2833] transition-colors focus-ring"
                    aria-label="Copy email address"
                    title="Copy email address"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-[#66FCF1]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Verified Links & Documents */}
              <div className="space-y-3 pt-1">
                
                {/* Résumé status */}
                <div className="p-3.5 rounded-[6px] bg-[#0B0C10] border border-[rgba(197,198,199,0.12)] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-[#45A29E]" aria-hidden="true" />
                    <div>
                      <span className="font-['Barlow'] text-white font-medium block">Résumé Document</span>
                      <span className="text-[rgba(197,198,199,0.8)] text-xs font-mono">{PORTFOLIO_DATA.owner.resumeStatus}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.contact.email}?subject=Resume%20Request%20-%20Jade%20Polo`}
                    className="touch-target px-2 text-xs font-mono text-[#66FCF1] hover:underline focus-ring rounded-[6px]"
                  >
                    Request Copy
                  </a>
                </div>

                {/* LinkedIn Profile */}
                <div className="p-3.5 rounded-[6px] bg-[#0B0C10] border border-[rgba(197,198,199,0.12)] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#45A29E]" aria-hidden="true" />
                    <div>
                      <span className="font-['Barlow'] text-white font-medium block">LinkedIn Profile</span>
                    </div>
                  </div>
                  <a
                    href={PORTFOLIO_DATA.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Jade Polo on LinkedIn (opens in a new tab)"
                    className="touch-target px-2 inline-flex items-center gap-1 text-xs font-mono text-[#66FCF1] hover:underline focus-ring rounded-[6px]"
                  >
                    <span>View</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

              </div>

              <div className="pt-2 text-xs font-mono text-[rgba(197,198,199,0.8)] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#45A29E]" aria-hidden="true" />
                <span>Response window: Typically within 24–48 hours</span>
              </div>

            </div>
          </div>

          {/* AUDIENCE PATH 2: Freelance & Product Prototypes Form */}
          <div className="lg:col-span-7">
            <div className="card-surface p-6 sm:p-8 relative">
              
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#66FCF1] mb-1.5">
                  <span>Track 02</span>
                  <span aria-hidden="true" className="text-[#45A29E]">·</span>
                  <span className="text-[rgba(197,198,199,0.9)]">Freelance & Independent Projects</span>
                </div>
                <h3 className="font-['Barlow'] font-semibold text-white tracking-tight text-[22px] sm:text-[24px]">
                  Project Inquiry
                </h3>
                <p className="font-['Barlow'] text-base text-[#C5C6C7] mt-1 leading-[1.6]">
                  Have an application idea, prototype, or interface workflow that needs dedicated building? Share details below.
                </p>
              </div>

              {/* Integration Boundary Notice */}
              <div className="mb-6 p-3.5 rounded-[6px] bg-[#0B0C10] border border-[rgba(197,198,199,0.12)] flex items-start gap-3 text-xs">
                <AlertCircle className="w-4 h-4 text-[#45A29E] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1">
                  <span className="font-['Barlow'] font-semibold text-white">Integration Status Notice:</span>
                  <p className="font-['Barlow'] text-xs text-[#C5C6C7] leading-relaxed">
                    This standalone frontend does not transmit unseen background requests to an unconfigured server. Completing this form validates your inquiry and prepares it for direct dispatch via your email client or clipboard.
                  </p>
                </div>
              </div>

              {/* Prepared Submission Screen */}
              {preparedSubmission ? (
                <div className="space-y-5 p-5 rounded-[6px] bg-[#0B0C10] border border-[rgba(197,198,199,0.12)]">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#66FCF1]">
                    <CheckCircle2 className="w-5 h-5 text-[#66FCF1]" aria-hidden="true" />
                    <span className="font-['Barlow']">Inquiry Validated & Formatted</span>
                  </div>

                  <p className="font-['Barlow'] text-xs text-[#C5C6C7] leading-relaxed">
                    Your inquiry has been structured. Choose how you'd like to transmit it to Jade:
                  </p>

                  <div className="p-3.5 rounded-[6px] bg-[#1F2833] border border-[rgba(197,198,199,0.12)] font-mono text-xs text-[#C5C6C7] whitespace-pre-wrap max-h-48 overflow-y-auto">
                    {preparedSubmission}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={sendViaMailto}
                      className="touch-target inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] bg-[#66FCF1] text-[#0B0C10] font-['Barlow'] font-semibold text-xs hover:bg-[#66FCF1]/90 transition-colors focus-ring"
                    >
                      <Send className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Open in Email Client (mailto)</span>
                    </button>

                    <button
                      type="button"
                      onClick={copyToClipboard}
                      className="touch-target inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] bg-[#1F2833] text-white border border-[rgba(197,198,199,0.12)] font-['Barlow'] font-medium text-xs hover:bg-[#263241] transition-colors focus-ring"
                    >
                      {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-[#66FCF1]" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied to Clipboard' : 'Copy Inquiry Text'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPreparedSubmission(null)}
                      className="touch-target px-3 py-2 text-xs font-mono text-[#C5C6C7] hover:text-white underline focus-ring rounded-[6px]"
                    >
                      Edit Fields
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form with Strict Accessibility and Validation */
                <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.85)] mb-1.5">
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
                      className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-[6px] bg-[#0B0C10] border text-white font-['Barlow'] text-base placeholder-[#C5C6C7]/30 transition-colors focus-ring ${
                        errors.name ? 'border-red-400' : 'border-[rgba(197,198,199,0.12)] focus:border-[#66FCF1]'
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
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.85)] mb-1.5">
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
                      className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-[6px] bg-[#0B0C10] border text-white font-['Barlow'] text-base placeholder-[#C5C6C7]/30 transition-colors focus-ring ${
                        errors.email ? 'border-red-400' : 'border-[rgba(197,198,199,0.12)] focus:border-[#66FCF1]'
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
                      <label htmlFor="contact-type" className="block text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.85)] mb-1.5">
                        Project Type
                      </label>
                      <select
                        id="contact-type"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[6px] bg-[#0B0C10] border border-[rgba(197,198,199,0.12)] text-white font-['Barlow'] text-base focus:border-[#66FCF1] transition-colors focus-ring"
                      >
                        <option value="Product Prototype">Digital Product Prototype</option>
                        <option value="Frontend Implementation">Frontend UI Implementation</option>
                        <option value="Workflow & Form Design">Workflow / Form Usability</option>
                        <option value="Technical Collaboration">Other Exploration</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-timeline" className="block text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.85)] mb-1.5">
                        Target Timeline (Optional)
                      </label>
                      <input
                        id="contact-timeline"
                        name="timeline"
                        type="text"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        placeholder="e.g. 2–4 weeks, flexible"
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[6px] bg-[#0B0C10] border border-[rgba(197,198,199,0.12)] text-white font-['Barlow'] text-base placeholder-[#C5C6C7]/30 focus:border-[#66FCF1] transition-colors focus-ring"
                      />
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="contact-desc" className="block text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.85)] mb-1.5">
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
                      className={`w-full px-3.5 py-2.5 rounded-[6px] bg-[#0B0C10] border text-white font-['Barlow'] text-base placeholder-[#C5C6C7]/30 transition-colors focus-ring ${
                        errors.description ? 'border-red-400' : 'border-[rgba(197,198,199,0.12)] focus:border-[#66FCF1]'
                      }`}
                    />
                    {errors.description && (
                      <p id="desc-error" className="mt-1 text-xs text-red-400 font-mono" role="alert">
                        {errors.description}
                      </p>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs font-mono text-[rgba(197,198,199,0.8)]">
                      * Required fields
                    </span>
                    <button
                      type="submit"
                      className="touch-target inline-flex items-center gap-2 px-6 py-3 rounded-[6px] bg-[#66FCF1] text-[#0B0C10] font-['Barlow'] font-semibold text-sm hover:bg-[#66FCF1]/90 transition-colors focus-ring shadow-sm"
                    >
                      <span>Prepare Project Inquiry</span>
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
