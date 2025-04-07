import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function getCssVar(name: string): string {
  if (typeof window !== "undefined") {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  }
  return ""
}


export function formatNumber(number: number): string {
  return number.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}


export function formatDate(date: Date): string {
  return dayjs(date).format('DD-MM-YYYY');
}