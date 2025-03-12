'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BorderedContainerProps {
  children: ReactNode;
  className?: string;
  borderStyle?: 'light' | 'medium' | 'strong';
  rounded?: boolean;
}

export function BorderedContainer({
  children,
  className = '',
  borderStyle = 'medium',
  rounded = true,
}: BorderedContainerProps) {
  const borderClasses = {
    light: 'border-2.5 border-tony-whiteBorder',
    medium: 'border-white-translucent',
    strong: 'border-2.5 border-tony-whiteBorderStrong',
  };

  return (
    <div
      className={cn(
        borderClasses[borderStyle],
        rounded && 'rounded-xl',
        className
      )}
    >
      {children}
    </div>
  );
} 