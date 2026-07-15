export const site = {
  name: 'Joseph Hangarter',
  role: 'Full-Stack Engineer',
  location: 'Redmond, Washington',
  email: 'joseph.hangarter@yahoo.com',
  githubUrl: 'https://github.com/JCode1986',
  linkedinUrl: 'https://www.linkedin.com/in/joseph-hangarter/',
  resumeUrl: '/resume.pdf',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://joseph-hangarter-portfolio.vercel.app',
};

export const proofPoints = [
  '4+ years of professional experience',
  'React and Next.js specialist',
  'Full-stack product development',
  'U.S. Navy veteran',
];

export const projects = [
  {
    slug: 'wherekeep',
    title: 'WhereKeep',
    category: 'Full-Stack SaaS Product',
    description:
      'A household inventory platform that helps individuals and families track what they own, where items are stored, what is running low, and what may expire soon.',
    longDescription:
      'WhereKeep is a full-stack household inventory application designed to make home organization searchable and practical. Users can organize inventory through locations, storage areas, categories, and individual items while managing quantities, expiration dates, shopping needs, and shared household access.',
    role: 'Independent product owner and full-stack developer',
    timeline: 'Independent product development',
    status: 'Live product',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://www.wherekeep.com/',
    repositoryUrl: '',
    heroImage: '/project-previews/wherekeep-placeholder.svg',
    imageAlt: 'Placeholder preview for WhereKeep inventory dashboard screens',
    ctaPrimary: 'View Live Product',
    ctaSecondary: 'Read Case Study',
    featured: true,
    problem:
      'Household inventory is usually scattered across memory, notes, photos, and shopping lists. WhereKeep gives households a structured way to find items, plan purchases, and track expiring or low-stock supplies.',
    goals: [
      'Make stored household items searchable from desktop and mobile.',
      'Support practical inventory organization without forcing a rigid workflow.',
      'Create a foundation for shared household access and subscription billing.',
      'Keep the interface clear enough for repeated everyday use.',
    ],
    responsibilities: [
      'Product planning and feature prioritization',
      'Responsive application UI and dashboard design',
      'Database-backed inventory workflows',
      'Authentication and protected application routes',
      'Stripe subscription integration',
      'Deployment and iterative product refinement',
    ],
    users: ['Individuals organizing household supplies', 'Families sharing inventory responsibilities', 'Homeowners tracking storage areas and replenishment needs'],
    features: [
      'Hierarchical locations, storage areas, categories, and items',
      'Global inventory search',
      'Mobile-first dashboard and navigation',
      'Barcode-assisted item entry',
      'Quantity and expiration tracking',
      'Low-stock tracking',
      'Shopping list workflows',
      'Shared household roles',
      'Member invitations',
      'Subscription plans and Stripe billing',
      'Authentication and protected application routes',
      'Responsive desktop and mobile layouts',
    ],
    architecture: [
      'Next.js application deployed on Vercel',
      'Supabase authentication and PostgreSQL-backed data storage',
      'Role-aware household access model',
      'Stripe billing flow for subscription plans',
      'Tailwind CSS component styling across responsive layouts',
    ],
    challenges: [
      'Designing item organization flexible enough for real homes without making data entry feel heavy.',
      'Balancing mobile-first workflows with denser desktop inventory management screens.',
      'Connecting billing, account state, and protected application access in a maintainable way.',
    ],
    tradeoffs: [
      'Prioritized simple inventory flows before advanced analytics.',
      'Kept the hierarchy explicit so users can understand where items live.',
      'Designed billing and membership flows as product foundations that can expand over time.',
    ],
    screenshots: [
      'Desktop dashboard',
      'Mobile dashboard',
      'Items page',
      'Location or storage hierarchy',
      'Global search',
      'Add item flow',
      'Shopping list',
      'Profile or household sharing',
    ],
    currentStatus: 'WhereKeep is live and continuing to evolve through independent product development.',
    futureImprovements: ['Richer import/export workflows', 'More household insights', 'Expanded barcode and replenishment support'],
  },
  {
    slug: 'leah-naidoo',
    title: 'Leah Naidoo',
    category: 'Professional Client Website',
    description:
      'A responsive professional website created for an emerging legal professional, with a focus on credibility, accessible content, clear navigation, and a scalable foundation for a future legal practice.',
    longDescription:
      'The Leah Naidoo website presents a legal professional brand with a restrained visual system, clear biography content, accessible section hierarchy, and a foundation that can expand into a future legal practice website.',
    role: 'Designer and developer',
    timeline: 'Client website project',
    status: 'Live site',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'SEO', 'Vercel'],
    liveUrl: 'https://leah-naidoo.vercel.app/',
    repositoryUrl: '',
    heroImage: '/project-previews/leah-naidoo-placeholder.svg',
    imageAlt: 'Placeholder preview for Leah Naidoo professional legal website',
    ctaPrimary: 'View Live Site',
    ctaSecondary: 'View Project Details',
    featured: true,
    problem:
      'An emerging legal professional needed a credible digital presence that could introduce background, credentials, and contact pathways without feeling like a generic template.',
    goals: [
      'Present biography and credentials clearly.',
      'Create a professional brand direction that can grow over time.',
      'Keep the mobile reading experience simple and accessible.',
      'Deploy a fast, maintainable website foundation.',
    ],
    responsibilities: ['Content hierarchy', 'Responsive interface development', 'Reusable component structure', 'SEO metadata', 'Production deployment'],
    users: ['Professional contacts', 'Potential future clients', 'Recruiters and legal-industry peers'],
    features: [
      'Professional brand direction',
      'Clear biography and credential presentation',
      'Mobile-first responsive design',
      'Accessible content hierarchy',
      'Contact conversion flow',
      'Reusable components',
      'SEO metadata',
      'Production deployment',
      'Foundation for future law-firm expansion',
    ],
    architecture: ['Next.js site structure', 'Reusable Tailwind CSS components', 'Static content-first pages', 'Vercel deployment'],
    challenges: [
      'Keeping the design professional and personal without overstating the current scope.',
      'Creating room for future practice-area content while keeping the first version concise.',
    ],
    tradeoffs: ['Focused on clarity and credibility instead of heavy animation or complex content systems.'],
    screenshots: ['Desktop homepage', 'Mobile homepage', 'Biography or professional section', 'Contact section'],
    futureImprovements: ['Practice-area pages', 'Richer publishing workflow', 'Expanded contact intake'],
  },
  {
    slug: 'healthcare-platform',
    title: 'Healthcare Web Platform',
    category: 'Professional Engineering Work',
    description:
      'Frontend and full-stack contributions across healthcare websites, authenticated dashboards, CMS integrations, API workflows, automated testing, and production deployment systems.',
    longDescription:
      'This anonymized case study summarizes private professional healthcare engineering work. It intentionally excludes confidential code, regulated data, internal URLs, proprietary architecture, credentials, and patient information.',
    role: 'Software Engineer',
    timeline: 'Professional healthcare engineering work',
    status: 'Private professional work',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Spring Boot', 'PostgreSQL', 'WordPress', 'Strapi', 'Hygraph', 'Playwright', 'Cypress', 'Docker', 'AWS'],
    liveUrl: '',
    repositoryUrl: '',
    heroImage: '/project-previews/healthcare-platform-placeholder.svg',
    imageAlt: 'Abstract secure healthcare platform architecture visual',
    ctaPrimary: '',
    ctaSecondary: 'Read Case Study',
    featured: true,
    confidentialityNotice:
      'Private professional work. Public details are intentionally limited to responsibilities, system types, engineering practices, and non-confidential technical themes.',
    problem:
      'Healthcare web systems need clear user experiences, secure workflows, maintainable content operations, reliable integrations, and disciplined production support.',
    goals: [
      'Support healthcare websites and authenticated product surfaces.',
      'Integrate CMS content and API-backed workflows.',
      'Improve quality through automated testing and production-minded delivery.',
      'Work within privacy, security, and regulatory constraints.',
    ],
    responsibilities: [
      'React and Next.js interface development',
      'Healthcare website and dashboard support',
      'CMS integrations',
      'API workflow implementation',
      'Authentication-related workflows',
      'Automated testing',
      'Deployment and production support',
      'Cross-functional collaboration',
    ],
    users: ['Internal stakeholders', 'Healthcare audiences', 'Operational users of authenticated workflows'],
    features: [
      'Responsive healthcare websites',
      'Authenticated dashboard workflows',
      'CMS-backed content systems',
      'API integrations',
      'Automated browser testing',
      'Production deployment support',
    ],
    architecture: [
      'React and Next.js frontend surfaces',
      'API integrations across backend services',
      'CMS platforms including WordPress, Strapi, and Hygraph',
      'Automated tests with Playwright and Cypress',
      'Containerized and cloud deployment workflows where appropriate',
    ],
    challenges: [
      'Balancing fast iteration with healthcare privacy and quality expectations.',
      'Maintaining public-facing content platforms while supporting authenticated workflows.',
      'Testing critical flows without exposing private or regulated information.',
    ],
    tradeoffs: [
      'Public portfolio detail is intentionally limited.',
      'Architecture is described at a high level to avoid exposing confidential implementation details.',
    ],
    screenshots: ['Abstract system visual only', 'No confidential product screenshots shown publicly'],
    lessons: [
      'Healthcare engineering rewards clear requirements, careful QA, and disciplined release habits.',
      'Content operations, authentication, and API behavior all affect the user experience.',
      'Good communication is part of technical quality in regulated environments.',
    ],
  },
  {
    slug: 'ecommerce-dashboard',
    title: 'E-commerce Dashboard',
    category: 'Technical Product Demo',
    description:
      'A dashboard concept focused on admin workflows, responsive data presentation, theme-ready surfaces, and product operations patterns.',
    longDescription:
      'This technical demonstration explores how product teams can scan operational information, compare status, and move through administrative workflows without losing context.',
    role: 'Frontend developer',
    timeline: 'Technical concept',
    status: 'Concept project',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    liveUrl: '',
    repositoryUrl: '',
    heroImage: '/project-previews/ecommerce-dashboard-placeholder.svg',
    imageAlt: 'Placeholder preview for e-commerce dashboard interface',
    ctaPrimary: '',
    ctaSecondary: 'View Project Details',
    featured: true,
    problem:
      'Administrative dashboards often need to show dense information without becoming visually noisy or difficult to use on smaller screens.',
    goals: ['Explore dashboard layout hierarchy', 'Practice responsive cards and data regions', 'Create a reusable technical presentation pattern'],
    responsibilities: ['Interface layout', 'Responsive card system', 'Dashboard visual hierarchy', 'Technology tag presentation'],
    users: ['Store operators', 'Product managers', 'Internal admin users'],
    features: ['Responsive dashboard layout', 'Theme-ready visual surfaces', 'Chart and summary-card regions', 'Status-oriented content hierarchy'],
    architecture: ['React component structure', 'Tailwind CSS styling', 'Chart-ready data visualization areas'],
    challenges: ['Making the project feel like a product surface rather than a tutorial card.'],
    tradeoffs: ['Kept as a compact technical demonstration so stronger real projects carry the portfolio.'],
    screenshots: ['Dashboard overview placeholder'],
  },
];

