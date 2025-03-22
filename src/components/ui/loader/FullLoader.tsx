import React from 'react';
import styles from './FullLoader.module.css';

interface FullLoaderProps {
  isVisible?: boolean;
}

export const FullLoader: React.FC<FullLoaderProps> = ({ isVisible = true }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video
          src="/loader.MP4"
          className={styles.backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/loader-poster.png"
          disablePictureInPicture
          disableRemotePlayback
        />
      </div>
    </div>
  );
};
