import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-[#6d3e95] rounded-3xl w-full max-w-md p-8 flex flex-col items-center text-center ${className}`}
    >
      {children}
    </div>
  );
}
