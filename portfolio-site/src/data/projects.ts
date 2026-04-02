export interface Project {
  num: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  url?: string;
}

export const projects: Project[] = [
  {
    num: '01',
    tag: 'Creator Management',
    title: 'TheHoopGang',
    desc: 'Creator portal for basketball\'s biggest streetwear brand. Manage 50+ creators, track content, and handle refundable gear gifting — all in one dashboard.',
    image: '/projects/hoopgang.png',
    url: 'https://thehoopgang.xyz',
  },
  {
    num: '02',
    tag: 'SaaS Platform',
    title: 'SQWAD',
    desc: 'Creator management SaaS for brands and agencies. Track UGC programs, gifting, content, and Meta Ads attribution from one platform.',
    image: '/projects/sqwad.png',
    url: 'https://sqwad.io',
  },
  {
    num: '03',
    tag: 'Restaurant Website',
    title: 'New York Nook',
    desc: 'Fine Russian cuisine in Hollywood. Full reservation booking system and online pickup ordering built into a premium editorial design.',
    image: '/projects/newyorknook.png',
    url: 'https://new-york-nook.vercel.app',
  },
  {
    num: '04',
    tag: 'Local Business',
    title: 'Majestic Car Wash',
    desc: 'Landing page with integrated subscription management — membership verification, tracking, and payment handling for a 40-year LA institution.',
    image: '/projects/majestic.png',
    url: 'https://majestic-car-wash.vercel.app',
  },
  {
    num: '05',
    tag: 'B2B Platform',
    title: 'Artistic Printing',
    desc: 'End-to-end quote management system for a commercial printer. Self-updatable site with service catalog, portfolio, and client intake pipeline.',
    image: '/projects/artistic.png',
    url: 'https://www.artisticprinting.com',
  },
  {
    num: '06',
    tag: 'Beauty & Wellness',
    title: 'Astiglow',
    desc: 'Premium waxing studio website with online booking integration, service packages, and a clean editorial aesthetic for a luxury LA brand.',
    image: '/projects/astiglow.png',
    url: 'https://asti-glow.vercel.app',
  },
  {
    num: '07',
    tag: 'Operations Tool',
    title: 'FieldOps',
    desc: 'Job scheduling platform with Outlook Calendar sync. Manage field operations, contacts, and documents from a single dashboard.',
    image: '/projects/fieldops.png',
    url: 'https://fieldopapp.com',
  },
];