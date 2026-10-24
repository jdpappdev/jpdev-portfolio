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
  liveUrl?: string;
  sourceUrl?: string;
  technologies?: string[];
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
  email: (import.meta.env?.VITE_CONTACT_EMAIL as string) || 'jdpolo.1218@gmail.com',
  linkedin: (import.meta.env?.VITE_LINKEDIN_URL as string) || 'https://linkedin.com/in/jade-polo',
  github: (import.meta.env?.VITE_GITHUB_URL as string) || 'https://github.com/jdpappdev',
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
    githubUrl: CONTACT_DETAILS.github,
    resumeUrl: '', // Available upon request
    resumeStatus: 'Available upon request',
    location: 'Available for Remote & Freelance Projects',
    portrait: {
      src: '',
      alt: 'Portrait of Jade Polo, Frontend Developer',
    },
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
      id: 'plotline',
      name: 'Plotline',
      tagline: 'Studio Management Workspace',
      category: 'Studio Management & Project Workspace',
      description:
        'A project management workspace connecting tasks, schedules, team workload, and focus-time analytics through one consistent, data-driven interface.',
      focus: 'Frontend architecture, state management with Zustand, drag-and-drop Kanban boards, performance analytics, and browser persistence.',
      statusText: 'Production-ready working client app with comprehensive unit and E2E test coverage.',
      statusBadge: 'Featured Project · Live Demo',
      contextNotes:
        'Built with React, TypeScript, Tailwind CSS, Zustand, Vitest, and Playwright. Fully functional client-side workspace featuring realistic seeded demo data and persistent browser storage.',
      contribution:
        'Designed and built independently with AI assistance. Implemented the complete interface architecture, reactive state management, interactive Kanban board, team workload allocation, focus timer, and analytics reporting.',
      liveUrl: 'https://plotline-phi.vercel.app/',
      sourceUrl: 'https://github.com/jdpappdev/Plotline',
      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Zustand',
        'Vitest',
        'Playwright',
      ],
      reportedFeatures: [
        'Interactive Kanban board with drag-and-drop workflow progression',
        'Task tracking, priority management, and dependencies',
        'Team workload allocation and individual capacity monitoring',
        'Integrated calendar scheduling and key milestone tracking',
        'Focus timer with logged time reflected in live analytics',
        'Data import, CSV reporting, and project data exports',
        'Command palette, global search, and keyboard shortcuts',
        'Undoable deletion and browser-based state persistence',
      ],
      workflowStages: [
        {
          step: '01',
          title: 'Task & Kanban Tracking',
          detail: 'Managing active sprint backlog, progress stages, and drag-and-drop task card transitions.',
        },
        {
          step: '02',
          title: 'Team Workload & Capacity',
          detail: 'Monitoring individual team member utilization and task distribution across sprints.',
        },
        {
          step: '03',
          title: 'Analytics & Time Reports',
          detail: 'Deriving sprint velocity, burn-down metrics, and billable hours from shared state.',
        },
      ],
      ctaText: 'Explore Project',
      hasScreenshots: true,
      aspectRatio: '16/10',
      visualSlots: {
        primary: {
          id: 'plotline-primary',
          slot: 'primary',
          label: 'Studio Management Dashboard',
          src: '/src/assets/images/plotline_dashboard_preview_1792848057222.jpg',
          alt: 'Plotline - Studio Management Workspace dashboard interface preview showing Kanban board and workload metrics',
          caption: 'Main studio dashboard featuring Kanban board, workload allocation charts, and schedule timeline.',
          status: 'screenshot',
          frame: 'desktop',
        },
        workflow: {
          id: 'plotline-workflow',
          slot: 'workflow',
          label: 'Analytics & Reporting Screen',
          src: '/src/assets/images/plotline_analytics_preview_1792848069486.jpg',
          alt: 'Plotline - Analytics and reporting interface preview with burn-down and time logs',
          caption: 'Analytics screen tracking project velocity, task distribution, and time tracking logs.',
          status: 'screenshot',
          frame: 'desktop',
        },
      },
    },
    {
      id: 'assured-capture',
      name: 'Assured Capture',
      category: 'Field Inspection & Reporting',
      description:
        'A digital product focused on organizing field-inspection workflows, documenting issues and evidence, and supporting structured reporting and review.',
      focus: 'Product workflows, interface structure, and practical application design.',
      statusText: 'Case study in progress.',
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
        poster: '/assets/projects/assured-capture-walkthrough-poster.svg',
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
          alt: 'Assured Capture - Primary inspection dashboard interface preview',
          caption: 'Main inspection dashboard',
          status: 'placeholder',
          frame: 'mobile',
        },
        workflow: {
          id: 'ac-workflow',
          slot: 'workflow',
          label: 'Key Workflow',
          src: '',
          alt: 'Assured Capture - Field inspection workflow and issue overview',
          caption: 'Report overview',
          status: 'placeholder',
          frame: 'mobile',
        },
        supporting: {
          id: 'ac-supporting',
          slot: 'supporting',
          label: 'Supporting Screen',
          src: '',
          alt: 'Assured Capture - Inspection evidence and issue photo logger',
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
        poster: '/assets/projects/deaf-contact-record-walkthrough-poster.svg',
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
          alt: 'Deaf Contact Record - Main dashboard and contact directory interface preview',
          caption: 'Home dashboard',
          status: 'placeholder',
          frame: 'mobile',
        },
        workflow: {
          id: 'dcr-workflow',
          slot: 'workflow',
          label: 'Key Workflow',
          src: '',
          alt: 'Deaf Contact Record - Contact profile and interaction notes workflow',
          caption: 'Contact profile view',
          status: 'placeholder',
          frame: 'mobile',
        },
        supporting: {
          id: 'dcr-supporting',
          slot: 'supporting',
          label: 'Supporting Screen',
          src: '',
          alt: 'Deaf Contact Record - Territory organization and community map view',
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
    github: CONTACT_DETAILS.github,
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
