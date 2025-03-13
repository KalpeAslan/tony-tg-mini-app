'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardWithBorderProps {
  children: ReactNode;
  className?: string;
  borderStyle?: 'light' | 'medium' | 'strong' | 'none';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'none';
  bgColor?: string;
}

export function CardWithBorder({
  children,
  className = '',
  borderStyle = 'medium',
  rounded = 'xl',
  bgColor = 'bg-tony-secondary',
}: CardWithBorderProps) {
  const borderClasses = {
    light: 'border-2.5 border-tony-whiteBorder',
    medium: 'border-white-translucent',
    strong: 'border-2.5 border-tony-whiteBorderStrong',
    none: '',
  };

  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
    none: '',
  };

  return (
    <div
      className={cn(
        bgColor,
        borderClasses[borderStyle],
        roundedClasses[rounded],
        'p-6 w-full flex flex-col items-center',
        className
      )}
    >
      {children}
    </div>
  );
}
