import type { ReactNode } from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { useEffect } from 'react';

interface YellowLayoutProps {
  children: ReactNode;
}

export function YellowLayout({ children }: YellowLayoutProps) {
  const { setTheme } = useNextTheme();

  // Set theme to light when this layout is used
  useEffect(() => {
    setTheme('light');

    // Cleanup function to reset theme if needed
    return () => {};
  }, [setTheme]);

  return (
    <div className="bg-gradient-to-b from-tony-yellow via-tony-orangeLight to-tony-orange">
      {children}
    </div>
  );
}
