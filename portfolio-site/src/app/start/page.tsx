import type { Metadata } from 'next';
import Inquiry from '@/components/Inquiry';

export const metadata: Metadata = {
  title: 'Start a project | Thomas Osayi',
  description: 'Tell me what you want to build. Six quick questions, then book an intro call if you want one.',
  alternates: { canonical: '/start' },
};

export default function StartPage() {
  return <Inquiry />;
}
