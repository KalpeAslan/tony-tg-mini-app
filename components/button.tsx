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
  const baseStyles = 'font-bold rounded-full transition-colors flex items-center justify-center';

  const variantStyles = {
    primary: 'bg-[#33b1fc] text-white hover:bg-[#2aa0e5] disabled:bg-[#33b1fc]/50',
    secondary: 'bg-[#6d3e95] text-white hover:bg-[#5d2e85] disabled:bg-[#6d3e95]/50',
    outline: 'bg-transparent border-2 border-[#33b1fc] text-[#33b1fc] hover:bg-[#33b1fc]/10 disabled:opacity-50',
    orange:
      'bg-gradient-to-r from-[#e07a19] to-[#f5a623] text-white hover:from-[#d06a09] hover:to-[#e59613] shadow-md disabled:opacity-50',
    'orange-outline':
      'bg-transparent border-2 border-[#e07a19] text-[#e07a19] hover:bg-[#e07a19]/10 disabled:opacity-50',
    gray: 'bg-[#9e9e9e] text-white hover:bg-[#8e8e8e] shadow-md disabled:bg-[#9e9e9e]/50',
    blue: 'bg-[#33b1fc] text-white hover:bg-[#2aa0e5] shadow-md disabled:bg-[#33b1fc]/50',
    green: 'bg-[#55fc33] text-white hover:bg-[#45ec23] shadow-md disabled:bg-[#55fc33]/50',
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
