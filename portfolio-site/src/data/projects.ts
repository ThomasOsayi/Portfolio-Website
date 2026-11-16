// All site copy lives here so the layout never needs touching to update content.

export interface Product {
  title: string;
  tag: string;
  desc: string;
  url?: string;
  urlLabel?: string;
  image?: string;
  alt?: string;
  kind?: 'nom';
}

export const products: Product[] = [
  {
    title: 'SQWAD',
    tag: 'SaaS · Founder',
    desc: 'UGC creator program software for Shopify brands. Applications, shipping, content, competitions and payouts on a branded portal, with every Meta ad traced back to the creator who made the sale.',
    url: 'https://joinsqwad.com',
    urlLabel: 'joinsqwad.com',
    image: '/work/sqwad.jpg',
    alt: 'SQWAD homepage: Your creators drive sales. Now you can prove it.',
  },
  {
    title: 'Guardian MindCare',
    tag: 'Healthcare platform',
    desc: 'Therapy practice platform that matches clients with licensed therapists and supervised associates who take their insurance, with role-based portals for therapists, supervisors, trainees, clients and admins.',
    url: 'https://www.guardianmindcare.com',
    urlLabel: 'guardianmindcare.com',
    image: '/work/guardian.jpg',
    alt: 'Guardian MindCare homepage: Real therapy, in network with your plan, with a therapist search by insurance',
  },
  {
    title: 'TheHoopGang',
    tag: 'Creator portal',
    desc: 'Creator portal for a basketball streetwear brand. Manages 50+ creators, tracks content and runs refundable gear gifting.',
    url: 'https://thehoopgang.xyz',
    urlLabel: 'thehoopgang.xyz',
    image: '/work/hoopgang.jpg',
    alt: 'TheHoopGang creator portal landing page',
  },
  {
    title: 'NOM',
    tag: 'Mobile app · LMU Tech & Digital Ventures',
    desc: 'Food discovery app built in React Native, Expo and Firebase. Share restaurant reviews with photos, ratings and comments in a social feed.',
    kind: 'nom',
  },
  {
    title: 'THG Brain',
    tag: 'Internal data platform',
    desc: "Every number The Hoop Gang runs on in one place: sales, email, ads, support inbox and the creator portal, synced and searchable, and queryable straight from the team's own Claude.",
    image: '/work/thgbrain.jpg',
    alt: 'THG Brain sign-in: Every number THG runs on, in one place',
  },
];

export interface Client {
  name: string;
  accent: string;
  desc: string;
  url: string;
  image: string;
}

// ordered by weight: funded startups and healthcare first, local businesses after
export const clients: Client[] = [
  { name: 'Ven', accent: 'Care', desc: 'Health startup. Wall-mounted epinephrine stations for venues, like an AED for allergic reactions.', url: 'https://www.vencarehealth.com', image: '/work/vencare.jpg' },
  { name: 'Pacific', accent: 'Harbor', desc: 'Medical group. Physician-led executive physicals in Torrance and the South Bay.', url: 'https://phmg-executive-physical.vercel.app', image: '/work/phmg.jpg' },
  { name: 'SCOPRO', accent: 'Creators', desc: 'Creator program for a coaching board brand. Buy, post one video, get refunded, earn on sales.', url: 'https://www.scoprocreatorportal.com', image: '/work/scopro.jpg' },
  { name: 'Serenity', accent: 'Institute', desc: 'Live, Zoom-based certification program for intervention professionals.', url: 'https://serenityintervention.com', image: '/work/serenity.jpg' },
  { name: 'New York', accent: 'Nook', desc: 'Russian restaurant, Hollywood. Reservations and pickup ordering.', url: 'https://new-york-nook.vercel.app', image: '/work/newyorknook.jpg' },
  { name: 'Artistic', accent: 'Printing', desc: 'Commercial printer. Quote management and client intake.', url: 'https://www.artisticprinting.com', image: '/work/artistic.jpg' },
  { name: 'Field', accent: 'Ops', desc: 'Job scheduling with Outlook Calendar sync for field teams.', url: 'https://fieldopapp.com', image: '/work/fieldops.jpg' },
  { name: 'Asti', accent: 'glow', desc: 'Waxing studio. Online booking and service packages.', url: 'https://asti-glow.vercel.app', image: '/work/astiglow.jpg' },
];

export interface Role {
  when: string;
  org: string;
  role: string;
  what: string;
}

export const experience: Role[] = [
  { when: 'Now', org: 'SQWAD', role: 'Founder & software engineer', what: 'Building the platform and signing the brands that run their creator programs on it.' },
  { when: 'Nov 2025 to now', org: 'The Hoop Gang', role: 'Software engineer', what: 'Full-stack e-commerce and creator platform for a streetwear brand expanding to Japan and France. Next.js, TypeScript, Prisma, Postgres.' },
  { when: 'Oct 2025 to now', org: 'LMU Tech & Digital Ventures', role: 'Software engineer', what: 'Built NOM end to end in React Native and Firebase, from an 11-screen onboarding flow to camera uploads.' },
  { when: 'Ongoing', org: 'HNO Consulting', role: 'Freelance web developer', what: 'Sites and booking, ordering and quote tools for LA businesses.' },
  { when: '2027', org: 'Loyola Marymount University', role: 'B.S. Computer Science', what: 'Expected May 2027.' },
];

export const stackCards = [
  { label: '01 · Frontend', title: 'React & Next.js', text: 'Server components, the App Router and the wider React ecosystem.', bg: '#1d1e24', fg: 'var(--bone)' },
  { label: '02 · Mobile', title: 'React Native', text: 'Expo apps with camera, uploads and native navigation.', bg: '#2a2fd8', fg: '#fff' },
  { label: '03 · Language', title: 'TypeScript', text: 'Type safety from the database schema to the component.', bg: '#e9e6df', fg: '#0b0b0c' },
  { label: '04 · Backend', title: 'Firebase & Postgres', text: 'Auth, Firestore and Functions, or Supabase and Prisma when the data is relational.', bg: '#24302a', fg: '#e9f3ec' },
  { label: '05 · Design', title: 'Figma', text: 'Design systems before a line of code.', bg: '#3a1f2a', fg: '#f6dfe7' },
  { label: '06 · Motion', title: 'GSAP & WebGL', text: 'Scroll choreography, shaders and everything that moves on this page.', bg: '#121214', fg: 'var(--bone)' },
];

export const ringWords = ['React', 'Next.js', 'TypeScript', 'React Native', 'Expo', 'Firebase', 'Supabase', 'Postgres', 'Prisma', 'Python', 'Figma', 'GSAP', 'WebGL', 'Stripe', 'Vercel'];
