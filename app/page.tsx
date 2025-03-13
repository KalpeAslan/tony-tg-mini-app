'use client';

import { AppLayout } from '@/components/layouts/AppLayout';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './shack.module.css';

export default function ShackPage() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 500); // Animation completes after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppLayout activeTab="shack">
      <div className={styles.shackContainer}>
        {/* Animation container */}
        <div className={styles.animationContainer}>
          <div className={`${styles.topImage} ${animationComplete ? styles.topConnected : ''}`}>
            <Image
              src="/shack/shack_top.jpeg"
              alt="Shack Top"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div
            className={`${styles.bottomImage} ${animationComplete ? styles.bottomConnected : ''}`}
          >
            <Image
              src="/shack/shack_bottom.jpeg"
              alt="Shack Bottom"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        {/* Main content (shown after animation) */}
        <div className={`${styles.mainContent} ${animationComplete ? styles.visible : ''}`}>
          <h1>Main card</h1>
        </div>
      </div>
    </AppLayout>
  );
}
