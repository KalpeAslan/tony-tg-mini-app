import type { ReactNode } from 'react';

interface YellowLayoutProps {
  children: ReactNode;
}

export function YellowLayout({ children }: YellowLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-tony-yellow via-tony-orangeLight to-tony-orange relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen py-8 px-4">
        {children}
      </div>
    </div>
  );
}
