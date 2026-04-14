import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume — Saiyam Bajpai',
  description: 'Official resume of Saiyam Bajpai — CS & Data Science student at IIT Madras and MITS Gwalior. Projects, skills, and education.',
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
