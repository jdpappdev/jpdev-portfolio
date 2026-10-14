/**
 * Portfolio Content Data Source
 * Centralized content file to keep text, project records, skills, and configuration
 * separate from React presentation components.
 */

export type ImageStatus = 'screenshot' | 'placeholder';

export interface ProjectVideo {
  src: string;
  poster?: string;
  title: string;
  aspect?: string;
  label?: string;
  description?: string;
}

export interface ProjectImageEntry {
  id: string;
  slot: 'primary' | 'workflow' | 'supporting';
  label: string;
  src: string;
  srcSet?: string;
  width?: number;
  height?: number;
  alt: string;
  caption?: string;
  status: ImageStatus;
  frame?: 'desktop' | 'mobile' | 'none';
}

export interface ProjectVisualSlots {
  primary: ProjectImageEntry;
  workflow?: ProjectImageEntry;
  supporting?: ProjectImageEntry;
}

export interface ProjectData {
  id: string;
  name: string;
  tagline?: string;
  category: string;
  description: string;
  focus: string;
  statusText: string;
  statusBadge: string;
  contextNotes: string;
  contribution: string;
  reportedFeatures?: string[];
  workflowStages?: { step: string; title: string; detail: string }[];
  ctaText: string;
  visualSlots: ProjectVisualSlots;
  hasScreenshots: boolean;
  aspectRatio?: '16/10' | '16/9' | '4/3' | '1/1';
  video?: ProjectVideo;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const CONTACT_DETAILS = {
  email: 'jdpolo.1218@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jade-polo-a46833411',
};

export const PORTFOLIO_DATA = {
  owner: {
    name: 'Jade Polo',
    title: 'Frontend Developer · AI-Assisted Product Builder',
    businessBrand: 'Blueprint',
    brandDescriptor: 'Independent digital product development.',
    brandPromise: 'From real-world problems to practical digital products.',
    email: CONTACT_DETAILS.email,
    linkedinUrl: CONTACT_DETAILS.linkedin,
    resumeUrl: '', // Available upon request
    resumeStatus: 'Available upon request',
    location: 'Available for Remote & Freelance Projects',
  },

  hero: {
    eyebrow: 'INDEPENDENT DEVELOPER · BLUEPRINT',
    headline: 'From real-world problems to practical digital products.',
    supportingCopy:
      'I build practical web interfaces and digital product prototypes using frontend development, thoughtful problem-solving, and AI-assisted workflows.',
    secondaryCopy:
      'I focus on turning ideas and everyday challenges into clear, usable digital experiences—and improving them through iteration.',
    primaryCta: 'Explore My Projects',
    secondaryCta: "Let's Work Together",
  },

  projects: [
    {
      id: 'assured-capture',
      name: 'Assured Capture',
      category: 'Field Inspection & Reporting',
      description:
        'A digital product focused on organizing field-inspection workflows, documenting issues and evidence, and supporting structured reporting and review.',
      focus: 'Product workflows, interface structure, and practical application design.',
      statusText: 'Project details and implementation evidence to be documented.',
      statusBadge: 'Documentation In Progress',
      contextNotes:
        'The product is associated with field-inspection workflows, issues, evidence, and reporting. Presented as project context and architectural direction, not as proof that every feature is currently deployed.',
      contribution:
        'Designed and built independently with AI assistance. Focused on mapping out multi-step inspection workflows, clear evidence capture states, and structured report summaries.',
      workflowStages: [
        {
          step: '01',
          title: 'Field Setup & Inspection Scoping',
          detail: 'Configuring property or asset inspection parameters before on-site capture begins.',
        },
        {
          step: '02',
          title: 'Evidence & Issue Logging',
          detail: 'Documenting identified anomalies with location coordinates, photo proof, and categorized tags.',
        },
        {
          step: '03',
          title: 'Verification & Structured Export',
          detail: 'Compiling findings into standardized, verifiable summaries for auditing and client review.',
        },
      ],
      ctaText: 'Explore Project',
      hasScreenshots: false,
      aspectRatio: '16/10',
      video: {
        src: '/assets/projects/assured-capture-walkthrough.mp4',
        poster: '',
        title: 'Assured Capture, presentation video',
        aspect: '1/1',
        label: 'Presentation video featuring screens from the app',
        description: 'Inspection report with an issues list, and issue details with photo evidence.',
      },
      visualSlots: {
        primary: {
          id: 'ac-primary',
          slot: 'primary',
          label: 'Primary Interface',
          src: '',
          alt: 'Primary interface screenshot coming soon',
          caption: 'Main inspection dashboard',
          status: 'placeholder',
          frame: 'mobile',
        },
        workflow: {
          id: 'ac-workflow',
          slot: 'workflow',
          label: 'Key Workflow',
          src: '',
          alt: 'Key workflow screenshot coming soon',
          caption: 'Report overview',
          status: 'placeholder',
          frame: 'mobile',
        },
        supporting: {
          id: 'ac-supporting',
          slot: 'supporting',
          label: 'Supporting Screen',
          src: '',
          alt: 'Supporting screen screenshot coming soon',
          caption: 'Evidence logger',
          status: 'placeholder',
          frame: 'mobile',
        },
      },
    },
    {
      id: 'deaf-contact-record',
      name: 'Deaf Contact Record',
      tagline: 'Organize. Connect. Serve.',
      category: 'Contact & Ministry Organization',
      description:
        'A cross-platform working prototype designed to organize contact information, visit histories, territories, and follow-ups in one application.',
      focus: 'Contact management, connected records, location access, and practical workflows.',
      statusText: 'Working prototype with reported functionality across core record-management features.',
      statusBadge: 'Working Prototype',
      contextNotes:
        'These feature areas are reported as implemented or demonstrable in prototype testing. Presented accurately without added commercial or production-readiness claims.',
      contribution: 'Designed and built independently with AI assistance.',
      reportedFeatures: [
        'Contact profiles and photos',
        'Visit records and conversation notes',
        'Territory organization',
        'Follow-up tracking',
        'Map access',
        'Direct Messenger access',
        'Sharing records across devices',
      ],
      ctaText: 'Explore Project',
      hasScreenshots: false,
      aspectRatio: '16/10',
      video: {
        src: '/assets/projects/deaf-contact-record-walkthrough.mp4',
        poster: '',
        title: 'Deaf Contact Record, presentation video',
        aspect: '1/1',
        label: 'Presentation video featuring screens from the app',
        description: 'Contact list with filter and search, and a territory map with pins.',
      },
      visualSlots: {
        primary: {
          id: 'dcr-primary',
          slot: 'primary',
          label: 'Primary Interface',
          src: '',
          alt: 'Primary interface screenshot coming soon',
          caption: 'Home dashboard',
          status: 'placeholder',
          frame: 'mobile',
        },
        workflow: {
          id: 'dcr-workflow',
          slot: 'workflow',
          label: 'Key Workflow',
          src: '',
          alt: 'Key workflow screenshot coming soon',
          caption: 'Contact profile view',
          status: 'placeholder',
          frame: 'mobile',
        },
        supporting: {
          id: 'dcr-supporting',
          slot: 'supporting',
          label: 'Supporting Screen',
          src: '',
          alt: 'Supporting screen screenshot coming soon',
          caption: 'Territory map view',
          status: 'placeholder',
          frame: 'mobile',
        },
      },
    },
  ] as ProjectData[],

  skills: [
    {
      id: 'frontend-dev',
      title: 'Frontend Development',
      description:
        'Building clear, responsive interfaces with an emphasis on usability, consistency, and maintainable components.',
    },
    {
      id: 'ui-implementation',
      title: 'UI Implementation',
      description:
        'Translating product requirements and interface designs into practical web experiences.',
    },
    {
      id: 'ui-structure',
      title: 'UI Structure and Usability',
      description:
        'Organizing complex workflows, multi-step forms, and data views into logical, accessible hierarchy.',
    },
    {
      id: 'ai-assisted-dev',
      title: 'AI-Assisted Development',
      description:
        'Using AI tools to accelerate development, explore solutions, and iterate while reviewing the resulting implementation.',
    },
    {
      id: 'problem-solving',
      title: 'Product Problem-Solving',
      description:
        'Breaking real-world problems into manageable requirements, workflows, and interface decisions.',
    },
  ] as SkillCategory[],

  skillsNotice:
    'Specific languages, frameworks, databases, and tools will be listed after verification. Distinguishing practical familiarity and workflow approach from premature seniority claims.',

  portfolioStackNotes: [
    { label: 'Architecture', value: 'Component-driven React 19 SPA with TypeScript' },
    { label: 'Styling System', value: 'Tailwind CSS v4 with bespoke Blueprint tokens' },
    { label: 'Build & Tooling', value: 'Vite 8, standard ES2022 bundling' },
    { label: 'Accessibility', value: 'WCAG 2.2 AA target, semantic landmarks, keyboard focus management' },
  ],

  process: [
    {
      number: '01',
      title: 'Understand',
      description: 'Clarify the problem, the intended users, and what the solution needs to accomplish.',
    },
    {
      number: '02',
      title: 'Plan',
      description: 'Define the workflow, requirements, and the most important features.',
    },
    {
      number: '03',
      title: 'Build',
      description: 'Implement the interface and integrate the necessary functionality within the project’s scope.',
    },
    {
      number: '04',
      title: 'Test',
      description: 'Check the experience, identify issues, and verify expected behavior.',
    },
    {
      number: '05',
      title: 'Refine',
      description: 'Improve the product based on testing, feedback, and lessons learned.',
    },
  ] as ProcessStep[],

  about: {
    heading: 'Practical solutions. Thoughtful development.',
    bodyParagraphs: [
      "I'm an independent developer focused on building useful digital products and improving my craft through hands-on projects.",
      'I combine frontend development, product thinking, and AI-assisted workflows to explore solutions to practical problems. I value clear structure, maintainable implementation, and honest evaluation over adding complexity for its own sake.',
      'Through Blueprint, I develop projects that help me turn ideas into working digital experiences while continuously improving my technical and problem-solving skills.',
    ],
  },

  contact: {
    email: CONTACT_DETAILS.email,
    linkedin: CONTACT_DETAILS.linkedin,
    heading: 'Have an idea or a workflow that needs improvement?',
    copy: "If you're hiring a frontend developer or looking for someone to help shape and build a practical digital product, I'd like to hear what you're working on.",
    primaryCta: 'Discuss a Project',
    secondaryCta: 'Contact Me',
  },

  navLinks: [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
};
