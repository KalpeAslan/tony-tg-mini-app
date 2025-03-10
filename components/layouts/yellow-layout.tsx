import type { ReactNode } from 'react';

interface YellowLayoutProps {
  children: ReactNode;
}

export function YellowLayout({ children }: YellowLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8c52c] via-[#f5a623] to-[#e07a19] relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen py-8 px-4">
        {children}
      </div>
    </div>
  );
}
