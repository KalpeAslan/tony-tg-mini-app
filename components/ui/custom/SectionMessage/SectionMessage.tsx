import { FC, PropsWithChildren } from 'react';
import { TRadius, TSizes, TColors } from './types';
import { cn } from '@/lib/utils';

interface SectionMessageProps extends PropsWithChildren {
  radius?: TRadius;
  color?: TColors;
  size?: TSizes;
  fullWidth?: boolean;
}

export const SectionMessage: FC<SectionMessageProps> = ({
  radius = 'sm',
  color = 'default',
  size = 'sm',
  children,
  fullWidth = false,
}) => {
  return (
    <div
      className={cn(
        'uppercase text-xl border-white-translucent text-center font-roboto min-w-[90px]',
        radiusStyles[radius],
        colorStyles[color],
        sizeStyles[size],
        fullWidth && 'w-full'
      )}
    >
      {children}
    </div>
  );
};

const radiusStyles: Record<TRadius, string> = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-3xl',
  full: 'rounded-full',
};

const colorStyles: Record<TColors, string> = {
  success: 'bg-success',
  neutral: 'bg-neutral',
  warning: 'bg-warning',
  info: 'bg-info',
  default: 'bg-card',
};

const sizeStyles: Record<TSizes, string> = {
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
};
