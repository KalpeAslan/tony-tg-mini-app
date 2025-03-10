'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'orange'
  | 'orange-outline'
  | 'gray'
  | 'blue'
  | 'green';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = 'font-bold rounded-full transition-colors flex items-center justify-center';

  const variantStyles = {
    primary: 'bg-[#33b1fc] text-white hover:bg-[#2aa0e5]',
    secondary: 'bg-[#6d3e95] text-white hover:bg-[#5d2e85]',
    outline: 'bg-transparent border-2 border-[#33b1fc] text-[#33b1fc] hover:bg-[#33b1fc]/10',
    orange:
      'bg-gradient-to-r from-[#e07a19] to-[#f5a623] text-white hover:from-[#d06a09] hover:to-[#e59613] shadow-md',
    'orange-outline':
      'bg-transparent border-2 border-[#e07a19] text-[#e07a19] hover:bg-[#e07a19]/10',
    gray: 'bg-[#9e9e9e] text-white hover:bg-[#8e8e8e] shadow-md',
    blue: 'bg-[#33b1fc] text-white hover:bg-[#2aa0e5] shadow-md',
    green: 'bg-[#55fc33] text-white hover:bg-[#45ec23] shadow-md',
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
    >
      {children}
    </button>
  );
}
