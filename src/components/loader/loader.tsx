import React from 'react';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = 'primary',
  className = '',
}) => {
  const sizeClasses = {
    small: 'w-4 h-4 border-2',
    medium: 'w-8 h-8 border-3',
    large: 'w-12 h-12 border-4',
  };

  const colorClasses = {
    primary: 'bg-info border-white-translucent',
    secondary: 'bg-info border-white-translucent',
    white: 'bg-info border-white-translucent',
  };

  return (
    <div className={`${className} flex items-center justify-center`}>
      <div
        className={`
          ${sizeClasses[size]}
          ${colorClasses[color]}
          rounded-full
          animate-spin
        `}
      />
    </div>
  );
};

export default Loader;
