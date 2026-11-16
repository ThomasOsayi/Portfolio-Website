// Questions for the /start inquiry flow. Edit the copy and options here.

export const INQUIRY_EMAIL = 'thomasosayi@gmail.com';
export const CALENDLY_URL = 'https://calendly.com/thomas-joinsqwad/project-intro-call';

export type Step =
  | { id: string; kind: 'multi' | 'single'; title: string; hint?: string; options: string[]; optional?: boolean }
  | { id: 'details'; kind: 'text'; title: string; hint?: string }
  | { id: 'contact'; kind: 'contact'; title: string; hint?: string };

export const steps: Step[] = [
  {
    id: 'need',
    kind: 'multi',
    title: 'What are we building?',
    hint: 'Pick everything that applies.',
    options: ['Website', 'Web app or SaaS', 'Mobile app', 'E-commerce or Shopify', 'Booking or ordering system', 'Redesign of an existing site', 'Creator program (SQWAD)', 'Something else'],
  },
  {
    id: 'stage',
    kind: 'single',
    title: 'Where are you at right now?',
    options: ['Just an idea', 'I have designs or a brief', 'I have a site or app that needs work', 'I need ongoing help'],
  },
  {
    id: 'budget',
    kind: 'single',
    title: "What's the budget?",
    hint: 'A range is fine. It helps me scope the right thing.',
    options: ['Under $2,500', '$2,500 to $5,000', '$5,000 to $10,000', '$10,000 to $25,000', '$25,000+', 'Not sure yet'],
  },
  {
    id: 'timeline',
    kind: 'single',
    title: 'When do you need it?',
    options: ['As soon as possible', 'Within a month', 'In 1 to 3 months', "Flexible, let's talk"],
  },
  {
    id: 'details',
    kind: 'text',
    title: 'Tell me a bit more.',
    hint: 'What it should do, who it is for, and links to anything you like. Optional.',
  },
  {
    id: 'contact',
    kind: 'contact',
    title: 'Where should I reply?',
    hint: 'I usually answer within a day.',
  },
];

export const heardFrom = ['LinkedIn', 'Referral', 'LMU', 'Google', 'SQWAD', 'Other'];
