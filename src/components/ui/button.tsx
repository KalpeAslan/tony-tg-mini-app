'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { ButtonVariant, ButtonSize } from '@/lib/types';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
}

export function Button({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'font-bold rounded-full transition-colors uppercase flex items-center justify-center border-white-translucent font-roboto';

  const variantStyles = {
    primary: 'bg-tony-accent text-white hover:bg-tony-accentHover disabled:bg-tony-accent/50',
    secondary:
      'bg-tony-secondary text-white hover:bg-tony-secondaryHover disabled:bg-tony-secondary/50',
    outline:
      'bg-transparent border-2 border-tony-accent text-tony-accent hover:bg-tony-accent/10 disabled:opacity-50',
    orange:
      'bg-gradient-to-r from-tony-orange to-tony-orangeLight text-white hover:from-tony-orangeDark hover:to-tony-orangeHover shadow-md disabled:opacity-50',
    'orange-outline':
      'bg-transparent border-2 border-tony-orange text-tony-orange hover:bg-tony-orange/10 disabled:opacity-50',
    gray: 'bg-tony-gray text-white hover:bg-tony-grayHover shadow-md disabled:bg-tony-gray/50',
    blue: 'bg-tony-blue text-white hover:bg-tony-blueHover shadow-md disabled:bg-tony-blue/50',
    green: 'bg-tony-green text-white hover:bg-tony-greenHover shadow-md disabled:bg-tony-green/50',
  };

  const sizeStyles = {
    sm: 'text-sm py-2 px-4',
    md: 'text-lg py-3 px-6',
    lg: 'text-2xl py-4 px-8',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], widthStyle, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
