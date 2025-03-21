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
  loading?: boolean;
  active?: boolean;
}

export function Button({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  active = true,
}: ButtonProps) {
  const activeStyles = active ? 'active:scale-95 active:transform transition-transform' : '';

  const baseStyles = `font-bold rounded-full transition-colors uppercase flex items-center justify-center border-white-translucent ${activeStyles}`;

  const variantStyles = {
    primary:
      'bg-info text-white hover:bg-tony-accentHover active:bg-tony-accentHover disabled:bg-tony-accent/50',
    secondary:
      'bg-tony-secondary text-white hover:bg-tony-secondaryHover active:bg-tony-secondaryHover disabled:bg-tony-secondary/50',
    outline:
      'bg-transparent border-2 border-tony-accent text-tony-accent hover:bg-tony-accent/10 active:bg-tony-accent/20 disabled:opacity-50',
    orange:
      'bg-gradient-to-r from-tony-orange to-tony-orangeLight text-white hover:from-tony-orangeDark hover:to-tony-orangeHover active:from-tony-orangeDark active:to-tony-orangeHover shadow-md disabled:opacity-50',
    'orange-outline':
      'bg-transparent border-2 border-tony-orange text-tony-orange hover:bg-tony-orange/10 active:bg-tony-orange/20 disabled:opacity-50',
    gray: 'bg-tony-gray text-white hover:bg-tony-grayHover active:bg-tony-grayHover shadow-md disabled:bg-tony-gray/50',
    blue: 'bg-tony-blue text-white hover:bg-tony-blueHover active:bg-tony-blueHover shadow-md disabled:bg-tony-blue/50',
    green:
      'bg-tony-green text-white hover:bg-tony-greenHover active:bg-tony-greenHover shadow-md disabled:bg-tony-green/50',
  };

  const sizeStyles = {
    sm: 'text-sm py-2 px-4',
    md: 'text-lg py-3 px-6',
    lg: 'text-2xl py-4 px-8',
    'extra-sm': 'text-sm py-2 px-4',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  const handleInteraction = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], widthStyle, className)}
      onClick={handleInteraction}
      onTouchStart={e => e.currentTarget.classList.add('touch-active')}
      onTouchEnd={e => {
        e.currentTarget.classList.remove('touch-active');
        handleInteraction();
      }}
      disabled={disabled}
    >
      {loading ? (
        <div
          className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"
          aria-label="Loading"
        ></div>
      ) : (
        children
      )}
    </button>
  );
}
