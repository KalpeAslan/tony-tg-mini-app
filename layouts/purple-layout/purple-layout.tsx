import type { ReactNode } from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { useEffect } from 'react';
import styles from './purple-layout.module.css';

interface PurpleLayoutProps {
  children: ReactNode;
}

export function PurpleLayout({ children }: PurpleLayoutProps) {
  const { setTheme } = useNextTheme();

  // Set theme to dark when this layout is used
  useEffect(() => {
    setTheme('dark');

    // Cleanup function to reset theme if needed
    return () => {};
  }, [setTheme]);

  return (
    <div className={`${styles.layout}`}>
      {/* Stars background */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.5,
            }}
          />
        ))}
      </div>

      <div>{children}</div>
    </div>
  );
}
