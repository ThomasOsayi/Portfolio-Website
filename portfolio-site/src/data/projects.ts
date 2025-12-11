// src/data/projects.ts

export interface ProjectFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category?: string;
  description: string;
  longDescription?: string;
  tags: string[];
  fullTags?: string[];
  gradient: string;
  accent: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  
  // Enhanced fields
  status?: 'live' | 'in-progress' | 'archived' | 'private';
  role?: string;
  features?: ProjectFeature[];
  metrics?: ProjectMetric[];
  previewImage?: string;
  previewVideo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'nom',
    title: 'NOM',
    subtitle: 'Startup App',
    category: 'STARTUP APP',
    description:
      'Leading product design and Firebase architecture for a food discovery app with LMU Tech & Digital Ventures.',
    longDescription:
      'Spearheading end-to-end product development—from user research and wireframing to implementing real-time Firebase backend and React Native frontend. Collaborating with a cross-functional team to ship features that improve user retention.',
    tags: ['React Native', 'Firebase', 'Product Design', 'User Research'],
    fullTags: ['React Native', 'Firebase', 'TypeScript', 'Figma', 'User Research', 'Product Design', 'Expo'],
    gradient: 'from-violet-600 via-purple-600 to-indigo-600',
    accent: '#8b5cf6',
    status: 'in-progress',
    role: 'Product Lead & Developer',
    features: [
      {
        title: 'Real-time Backend',
        description: 'Firebase architecture with live data sync and cloud functions',
        icon: '🔥'
      },
      {
        title: 'User Research',
        description: 'Conducted user interviews and usability testing to inform design decisions',
        icon: '🔍'
      },
      {
        title: 'Cross-functional Team',
        description: 'Collaborating with designers, developers, and stakeholders at LMU incubator',
        icon: '👥'
      }
    ],
    metrics: [
      { label: 'Status', value: 'In Development' },
      { label: 'Team', value: 'LMU Incubator' },
      { label: 'Role', value: 'Product Lead' }
    ],
    previewVideo: '/videos/nom-preview.mp4',
  },
  {
    id: 2,
    slug: 'hoopgang',
    title: 'HoopGang',
    subtitle: 'Creator Portal',
    category: 'CREATOR PORTAL',
    description:
      'Production creator management platform handling applications, approvals, and shipment tracking for a live influencer program.',
    longDescription:
      `Built and deployed a production creator management platform for HoopGang's influencer outreach program. The system handles the complete creator lifecycle—from application submission with email verification, through admin review and approval, to shipment tracking and content deadline management.

Key technical achievements include a custom multi-step email verification flow using Firebase Admin SDK, branded transactional emails via React Email + Resend, role-based dashboards with real-time Firestore sync, and a shipping tracking system with automated status notifications.`,
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Full-Stack'],
    fullTags: [
      'Next.js 14',
      'TypeScript',
      'Firebase Auth',
      'Firestore',
      'React Email',
      'Resend API',
      'Tailwind CSS',
      'Vercel'
    ],
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    accent: '#f59e0b',
    liveUrl: 'https://thehoopgang.xyz',
    status: 'live',
    role: 'Full-Stack Developer',
    features: [
      {
        title: 'Multi-Role Auth System',
        description: 'Separate admin and creator dashboards with Firebase Auth + custom role management',
        icon: '🔐'
      },
      {
        title: 'Email Verification Flow',
        description: 'Custom branded emails using React Email + Resend API + Firebase Admin SDK',
        icon: '✉️'
      },
      {
        title: 'Application Pipeline',
        description: 'Creator applications with review, approve/deny actions, and status tracking',
        icon: '📋'
      },
      {
        title: 'Shipment Tracking',
        description: 'Package tracking with automated status emails and content deadlines',
        icon: '📦'
      }
    ],
    metrics: [
      { label: 'Status', value: 'Live & Deployed' },
      { label: 'Users', value: 'Active Team' },
      { label: 'Stack', value: 'Next.js + Firebase' }
    ],
    previewImage: '/images/hoopgang-preview.png',
  },
  {
    id: 3,
    slug: 'ai-engine',
    title: 'AI Engine',
    subtitle: 'Game Intelligence',
    category: 'GAME INTELLIGENCE',
    description:
      'Intelligent game AI using alpha-beta pruning and minimax algorithms for optimal decision-making.',
    longDescription:
      'Developed a Python-based game AI engine featuring alpha-beta pruning optimization, achieving significant performance gains over naive minimax. Applied to classic strategy games with configurable difficulty levels and move analysis.',
    tags: ['Python', 'AI/ML', 'Algorithms', 'Game Dev'],
    fullTags: ['Python', 'Minimax', 'Alpha-Beta Pruning', 'Game Theory', 'Algorithm Design', 'Performance Optimization'],
    gradient: 'from-cyan-500 via-teal-500 to-emerald-500',
    accent: '#14b8a6',
    status: 'archived',
    role: 'Solo Developer',
    features: [
      {
        title: 'Alpha-Beta Pruning',
        description: 'Optimized minimax with pruning for faster decision trees',
        icon: '🧠'
      },
      {
        title: 'Configurable Difficulty',
        description: 'Adjustable search depth for varying AI challenge levels',
        icon: '🎮'
      },
      {
        title: 'Move Analysis',
        description: 'Visual representation of AI decision-making process',
        icon: '📊'
      }
    ],
    metrics: [
      { label: 'Algorithm', value: 'Minimax + α-β' },
      { label: 'Language', value: 'Python' },
      { label: 'Type', value: 'Academic Project' }
    ],
  },
  {
    id: 4,
    slug: 'analytics',
    title: 'Analytics',
    subtitle: 'Business Dashboard',
    category: 'BUSINESS DASHBOARD',
    description:
      'Interactive financial modeling dashboard with real-time visualization and market analysis tools.',
    longDescription:
      'Created a data visualization dashboard using React and D3.js, featuring interactive charts, dynamic filtering, and responsive design. Integrated with financial APIs for live market data and trend analysis.',
    tags: ['React', 'D3.js', 'Data Viz', 'Analytics'],
    fullTags: ['React', 'D3.js', 'Chart.js', 'REST APIs', 'Responsive Design', 'Data Visualization', 'JavaScript'],
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    accent: '#ec4899',
    status: 'archived',
    role: 'Frontend Developer',
    features: [
      {
        title: 'Interactive Charts',
        description: 'Dynamic D3.js visualizations with hover states and tooltips',
        icon: '📈'
      },
      {
        title: 'Real-time Data',
        description: 'Live API integration for up-to-date market information',
        icon: '⚡'
      },
      {
        title: 'Smart Filtering',
        description: 'Multi-parameter filtering with instant visual updates',
        icon: '🔧'
      }
    ],
    metrics: [
      { label: 'Charts', value: 'D3.js + Chart.js' },
      { label: 'Data', value: 'Live APIs' },
      { label: 'Type', value: 'Dashboard' }
    ],
  },
];