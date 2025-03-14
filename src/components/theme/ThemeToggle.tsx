'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/context/ThemeContext';
import { Button } from '@/components/button';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button
      variant="outline"
      size="sm"
      className={`rounded-full p-2 ${className}`}
      onClick={toggleTheme}
    >
      {theme === 'purple' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
} 