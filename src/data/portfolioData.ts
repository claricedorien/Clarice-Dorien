import { Project, SkillCategory, TimelineItem } from '../types';

export const HERO_TYPING_STRINGS = [
  'pixel-perfect design systems.',
  'interactive web experiences.',
  'accessible, fluid interfaces.',
  'high-performance frontend apps.',
  'delightful micro-animations.'
];

export const PROFILE_INFO = {
  name: 'Aria Chen',
  role: 'Senior Frontend Engineer & UI/UX Designer',
  location: 'San Francisco, CA & Remote',
  email: 'aria.chen.design@example.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  dribbble: 'https://dribbble.com',
  status: 'Available for Q2/Q3 Collaborations',
  bio: 'Specializing at the intersection of aesthetic craft and modern engineering. With 6+ years of experience, I build resilient frontends, component libraries, and interactive visual products that delight users and scale seamlessly.',
  stats: [
    { label: 'Years Experience', value: '6+' },
    { label: 'Production Projects', value: '45+' },
    { label: 'Average Lighthouse', value: '98%' },
    { label: 'Design Tokens Defined', value: '1.2k+' }
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'lumina-design-system',
    title: 'Lumina Design System',
    tagline: 'Multi-brand scalable design tokens and accessible component library',
    category: 'design-systems',
    categoryLabel: 'Design System',
    year: '2024',
    client: 'FinTech Cloud Platform',
    role: 'Lead Frontend Architect & UI Lead',
    featured: true,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#DB2777',
    summary: 'A comprehensive, multi-brand React design system powering 14 SaaS customer portals. Compliant with WCAG 2.1 AAA accessibility standards and automated Figma-to-code token synchronization.',
    challenge: 'The organization had fragmented UI patterns across 4 engineering teams, resulting in inconsistent user experiences, duplicated CSS, and slow feature delivery cycles.',
    solution: 'Designed and built a modular token pipeline using Style Dictionary, Radix UI primitives, Tailwind CSS v4, and React 19. Implemented comprehensive Storybook documentation with automated visual regression tests.',
    metrics: [
      { label: 'Component Reusability', value: '92%' },
      { label: 'Sprint Velocity Lift', value: '+35%' },
      { label: 'Accessibility Score', value: '100%' }
    ],
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Radix Primitives', 'Storybook', 'Figma Tokens'],
    liveUrl: 'https://example.com/lumina-demo',
    githubUrl: 'https://github.com/example/lumina-tokens',
    highlights: [
      'Synchronized 400+ Figma tokens automatically via GitHub Actions',
      'Over 55 accessible headless components tested across screen readers',
      'Zero layout shifts (CLS 0.00) with sub-15kb bundle footprint'
    ]
  },
  {
    id: 'sora-spatial-audio',
    title: 'Sora Audio Lab',
    tagline: 'Immersive browser soundscape with generative 3D WebGL visualizers',
    category: 'creative-ui',
    categoryLabel: 'Creative & 3D',
    year: '2024',
    client: 'Experimental Sound Art',
    role: 'Creative Technologist',
    featured: true,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#D946EF',
    summary: 'An ambient binaural audio workstation in the browser with interactive shader waveforms, spatial node routing, and responsive generative pink-hued particle clouds.',
    challenge: 'Rendering 60 FPS real-time audio FFT frequencies without causing UI stuttering or blocking the main JavaScript thread.',
    solution: 'Separated audio processing into dedicated Web Audio API AudioWorklets and rendered high-density visual particles using Three.js custom GLSL shaders with requestAnimationFrame scheduling.',
    metrics: [
      { label: 'Frame Rate', value: '60 FPS Solid' },
      { label: 'Audio Latency', value: '< 12ms' },
      { label: 'Monthly Visitors', value: '85k+' }
    ],
    technologies: ['React', 'Three.js / WebGL', 'Web Audio API', 'GLSL Shaders', 'Motion', 'Tailwind'],
    liveUrl: 'https://example.com/sora-audio',
    githubUrl: 'https://github.com/example/sora-audio-lab',
    highlights: [
      'Interactive reactive audio waveform geometry driven by user microphone or ambient presets',
      'Spatial 3D panning with head-related transfer function (HRTF) audio nodes',
      'Fluid gesture-based controls crafted for desktop and touch devices'
    ]
  },
  {
    id: 'bloom-wealth-intelligence',
    title: 'Bloom Wealth Dashboard',
    tagline: 'Personal finance & recurring asset intelligence with predictive forecasting',
    category: 'web-apps',
    categoryLabel: 'Web Application',
    year: '2023',
    client: 'Bloom Finance Inc.',
    role: 'Senior UI/Frontend Engineer',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#E11D48',
    summary: 'A minimalist wealth dashboard that transforms complex portfolio metrics into intuitive, glassmorphic data visualizers with predictive cashflow graphs and anomaly alerts.',
    challenge: 'Displaying thousands of historic transactions and live market feeds without sluggish chart re-renders or cluttered screens.',
    solution: 'Architected virtualized data tables, memoized Recharts visualizations, and created an optimistic UI cache allowing instant category reallocations with undo capability.',
    metrics: [
      { label: 'User Retention', value: '+42%' },
      { label: 'Render Latency', value: '16ms avg' },
      { label: 'Active Portfolios', value: '$120M+' }
    ],
    technologies: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS', 'Zustand', 'Vite'],
    liveUrl: 'https://example.com/bloom-preview',
    githubUrl: 'https://github.com/example/bloom-wealth',
    highlights: [
      'Custom interactive dual-axis chart with brush zoom and drag scrubbers',
      'Smooth state transitions powered by motion layout morphing',
      'Exportable financial reports in vector SVG and formatted PDF'
    ]
  },
  {
    id: 'velvet-atelier-commerce',
    title: 'Velvet Atelier Storefront',
    tagline: 'High-fashion digital commerce featuring interactive 360 garment inspection',
    category: 'web-apps',
    categoryLabel: 'Web Application',
    year: '2023',
    client: 'Velvet Fashion House',
    role: 'Lead UI Developer',
    featured: false,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#BE185D',
    summary: 'An editorial e-commerce platform blending digital runway looks, smooth micro-interactions, swipeable lookbooks, and an instant frictionless bag drawer.',
    challenge: 'Achieving editorial magazine typography aesthetics while maintaining lightning-fast mobile loading on low-bandwidth networks.',
    solution: 'Implemented responsive WebP/AVIF dynamic image pipelines, priority asset prefetching, and progressive client-side hydration.',
    metrics: [
      { label: 'Conversion Rate', value: '+28%' },
      { label: 'Checkout Time', value: '38s avg' },
      { label: 'First Contentful Paint', value: '0.6s' }
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Stripe Elements', 'GraphQL'],
    liveUrl: 'https://example.com/velvet-lookbook',
    githubUrl: 'https://github.com/example/velvet-atelier',
    highlights: [
      'Interactive 360-degree garment inspection with pinch-to-zoom fabric detail',
      'Floating quick-bag drawer with instant localized tax & shipping calculation',
      'Subtle page transitions with custom liquid cursor on desktop'
    ]
  },
  {
    id: 'nova-collaborative-canvas',
    title: 'Nova Workspace Canvas',
    tagline: 'Real-time collaborative diagramming and moodboard studio for teams',
    category: 'web-apps',
    categoryLabel: 'Web Application',
    year: '2023',
    client: 'Nova Systems',
    role: 'Frontend Systems Engineer',
    featured: false,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#C026D3',
    summary: 'An infinite zoom canvas application for brainstorming, card sorting, and interactive prototyping with multiplayer colored cursors and live sticky notes.',
    challenge: 'Managing thousands of canvas nodes while sustaining smooth panning and 120Hz pinch gestures on high-DPI displays.',
    solution: 'Leveraged an offscreen HTML5 canvas viewport with quadtree spatial partitioning to only calculate collisions for visible objects in the viewport.',
    metrics: [
      { label: 'Concurrent Users', value: '50 / room' },
      { label: 'Latency', value: '< 20ms' },
      { label: 'Weekly Active Teams', value: '14k' }
    ],
    technologies: ['TypeScript', 'HTML5 Canvas', 'React', 'Tailwind CSS', 'WebSockets', 'Zustand'],
    liveUrl: 'https://example.com/nova-canvas',
    githubUrl: 'https://github.com/example/nova-workspace',
    highlights: [
      'Infinite vector canvas with sub-pixel alignment and smart snap guides',
      'Multiplayer presence indicators with colored cursor trails',
      'One-click export to Figma tokens or high-resolution PNG'
    ]
  },
  {
    id: 'pulse-telehealth-ui',
    title: 'Pulse Clinical Interface',
    tagline: 'Critical patient telemetry dashboard engineered for zero visual fatigue',
    category: 'mobile-frontend',
    categoryLabel: 'Mobile & UI',
    year: '2022',
    client: 'Pulse MedTech',
    role: 'UI/UX Specialist & Frontend Developer',
    featured: false,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#DB2777',
    summary: 'A responsive tablet and desktop web application for hospital triage staff with instant vitals alerts, medication timeline sync, and rapid patient note-taking.',
    challenge: 'Designing an interface that could be operated accurately in high-stress, low-lighting clinical environments without cognitive overload.',
    solution: 'Conducted 30+ nurse shadowing sessions, designed high-contrast typography hierarchies, and introduced audio-tactile confirmation feedback on key actions.',
    metrics: [
      { label: 'Triage Time Saved', value: '4.2 min/pt' },
      { label: 'Input Errors', value: '-68%' },
      { label: 'HIPAA & WCAG', value: '100% Pass' }
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Service Workers', 'Offline PWA'],
    liveUrl: 'https://example.com/pulse-preview',
    githubUrl: 'https://github.com/example/pulse-telehealth',
    highlights: [
      'High-contrast emergency modes for varying hospital room lighting',
      'Robust offline mode saving pending reports to IndexedDB',
      'Strict keyboard-only navigation shortcuts for rapid hands-free triage'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description: 'Modern component-driven architectures, state management, and modern browser standards.',
    skills: [
      {
        name: 'React 19 & Next.js',
        level: 96,
        experience: '6 Years',
        badge: 'Expert',
        description: 'Server Components, streaming SSR, custom hooks, performance profiling, and concurrent features.'
      },
      {
        name: 'TypeScript',
        level: 94,
        experience: '5 Years',
        badge: 'Advanced',
        description: 'Strict typing, generics, utility types, discriminating unions, and compiler tuning.'
      },
      {
        name: 'Modern JavaScript (ESNext)',
        level: 95,
        experience: '7 Years',
        badge: 'Expert',
        description: 'Event loop mastery, Async/Await, Web Workers, Canvas, Web Audio API, and DOM internals.'
      },
      {
        name: 'State & Data Flow',
        level: 90,
        experience: '5 Years',
        badge: 'Advanced',
        description: 'Zustand, Redux Toolkit, TanStack Query, optimistic updates, and reactive client cache.'
      }
    ]
  },
  {
    id: 'styling-design',
    title: 'UI & Design Systems',
    description: 'Design token governance, responsive styling systems, and micro-interaction craft.',
    skills: [
      {
        name: 'Tailwind CSS & CSS Architecture',
        level: 98,
        experience: '5 Years',
        badge: 'Mastery',
        description: 'Tailwind v4 theme configurations, container queries, CSS variables, subgrid, and modern layouts.'
      },
      {
        name: 'Design Tokens & Figma to Code',
        level: 92,
        experience: '4 Years',
        badge: 'Advanced',
        description: 'Style Dictionary, headless primitives (Radix, Ark UI), token governance, and multi-theme logic.'
      },
      {
        name: 'Motion & Fluid Animations',
        level: 93,
        experience: '5 Years',
        badge: 'Specialist',
        description: 'Framer Motion / Motion, layout animations, exit transitions, physics springs, and micro-feedback.'
      },
      {
        name: 'Accessibility (a11y / WCAG)',
        level: 91,
        experience: '5 Years',
        badge: 'Certified',
        description: 'ARIA semantics, focus management, screen reader validation (NVDA/VoiceOver), keyboard traps.'
      }
    ]
  },
  {
    id: 'creative-tools',
    title: 'Creative Tech & Performance',
    description: 'WebGL visuals, developer tooling, CI/CD, and web speed optimization.',
    skills: [
      {
        name: 'WebGL & Three.js',
        level: 84,
        experience: '3 Years',
        badge: 'Proficient',
        description: '3D scene graph, GLSL vertex/fragment shaders, camera controls, and GPU memory optimization.'
      },
      {
        name: 'Performance & Web Vitals',
        level: 94,
        experience: '5 Years',
        badge: 'Specialist',
        description: 'INP reduction, LCP optimization, bundle code-splitting, lazy loading, and Lighthouse 99+ audits.'
      },
      {
        name: 'Build Tooling & Testing',
        level: 89,
        experience: '5 Years',
        badge: 'Advanced',
        description: 'Vite, Vitest, Playwright E2E, ESLint, Prettier, Storybook, and automated CI pipelines.'
      },
      {
        name: 'UI/UX Design in Figma',
        level: 90,
        experience: '6 Years',
        badge: 'Advanced',
        description: 'Auto-layout mastery, interactive prototyping, variable modes, design handoffs, and user testing.'
      }
    ]
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 't1',
    type: 'work',
    period: '2023 — Present',
    title: 'Staff / Senior Frontend Engineer',
    companyOrInstitution: 'Aurora Digital Labs',
    location: 'San Francisco, CA (Hybrid)',
    badge: 'Current Role',
    description: 'Spearheading core frontend architecture and design systems across three enterprise SaaS products serving 450,000+ active global users.',
    achievements: [
      'Architected and deployed unified multi-brand design system reducing time-to-market for new features by 40%',
      'Championed modern web vitals overhaul, elevating average Lighthouse scores from 64 to 98',
      'Mentored 6 junior/mid-level frontend engineers and established weekly interactive UI critique sessions'
    ],
    skills: ['React 19', 'TypeScript', 'Tailwind CSS', 'Design Systems', 'Performance Profiling']
  },
  {
    id: 't2',
    type: 'work',
    period: '2021 — 2023',
    title: 'Senior Frontend Developer & UI Designer',
    companyOrInstitution: 'Hyperion Creative Studio',
    location: 'Remote',
    badge: 'Full-Time',
    description: 'Crafted award-winning marketing sites, interactive 3D portfolios, and bespoke digital commerce platforms for global luxury & tech brands.',
    achievements: [
      'Delivered 14 bespoke interactive client applications with 100% on-time delivery track record',
      'Integrated Three.js 3D product visualizers leading to an average 32% increase in consumer conversion',
      'Received 2 Awwwards Site of the Day accolades and CSS Design Awards Special Kudos'
    ],
    skills: ['React', 'Next.js', 'Framer Motion', 'Three.js', 'Storybook', 'Figma']
  },
  {
    id: 't3',
    type: 'education-recognition',
    period: '2023',
    title: 'Awwwards Site of the Day & Developer Award',
    companyOrInstitution: 'Awwwards & CSS Design Awards',
    location: 'Global',
    badge: 'Industry Honor',
    description: 'Recognized for cutting-edge interaction design, typography craft, and performance execution on the Sora Audio Lab and Velvet Atelier projects.',
    achievements: [
      'Site of the Day winner (Score: 8.42/10 across Design, Usability, Creativity & Content)',
      'Developer Award for clean semantic code, sub-500ms load times, and fluid 60FPS shader rendering'
    ],
    skills: ['Creative Direction', 'WebGL / GLSL', 'Interaction Craft']
  },
  {
    id: 't4',
    type: 'work',
    period: '2019 — 2021',
    title: 'Frontend Developer & UI Engineer',
    companyOrInstitution: 'Velox Interactive',
    location: 'Austin, TX',
    badge: 'Full-Time',
    description: 'Developed scalable client-facing dashboards, accessible component libraries, and interactive data visualization interfaces for fast-growing B2B startups.',
    achievements: [
      'Built reusable chart widget library in D3 & SVG adopted across 5 product teams',
      'Refactored legacy monolith into modular TypeScript components, decreasing bug report volume by 45%'
    ],
    skills: ['JavaScript ES6+', 'React', 'CSS3 / SASS', 'REST APIs', 'D3.js']
  },
  {
    id: 't5',
    type: 'education-recognition',
    period: '2015 — 2019',
    title: 'B.S. in Computer Science & Human-Computer Interaction',
    companyOrInstitution: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    badge: 'Magna Cum Laude',
    description: 'Focused on UI/UX ergonomics, graphical computing algorithms, software engineering principles, and web accessibility standards.',
    achievements: [
      'Graduated with 3.89 GPA with departmental honors',
      'President of UC Berkeley Interactive Design & Web Development Guild'
    ],
    skills: ['Computer Science', 'HCI', 'Algorithms', 'Design Research']
  }
];

export const PHILOSOPHY_POINTS = [
  {
    title: 'Code is Design in Motion',
    description: 'The gap between how something looks and how it performs is where great products live. Every easing curve, keystroke response, and loading state is a brand promise.'
  },
  {
    title: 'Accessible by Default',
    description: 'A beautiful interface that excludes people with assistive tech is incomplete. I build WCAG AAA-first, ensuring high contrast, keyboard traps prevention, and screen reader clarity.'
  },
  {
    title: 'Speed is Emotional Respect',
    description: 'Users shouldn’t wait for heavy JS payloads. Lean bundles, optimal web vitals, and instant feedback communicate deep respect for the user’s time.'
  }
];
