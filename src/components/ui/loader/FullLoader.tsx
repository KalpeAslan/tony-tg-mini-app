import React from 'react';

interface FullLoaderProps {
  isVisible?: boolean;
}

export const FullLoader: React.FC<FullLoaderProps> = ({ isVisible = true }) => {
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md">
        <video
          src="/loader.MP4"
          className="w-full h-auto"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}; 