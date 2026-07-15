export const site = {
  name: 'Joseph Hangarter',
  role: 'Full-Stack Engineer',
  location: 'Redmond, Washington',
  email: 'joseph.hangarter@yahoo.com',
  githubUrl: 'https://github.com/JCode1986',
  linkedinUrl: 'https://www.linkedin.com/in/joseph-hangarter/',
  resumeUrl: '/resume.pdf',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://josephhangarter.com',
};

export const socialLinks = [
  { label: 'GitHub', href: site.githubUrl },
  { label: 'LinkedIn', href: site.linkedinUrl },
  { label: 'Email', href: `mailto:${site.email}` },
];

export const credibilityCards = [
  {
    value: '4+ Years',
    label: 'Professional Experience',
    icon: 'calendar',
    accent: 'cyan',
  },
  {
    value: 'React & Next.js',
    label: 'Specialist',
    icon: 'layers',
    accent: 'violet',
  },
  {
    value: 'Full-Stack',
    label: 'Product Development',
    icon: 'code',
    accent: 'emerald',
  },
  {
    value: 'U.S. Navy',
    label: 'Veteran',
    icon: 'shield',
    accent: 'blue',
  },
];

export const quickQrProjectName = 'QuickQR';

export const projects = [
  {
    slug: 'wherekeep',
    title: 'WhereKeep',
    badge: 'Featured Product',
    category: 'Full-Stack SaaS Product',
    description:
      'A full-stack household inventory platform that helps individuals and families track what they own, where items are stored, what is running low, and what may expire soon.',
    longDescription:
      'WhereKeep is a full-stack household inventory platform designed to make home organization searchable, shared, and practical across desktop and mobile workflows.',
    seoDescription:
      'WhereKeep case study for Joseph Hangarter, covering a full-stack household inventory SaaS product built with JavaScript, Next.js, Supabase, Stripe, Tailwind CSS, and Vercel.',
    role: 'Creator and Full-Stack Developer',
    timeline: 'Independent product development',
    status: 'Actively developed',
    technologies: ['Next.js', 'JavaScript', 'Supabase', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://www.wherekeep.com/',
    repositoryUrl: '',
    heroImage: '/project-previews/wherekeep.jpg',
    imageAlt: 'WhereKeep dashboard shown on desktop and mobile devices',
    ctaPrimary: 'View Live Product',
    ctaSecondary: 'Read Case Study',
    accent: 'teal',
    featured: true,
    flagship: true,
    problem:
      'Household inventory often lives across memory, notes, photos, and separate shopping lists. WhereKeep gives households a structured way to find items, track supplies, and plan replenishment without making daily use feel heavy.',
    goals: [
      'Plan and build a complete household inventory product from concept through deployment.',
      'Make stored household items searchable from desktop and mobile.',
      'Support household sharing, protected routes, and account-aware product flows.',
      'Connect inventory status, shopping needs, expiration tracking, and billing into one maintainable product foundation.',
    ],
    responsibilities: [
      'Product concept and planning',
      'Full-stack application development',
      'Authentication and protected routes',
      'Supabase database architecture',
      'Household sharing workflows',
      'Inventory search and item management',
      'Quantity and expiration tracking',
      'Shopping list workflows',
      'Stripe billing integration',
      'Mobile-first responsive design',
      'Production deployment and active maintenance',
    ],
    users: ['Individuals organizing household supplies', 'Families sharing inventory responsibilities', 'Homeowners tracking storage areas and replenishment needs'],
    features: [
      'Hierarchical locations, storage areas, categories, and items',
      'Global inventory search',
      'Quantity, low-stock, and expiration tracking',
      'Shopping list workflows',
      'Shared household access',
      'Authentication and protected application routes',
      'Stripe billing workflows',
      'Responsive desktop and mobile layouts',
    ],
    architecture: [
      'Next.js application deployed on Vercel',
      'JavaScript-first product development with Tailwind CSS interface styling',
      'Supabase authentication and PostgreSQL-backed data storage',
      'Role-aware household access model',
      'Stripe billing flow for paid product access',
    ],
    challenges: [
      'Designing item organization flexible enough for real homes without making data entry feel complicated.',
      'Balancing mobile-first capture flows with denser desktop inventory management screens.',
      'Keeping billing, account state, and protected application access understandable as the product evolves.',
    ],
    tradeoffs: [
      'Prioritized clear inventory flows before advanced analytics.',
      'Kept the hierarchy explicit so users can understand where items live.',
      'Built billing and membership flows as product foundations that can expand over time.',
    ],
    screenshots: ['Desktop dashboard', 'Mobile dashboard', 'Items page', 'Search', 'Add item flow', 'Shopping list'],
    currentStatus: 'WhereKeep is live, actively developed, and maintained as Joseph Hangarter\'s flagship product.',
    futureImprovements: ['Richer import/export workflows', 'More household insights', 'Expanded barcode and replenishment support'],
  },
  {
    slug: 'quickqr',
    title: quickQrProjectName,
    badge: 'In Development',
    category: 'Commercial Frontend Product',
    description:
      'A modern QR code generator for individuals and small businesses. Users can create, customize, preview, and download polished QR codes through a fast browser-based experience.',
    longDescription:
      'QuickQR is an in-development commercial frontend product focused on fast browser-based QR code generation, practical customization, and export workflows without a traditional database-backed application backend.',
    seoDescription:
      'QuickQR is an in-development commercial frontend product by Joseph Hangarter for browser-based QR code generation, customization, exports, and one-time Stripe payment workflows.',
    role: 'Creator and Frontend Developer',
    timeline: 'In development',
    status: 'In Development',
    technologies: ['Next.js', 'JavaScript', 'Tailwind CSS', 'Stripe', 'QR Code API', 'Vercel'],
    liveUrl: '',
    repositoryUrl: '',
    heroImage: '',
    imageAlt: 'QuickQR in-development QR code editor product preview',
    ctaPrimary: 'View Live Site',
    ctaSecondary: 'Read Case Study',
    accent: 'purple',
    featured: true,
    problem:
      'Individuals and small businesses need polished QR codes without adopting a complex dashboard, subscription product, or database-heavy workflow for a simple asset creation task.',
    goals: [
      'Create a focused QR generation product that feels fast and commercial without unnecessary backend complexity.',
      'Support live preview, color customization, export controls, and responsive browser-based use.',
      'Use a one-time Stripe payment model for premium assets rather than implying subscription SaaS without server-side entitlement verification.',
      'Keep the architecture lightweight while documenting the security limits of client-side-only premium access.',
    ],
    responsibilities: [
      'Product goal definition',
      'Target user and scope planning',
      'Browser-based QR generation workflow',
      'Customization interface design',
      'PNG and SVG export planning',
      'Stripe Checkout payment model planning',
      'Responsive UI direction',
      'Accessibility and performance considerations',
    ],
    users: ['Solo operators', 'Small businesses', 'Creators and event organizers', 'Non-technical users creating branded QR assets'],
    features: [
      'Static QR code generation',
      'Live QR preview',
      'Foreground and background color customization',
      'Size control',
      'PNG export',
      'SVG export',
      'Potential premium templates, logo upload, additional styles, and high-resolution export',
    ],
    architecture: [
      'Next.js frontend deployed on Vercel',
      'Browser-based QR generation and preview for the core editor workflow',
      'No traditional database-backed application backend planned for the first version',
      'Stripe Checkout still requires a server-side or serverless route to securely create checkout sessions',
      'One-time premium unlock model is more appropriate than subscription SaaS unless reliable server-side entitlement verification is added',
    ],
    challenges: [
      'Keeping the product intentionally lightweight without overstating what client-side code can secure.',
      'Designing customization controls that feel capable without overwhelming first-time users.',
      'Making exported assets useful for commercial users while keeping the first release focused.',
    ],
    tradeoffs: [
      'Avoiding a database reduces operational complexity but limits durable accounts, saved history, and server-verified entitlements.',
      'A one-time payment model fits a focused asset tool better than a subscription unless the product later adds ongoing hosted value.',
      'Client-side generation improves speed and privacy, but payment and premium unlock behavior must be handled honestly.',
    ],
    caseStudySections: [
      {
        title: 'Product Goal',
        body: 'QuickQR is intended to be a focused commercial frontend product for creating polished QR codes quickly, without forcing users into a large account-based dashboard.',
      },
      {
        title: 'Target Users',
        items: ['Small businesses needing menu, event, or contact QR codes', 'Individuals creating branded digital assets', 'Creators who need quick downloadable QR graphics'],
      },
      {
        title: 'Why Lightweight',
        body: 'The product is intentionally scoped around QR creation, customization, preview, and export. Avoiding a traditional database-backed backend keeps the first version simpler to operate and faster to use.',
      },
      {
        title: 'Browser-Based Generation',
        body: 'The core QR creation workflow is planned as a browser-based experience where users can edit content, immediately preview the result, and export files without waiting on stored server state.',
      },
      {
        title: 'Customization Workflow',
        items: ['Destination or content input', 'Foreground and background colors', 'Logo upload as a potential premium feature', 'Corner and pattern styles as potential premium controls', 'Size selection'],
      },
      {
        title: 'Export Formats',
        items: ['PNG export', 'SVG export', 'Potential high-resolution export for premium users'],
      },
      {
        title: 'Stripe Payment Model',
        body: 'The planned commercial model is a one-time Stripe payment for premium export and styling features. Stripe Checkout should be created through a server-side or serverless route, not through exposed client-only logic.',
      },
      {
        title: 'No-Database Architecture',
        body: 'A first release can avoid a traditional database-backed application backend, but secure payment session creation still requires a server-side or serverless boundary.',
      },
      {
        title: 'Benefits and Limitations',
        items: ['Benefits: lower complexity, fast first load, fewer moving parts, and reduced stored user data.', 'Limitations: no saved history, limited account recovery, and weaker entitlement persistence without server-side verification.'],
      },
      {
        title: 'Responsive Design',
        body: 'The editor should place controls and preview side by side on desktop, then stack into a clean mobile flow with tappable controls and readable preview output.',
      },
      {
        title: 'Performance',
        body: 'The product should keep the editor lightweight, avoid unnecessary animation, and generate previews without blocking basic input responsiveness.',
      },
      {
        title: 'Accessibility',
        body: 'Controls should use labels, visible focus states, keyboard-accessible inputs, clear download actions, and sufficient contrast across the editor and preview states.',
      },
      {
        title: 'Current Status',
        body: 'QuickQR is currently in development. The portfolio uses a design preview rather than real launched product screenshots.',
      },
      {
        title: 'Future Improvements',
        items: ['Premium templates', 'Logo upload', 'Additional QR styles', 'Commercial asset pack', 'Server-verified entitlement handling if accounts or durable premium access are added'],
      },
    ],
    screenshots: ['Landing page', 'QR editor', 'QR preview', 'Customization controls', 'Download states', 'Stripe checkout or premium upgrade flow once implemented'],
    currentStatus: 'QuickQR is in development and is not presented as a launched live product.',
    futureImprovements: ['Premium templates', 'Logo upload', 'Additional QR styles', 'Commercial asset pack', 'Server-verified entitlement handling'],
  },
  {
    slug: 'leah-naidoo',
    title: 'Leah Naidoo',
    badge: 'Client Delivery',
    category: 'Professional Client Website',
    description:
      'A responsive professional website created for a legal professional, focused on credibility, accessible content, clear navigation, and a scalable foundation for future growth.',
    longDescription:
      'The Leah Naidoo website presents a professional personal brand for a legal professional through clear biography content, restrained visual direction, accessible structure, and a foundation for future growth.',
    seoDescription:
      'Leah Naidoo case study for Joseph Hangarter, covering a responsive professional legal website built with Next.js, JavaScript, Tailwind CSS, SEO, and Vercel.',
    role: 'Designer and Developer',
    timeline: 'Client website project',
    status: 'Live site',
    technologies: ['Next.js', 'JavaScript', 'Tailwind CSS', 'SEO', 'Responsive Design', 'Vercel'],
    liveUrl: 'https://leah-naidoo.vercel.app/',
    repositoryUrl: '',
    heroImage: '/project-previews/leahnaidoo.jpg',
    imageAlt: 'Leah Naidoo website shown on desktop and mobile devices',
    ctaPrimary: 'View Live Site',
    ctaSecondary: 'View Project Details',
    accent: 'gold',
    featured: true,
    problem:
      'A legal professional needed a credible digital presence that could present biography, credentials, and contact pathways without overstating the current scope or relying on generic legal imagery.',
    goals: [
      'Create a professional personal brand foundation.',
      'Present biography and credentials clearly.',
      'Keep the mobile reading experience accessible and direct.',
      'Deploy a fast, maintainable site that can expand over time.',
    ],
    responsibilities: [
      'Professional brand direction',
      'Responsive layout',
      'Accessible content hierarchy',
      'Reusable components',
      'Biography and credentials presentation',
      'Contact-focused flow',
      'SEO metadata',
      'Production deployment',
      'Foundation for future expansion',
    ],
    users: ['Professional contacts', 'Recruiters and legal-industry peers', 'Future site visitors seeking background and contact information'],
    features: [
      'Professional personal brand direction',
      'Biography and credentials presentation',
      'Mobile-first responsive design',
      'Accessible content hierarchy',
      'Contact-focused flow',
      'Reusable components',
      'SEO metadata',
      'Production deployment',
    ],
    architecture: ['Next.js site structure', 'JavaScript and Tailwind CSS implementation', 'Static content-first pages', 'Vercel deployment'],
    challenges: [
      'Keeping the design professional and personal without overstating the current public offering.',
      'Creating room for future content expansion while keeping the first version concise.',
    ],
    tradeoffs: ['Focused on credibility, content hierarchy, and maintainability instead of heavy animation or complex content systems.'],
    screenshots: ['Desktop homepage', 'Mobile homepage', 'Biography or credentials section', 'Contact section'],
    currentStatus: 'Leah Naidoo is live as a professional personal brand website with a foundation for future growth.',
    futureImprovements: ['Expanded content sections', 'Richer publishing workflow', 'Additional contact or inquiry flows if needed later'],
  },
];

export const skillGroups = [
  {
    title: 'Product Development',
    items: ['JavaScript', 'React', 'Next.js', 'TypeScript', 'Responsive UI', 'Component Architecture', 'Mobile-First Development'],
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
      'Contributed to healthcare websites, dashboards, WordPress and CMS integrations, API-backed workflows, authentication-related user flows, automated testing, production support, and cross-functional collaboration.',
    bullets: ['React and Next.js development', 'Healthcare websites and dashboards', 'WordPress and CMS integrations', 'API workflows', 'Authentication', 'Automated testing', 'Production support', 'Collaboration'],
  },
  {
    company: 'WhereKeep',
    role: 'Creator and Full-Stack Developer',
    period: 'Independent product development',
    description:
      'Planned, designed, built, deployed, and maintained a household inventory product across JavaScript, React, Next.js, Supabase, Stripe, responsive UI, and production operations.',
    bullets: ['Product planning', 'UX', 'JavaScript', 'React and Next.js', 'Supabase', 'Stripe', 'Deployment', 'Maintenance'],
  },
  {
    company: 'U.S. Navy',
    role: 'Master-at-Arms',
    period: 'Military service',
    description:
      'Built leadership, accountability, communication, operational discipline, and ownership habits in a mission-driven environment.',
    bullets: ['Leadership', 'Accountability', 'Communication', 'Operational discipline', 'Ownership'],
  },
];

export const howIWork = [
  {
    title: 'Product Thinking',
    description:
      'I consider the full user flow, business goal, edge cases, mobile behavior, and long-term maintainability, not only the individual ticket.',
  },
  {
    title: 'Production Discipline',
    description:
      'I build with accessibility, testing, performance, metadata, deployment, and future maintenance in mind.',
  },
  {
    title: 'Clear Ownership',
    description:
      'My engineering and Navy backgrounds taught me to communicate directly, document decisions, identify risks, and take responsibility for outcomes.',
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
