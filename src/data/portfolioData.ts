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
  linkedin: (import.meta.env?.VITE_LINKEDIN_URL as string) || 'https://www.linkedin.com/in/jade-polo-a46833411',
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
      category: 'Planning & Team Operations',
      description:
        'Plan sprint tasks, balance team assignments, manage schedules, and review focus time and velocity from one dashboard.',
      focus: 'React and TypeScript architecture, Zustand state, drag-and-drop interactions, and browser storage.',
      statusText: 'Functional client-side demo with seeded records.',
      statusBadge: 'Featured Project · Sample Data Demo',
      contextNotes:
        'The demo uses seeded records; changes persist in browser storage.',
      contribution:
        'Independently designed and implemented the frontend with AI-assisted iteration.',
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
          title: 'Sprint Board',
          detail: 'Move backlog items through stages with drag and drop.',
        },
        {
          step: '02',
          title: 'Team Capacity',
          detail: 'Compare assignments across people and sprints.',
        },
        {
          step: '03',
          title: 'Time & Analytics',
          detail: 'Review sprint velocity, burn-down, and logged work.',
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
        'A mobile inspection tool for setting scope in the field, documenting defects with photo and location evidence, and preparing reviewable reports.',
      focus: 'Mobile layout and multi-step field capture.',
      statusText: 'Deployed mobile web demo; preview opens at sign-in.',
      statusBadge: 'Featured Project · Live Demo',
      contextNotes:
        'The deployed preview currently opens at the sign-in screen.',
      liveUrl: 'https://demo-assured-capture.netlify.app/',
      contribution:
        'Mapped and implemented the inspection flow, with clear states for evidence capture and report review.',
      workflowStages: [
        {
          step: '01',
          title: 'Set inspection scope',
          detail: 'Choose a property or asset and define its parameters.',
        },
        {
          step: '02',
          title: 'Record findings',
          detail: 'Attach location, photos, and a category to each issue.',
        },
        {
          step: '03',
          title: 'Prepare a report',
          detail: 'Compile findings into a structured summary for review.',
        },
      ],
      ctaText: 'Explore Project',
      hasScreenshots: false,
      aspectRatio: '16/10',

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
        'A cross-platform prototype for coordinating contact profiles, visit history, territory assignments, and follow-ups.',
      focus: 'Connected records, map access, and cross-device sharing.',
      statusText: 'Interactive mobile web demo.',
      statusBadge: 'Featured Project · Live Demo',
      contextNotes:
        'The live demo includes Contacts, Territories, Map, and Settings views.',
      contribution: 'Designed and built the prototype around contact records and territory-based follow-ups.',
      liveUrl: 'https://demo-contact-record.netlify.app/',
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
