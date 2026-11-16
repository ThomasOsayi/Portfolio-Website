import type { Metadata } from 'next';
import Inquiry from '@/components/Inquiry';
import { answersFromParams } from '@/data/inquiry';

export const metadata: Metadata = {
  title: 'Start a project | Thomas Osayi',
  description: 'Tell me what you want to build. Six quick questions, then book an intro call if you want one.',
  alternates: { canonical: '/start' },
};

export default async function StartPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  return <Inquiry initialAnswers={answersFromParams(await searchParams)} />;
}