export const skillGroups = [
  {
    title: 'Product Development',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Responsive interfaces', 'Component systems', 'Mobile-first development'],
  },
  {
    title: 'Backend and Data',
    items: ['Node.js', 'REST APIs', 'Supabase', 'PostgreSQL', 'SQL', 'Spring Boot'],
  },
  {
    title: 'Quality and Delivery',
    items: ['Playwright', 'Cypress', 'Accessibility', 'Performance', 'SEO', 'Git', 'CI/CD', 'Vercel', 'Docker'],
  },
  {
    title: 'Platforms and Integrations',
    items: ['Stripe', 'WordPress', 'Strapi', 'Hygraph', 'Authentication', 'AWS'],
  },
];

export const experience = [
  {
    company: 'Helio Genomics',
    role: 'Software Engineer',
    period: 'Professional experience',
    description:
      'Contributed to healthcare websites, dashboards, CMS integrations, API-backed workflows, authentication-related user flows, automated testing, and production support.',
    bullets: ['React and Next.js development', 'CMS and API integrations', 'Automated testing with Playwright and Cypress', 'Healthcare production support'],
  },
  {
    company: 'WhereKeep',
    role: 'Founder and Full-Stack Developer',
    period: 'Independent product development',
    description:
      'Designed and built an inventory SaaS product from product planning through responsive UI, Supabase data modeling, Stripe billing, and Vercel deployment.',
    bullets: ['Product planning', 'Next.js application architecture', 'Supabase and PostgreSQL workflows', 'Stripe billing integration'],
  },
  {
    company: 'U.S. Navy',
    role: 'Master-at-Arms',
    period: 'Military service',
    description:
      'Developed operational discipline, accountability, direct communication, teamwork, and decision-making under pressure.',
    bullets: ['Leadership and accountability', 'Operational discipline', 'Clear communication', 'Team coordination'],
  },
];

export const howIWork = [
  {
    title: 'Product thinking',
    description:
      'I consider the full user flow, business goal, edge cases, mobile behavior, and long-term maintainability, not only the individual ticket.',
  },
  {
    title: 'Production discipline',
    description:
      'I build with accessibility, testing, performance, metadata, deployment, and future maintenance in mind.',
  },
  {
    title: 'Clear ownership',
    description:
      'My engineering and Navy backgrounds taught me to communicate directly, document decisions, identify risks, and take responsibility for outcomes.',
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
