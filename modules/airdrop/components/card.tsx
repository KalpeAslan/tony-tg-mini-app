import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  withBorder?: boolean;
}

export function Card({ children, className = '', withBorder = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-tony-secondary rounded-3xl w-full max-w-md p-8 flex flex-col items-center text-center h-[390px]',
        withBorder && 'border-white-translucent',
        className
      )}
    >
      {children}
    </div>
  );
}
