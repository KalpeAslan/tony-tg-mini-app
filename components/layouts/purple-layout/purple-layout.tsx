import type { ReactNode } from 'react';
import styles from './purple-layout.module.css';
interface PurpleLayoutProps {
  children: ReactNode;
}

export function PurpleLayout({ children }: PurpleLayoutProps) {
  return (
    <div className={`${styles.layout} min-h-screen  relative overflow-hidden`}>
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

      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen py-8 px-4">
        {children}
      </div>
    </div>
  );
}
