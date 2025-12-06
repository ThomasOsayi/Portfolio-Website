export interface Project {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    longDescription?: string;
    tags: string[];
    gradient: string;
    accent: string;
    liveUrl?: string;
    githubUrl?: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      slug: 'nom',
      title: 'NOM',
      subtitle: 'Startup App',
      description:
        'Leading product design and Firebase architecture for a food discovery app with LMU Tech & Digital Ventures.',
      longDescription:
        'Spearheading end-to-end product development—from user research and wireframing to implementing real-time Firebase backend and React Native frontend. Collaborating with a cross-functional team to ship features that improve user retention.',
      tags: ['React Native', 'Firebase', 'Product Design', 'User Research'],
      gradient: 'from-violet-600 via-purple-600 to-indigo-600',
      accent: '#8b5cf6',
    },
    {
      id: 2,
      slug: 'hoopgang',
      title: 'HoopGang',
      subtitle: 'Creator Portal',
      description:
        'Full-stack platform for managing influencer partnerships with admin dashboards and creator-facing tools.',
      longDescription:
        'Built a React-based creator portal with role-based authentication, analytics dashboards, and campaign management features. Designed intuitive admin interfaces for partnership tracking and payout workflows.',
      tags: ['React', 'Node.js', 'Full-Stack', 'Dashboard'],
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      accent: '#f59e0b',
    },
    {
      id: 3,
      slug: 'ai-engine',
      title: 'AI Engine',
      subtitle: 'Game Intelligence',
      description:
        'Intelligent game AI using alpha-beta pruning and minimax algorithms for optimal decision-making.',
      longDescription:
        'Developed a Python-based game AI engine featuring alpha-beta pruning optimization, achieving significant performance gains over naive minimax. Applied to classic strategy games with configurable difficulty levels.',
      tags: ['Python', 'AI/ML', 'Algorithms', 'Game Dev'],
      gradient: 'from-cyan-500 via-teal-500 to-emerald-500',
      accent: '#14b8a6',
    },
    {
      id: 4,
      slug: 'analytics',
      title: 'Analytics',
      subtitle: 'Business Dashboard',
      description:
        'Interactive financial modeling dashboard with real-time visualization and market analysis tools.',
      longDescription:
        'Created a data visualization dashboard using React and D3.js, featuring interactive charts, filtering capabilities, and responsive design. Integrated with financial APIs for live market data.',
      tags: ['React', 'D3.js', 'Data Viz', 'Analytics'],
      gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
      accent: '#ec4899',
    },
  ];