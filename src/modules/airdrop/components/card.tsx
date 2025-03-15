import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends PropsWithChildren {
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={cn(
        'rounded-3xl w-full max-w-md flex flex-col items-center text-center h-full',
        'border-white-translucent overflow-hidden',
        className
      )}
      style={{
        background:
          'linear-gradient(15deg, rgba(80,29,124,0.9878545168067226) 63%, rgba(80,29,124,0.6209077380952381) 100%)',
      }}
    >
      {children}
    </div>
  );
};
