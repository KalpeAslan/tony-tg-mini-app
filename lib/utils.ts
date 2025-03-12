import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function getCssVar(name: string): string {
  if (typeof window !== "undefined") {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  }
  return ""
}

